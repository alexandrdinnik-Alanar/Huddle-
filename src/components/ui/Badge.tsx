import type { HTMLAttributes } from "react";

import { cx } from "./utils";

export const BADGE_VARIANTS = ["neutral", "success", "warning", "danger", "info"] as const;
export type BadgeVariant = (typeof BADGE_VARIANTS)[number];

const badgeStyles: Record<BadgeVariant, { background: string; color: string; border: string }> = {
  neutral: {
    background: "var(--color-background-soft)",
    border: "1px solid var(--color-border-subtle)",
    color: "var(--color-text-primary)",
  },
  success: {
    background: "color-mix(in srgb, var(--color-status-success) 16%, var(--color-surface-elevated))",
    border: "1px solid color-mix(in srgb, var(--color-status-success) 50%, var(--color-surface-elevated))",
    color: "var(--color-status-success)",
  },
  warning: {
    background: "color-mix(in srgb, var(--color-status-warning) 16%, var(--color-surface-elevated))",
    border: "1px solid color-mix(in srgb, var(--color-status-warning) 50%, var(--color-surface-elevated))",
    color: "var(--color-status-warning)",
  },
  danger: {
    background: "color-mix(in srgb, var(--color-status-danger) 16%, var(--color-surface-elevated))",
    border: "1px solid color-mix(in srgb, var(--color-status-danger) 50%, var(--color-surface-elevated))",
    color: "var(--color-status-danger)",
  },
  info: {
    background: "color-mix(in srgb, var(--color-status-info) 16%, var(--color-surface-elevated))",
    border: "1px solid color-mix(in srgb, var(--color-status-info) 50%, var(--color-surface-elevated))",
    color: "var(--color-status-info)",
  },
};

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, style, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={cx(className)}
      style={{
        alignItems: "center",
        borderRadius: "var(--radius-pill)",
        display: "inline-flex",
        fontFamily: "var(--font-family-body)",
        fontSize: "var(--font-size-sm)",
        fontWeight: "var(--font-weight-semibold)",
        gap: "var(--space-2)",
        lineHeight: 1,
        padding: "0.4rem 0.7rem",
        whiteSpace: "nowrap",
        ...badgeStyles[variant],
        ...style,
      }}
    />
  );
}
