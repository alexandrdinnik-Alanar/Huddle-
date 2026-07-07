import type { HTMLAttributes } from "react";

import { cx } from "./utils";

export const CARD_VARIANTS = ["default", "elevated", "soft"] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];

const cardStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: "var(--color-surface-card)",
    border: "1px solid var(--color-border-subtle)",
    boxShadow: "var(--shadow-none)",
  },
  elevated: {
    background: "var(--color-surface-elevated)",
    border: "1px solid color-mix(in srgb, var(--color-brand-green) 12%, var(--color-surface-elevated))",
    boxShadow: "var(--shadow-md)",
  },
  soft: {
    background: "var(--color-background-soft)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-none)",
  },
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export function Card({ className, style, variant = "default", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cx(className)}
      style={{
        borderRadius: "var(--radius-xl)",
        color: "var(--color-text-primary)",
        padding: "var(--space-5)",
        ...cardStyles[variant],
        ...style,
      }}
    />
  );
}
