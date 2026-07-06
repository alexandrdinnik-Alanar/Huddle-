# Huddle AI-Ready Master Brand System

This directory is the canonical working structure for Huddle brand assets, editable sources, rules and AI instructions.

## Read first
1. `00_AI_START_HERE/AI_SYSTEM_INSTRUCTIONS.md`
2. `00_AI_START_HERE/SOURCE_OF_TRUTH.json`
3. `00_AI_START_HERE/AI_TASK_ROUTING.json`
4. `00_AI_START_HERE/HUMAN_USAGE_GUIDE.md`

## Source hierarchy
- `02_MASTER_IDENTITY/` — identity source of truth. Never redraw or AI-recreate.
- `01_BRAND_GUIDELINES/02_APPROVED_REFERENCE_PNG/` — approved visual design reference.
- `01_BRAND_GUIDELINES/01_LAYERED_SOURCE/` — editable Brand Guidelines working source.
- `04_DESIGN_TOKENS/` — exact colors and system values.
- `03_EDITABLE_GRAPHIC_SYSTEM/` — reusable editable vector elements.

## Critical rules
- Preserve approved Huddle wordmark and Community Mark geometry.
- Do not infer rules from filenames alone; inspect content.
- Do not duplicate guideline pages with the same content.
- Keep the visual world warm, light, tactile and editorial.
- Apparel front: centered approved Huddle wordmark.
- Apparel back: large centered approved Community Mark.
- Do not add `Closer by Design` to apparel.

Large binary source files are tracked by the package manifest and are to be imported into the matching folders without renaming. AI operators must read `00_AI_START_HERE` before using any assets.