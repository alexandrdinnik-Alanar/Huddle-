import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

function repositoryPath(...parts: string[]): string {
  return path.join(root, ...parts);
}

function readText(...parts: string[]): string {
  return fs.readFileSync(repositoryPath(...parts), "utf8").replace(/^\uFEFF/, "");
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];

    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (character === "," && !quoted) {
      values.push(value);
      value = "";
      continue;
    }

    value += character;
  }

  values.push(value);
  return values;
}

function readCsv(...parts: string[]): Record<string, string>[] {
  const lines = readText(...parts)
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0);
  const [headerLine, ...dataLines] = lines;

  if (!headerLine) {
    throw new Error(`CSV is empty: ${parts.join("/")}`);
  }

  const headers = parseCsvLine(headerLine);

  return dataLines.map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

describe("repository execution integrity", () => {
  it("contains every canonical execution and source-of-truth file", () => {
    const requiredPaths = [
      "README.md",
      "NEXT_TASK.md",
      "AGENTS.md",
      "CLAUDE.md",
      ".ai/HUDDLE_RULES.md",
      "docs/00-source-of-truth/brand-system.md",
      "docs/00-source-of-truth/design-source-of-truth.md",
      "docs/01-product/design-source-inventory.csv",
      "docs/01-product/screen-route-registry.csv",
      "docs/02-architecture/canonical-route-map.csv",
      "docs/05-execution/implementation-roadmap.csv",
      "docs/06-operations/launch-readiness.md",
      "tasks/design/VIS-002.md",
      "tasks/phase-0/S0-015.md",
      "tasks/phase-0/S0-016.md",
      "tasks/phase-0/S0-017.md",
      "tasks/phase-0/S0-018.md",
    ];

    for (const requiredPath of requiredPaths) {
      expect(fs.existsSync(repositoryPath(requiredPath)), requiredPath).toBe(true);
    }
  });

  it("points agents unambiguously to VIS-002 and blocks S0-015", () => {
    const nextTask = readText("NEXT_TASK.md");
    const readme = readText("README.md");
    const s0015 = readText("tasks/phase-0/S0-015.md");

    expect(nextTask).toContain("VIS-002 — Create the canonical Figma production foundation");
    expect(nextTask).toContain("tasks/design/VIS-002.md");
    expect(nextTask).toContain("S0-015 — Create base layouts");
    expect(nextTask).toContain("S0-015 may start only after VIS-002");
    expect(readme).toContain(
      "The current executable task is `VIS-002 — Create the canonical Figma production foundation`",
    );
    expect(readme).toContain("No approved Huddle product design currently exists in Figma");
    expect(s0015).toContain("Status: `BLOCKED` until VIS-002 is approved and merged");
    expect(readme).not.toContain("The next executable task is `S0-015 — Create base layouts`");
  });

  it("does not describe the repository as pre-Sprint-0", () => {
    const launchReadiness = readText("docs/06-operations/launch-readiness.md");

    expect(launchReadiness).not.toContain("still pre-Sprint-0");
    expect(launchReadiness).toContain("S0-015` through `S0-018` remain");
  });
});

describe("canonical route and design registries", () => {
  const routeRows = readCsv("docs/02-architecture/canonical-route-map.csv");
  const registryRows = readCsv("docs/01-product/screen-route-registry.csv");
  const sourceRows = readCsv("docs/01-product/design-source-inventory.csv");

  it("keeps the canonical route map unique with 105 routes and 46 P0 routes", () => {
    const routes = routeRows.map((row) => row.route);
    const p0Routes = routeRows.filter((row) => row.priority === "P0").map((row) => row.route);

    expect(routeRows).toHaveLength(105);
    expect(new Set(routes).size).toBe(routes.length);
    expect(p0Routes).toHaveLength(46);
  });

  it("maps every P0 route exactly once in the screen-route registry", () => {
    const p0Routes = routeRows.filter((row) => row.priority === "P0").map((row) => row.route);
    const registeredRoutes = registryRows.map((row) => row.route);

    expect(new Set(registeredRoutes).size).toBe(registeredRoutes.length);

    for (const route of p0Routes) {
      expect(registeredRoutes, route).toContain(route);
    }
  });

  it("records that no route currently has approved Figma production design", () => {
    const productionRows = registryRows.filter((row) => row.design_status === "PRODUCTION");

    expect(productionRows).toHaveLength(0);

    for (const row of registryRows) {
      expect(row.design_status, row.route).toBe("UNDECIDED");
      expect(row.figma_page, row.route).toBe("");
      expect(row.figma_node_ids, row.route).toBe("");
    }
  });

  it("classifies the complete visual-source corpus without a fake Figma authority", () => {
    const sourceById = new Map(sourceRows.map((row) => [row.source_id, row]));

    expect(sourceById.size).toBe(sourceRows.length);
    expect(sourceById.has("figma-master")).toBe(false);
    expect(sourceById.get("figma-draft")?.status).toBe("EMPTY_DRAFT");
    expect(sourceById.get("figma-legacy")?.status).toBe("ARCHIVE");
    expect(sourceById.get("set-54")?.status).toBe("DUPLICATE");
    expect(sourceById.get("claude-design-2026-07")?.status).toBe("REFERENCE");

    for (let setNumber = 1; setNumber <= 63; setNumber += 1) {
      const sourceId = `set-${String(setNumber).padStart(2, "0")}`;
      expect(sourceById.has(sourceId), sourceId).toBe(true);
    }
  });
});

describe("roadmap and toolchain consistency", () => {
  it("contains the corrected remaining Sprint 0 task sequence", () => {
    const roadmap = readCsv("docs/05-execution/implementation-roadmap.csv");
    const taskById = new Map(roadmap.map((row) => [row.task_id, row]));

    expect(taskById.has("VIS-001")).toBe(true);
    expect(taskById.has("VIS-002")).toBe(true);
    expect(taskById.get("VIS-002")?.dependencies).toBe("S0-014");
    expect(taskById.get("S0-015")?.dependencies).toBe("VIS-002");
    expect(taskById.has("S0-016")).toBe(true);
    expect(taskById.has("S0-017")).toBe(true);
    expect(taskById.has("S0-018")).toBe(true);
  });

  it("keeps Node and pnpm versions aligned between package metadata and CI", () => {
    const packageJson = JSON.parse(readText("package.json")) as {
      packageManager?: string;
      engines?: { node?: string };
    };
    const ci = readText(".github/workflows/ci.yml");

    expect(packageJson.packageManager).toBe("pnpm@10.12.1");
    expect(packageJson.engines?.node).toBe(">=22.0.0");
    expect(ci).toContain("version: 10.12.1");
    expect(ci).toContain("node-version: 22");
  });

  it("keeps environment examples placeholder-only", () => {
    const environmentExample = readText(".env.example");

    expect(environmentExample).toContain("YOUR_PROJECT_ID");
    expect(environmentExample).toContain("YOUR_SUPABASE_ANON_KEY");
    expect(environmentExample).not.toContain("SUPABASE_SERVICE_ROLE_KEY");
  });
});
