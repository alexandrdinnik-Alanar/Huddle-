import type { CSSProperties } from "react";

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export const tokenStyles = {
  textLabel: {
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-family-body)",
    fontSize: "var(--font-size-sm)",
    fontWeight: "var(--font-weight-semibold)",
    lineHeight: "var(--line-height-normal)",
  } satisfies CSSProperties,
  helpText: {
    color: "var(--color-text-secondary)",
    fontFamily: "var(--font-family-body)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--line-height-normal)",
  } satisfies CSSProperties,
  errorText: {
    color: "var(--color-status-danger)",
    fontFamily: "var(--font-family-body)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--line-height-normal)",
  } satisfies CSSProperties,
  controlBase: {
    width: "100%",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--color-border-subtle)",
    background: "var(--color-surface-elevated)",
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-family-body)",
    fontSize: "var(--font-size-base)",
    lineHeight: "var(--line-height-normal)",
    padding: "var(--space-3) var(--space-4)",
    transition:
      "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease, color 160ms ease",
  } satisfies CSSProperties,
  sectionCard: {
    borderRadius: "var(--radius-xl)",
    border: "1px solid var(--color-border-subtle)",
    background: "var(--color-surface-card)",
    color: "var(--color-text-primary)",
    boxShadow: "var(--shadow-sm)",
  } satisfies CSSProperties,
} as const;
