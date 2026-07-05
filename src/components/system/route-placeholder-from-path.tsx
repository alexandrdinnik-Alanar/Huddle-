"use client";

import { usePathname } from "next/navigation";
import { resolvePlaceholderRoute } from "@/lib/routes/placeholder-routes";

export function RoutePlaceholderFromPath() {
  const pathname = usePathname();
  const definition = resolvePlaceholderRoute(pathname);

  if (!definition) {
    return (
      <main className="foundation-shell">
        <section className="foundation-card" aria-labelledby="route-placeholder-title">
          <p className="eyebrow">Temporary Sprint 0 placeholder</p>
          <h1 id="route-placeholder-title">Route placeholder</h1>
          <p>Route: <code>{pathname}</code></p>
          <p>Feature implementation is out of scope for Sprint 0.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="foundation-shell">
      <section className="foundation-card" aria-labelledby="route-placeholder-title">
        <p className="eyebrow">Temporary Sprint 0 placeholder</p>
        <h1 id="route-placeholder-title">{definition.screenName}</h1>
        <dl>
          <div>
            <dt>Route</dt>
            <dd><code>{definition.route}</code></dd>
          </div>
          <div>
            <dt>Priority</dt>
            <dd>{definition.priority}</dd>
          </div>
        </dl>
        <p>Feature implementation is out of scope for Sprint 0.</p>
      </section>
    </main>
  );
}
