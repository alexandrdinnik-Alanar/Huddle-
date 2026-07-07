import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "./Button";
import { BADGE_VARIANTS, Badge, type BadgeVariant } from "./Badge";
import { cx } from "./utils";

export const TOAST_VARIANTS = BADGE_VARIANTS;
export type ToastVariant = BadgeVariant;

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  actionLabel?: string;
  description?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  open?: boolean;
  title: string;
  variant?: ToastVariant;
  icon?: ReactNode;
};

export function Toast({
  actionLabel,
  className,
  description,
  icon,
  onAction,
  onDismiss,
  open = true,
  style,
  title,
  variant = "neutral",
  ...props
}: ToastProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      {...props}
      aria-live="polite"
      className={cx(className)}
      role="status"
      style={{
        background: "var(--color-surface-elevated)",
        border: "1px solid var(--color-border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-md)",
        color: "var(--color-text-primary)",
        display: "grid",
        gap: "var(--space-3)",
        maxWidth: "22rem",
        padding: "var(--space-4)",
        width: "100%",
        ...style,
      }}
    >
      <div
        style={{
          alignItems: "start",
          display: "flex",
          gap: "var(--space-3)",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          {icon ? <div aria-hidden="true">{icon}</div> : null}
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <Badge variant={variant}>{variant}</Badge>
            <strong>{title}</strong>
            {description ? (
              <span
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                {description}
              </span>
            ) : null}
          </div>
        </div>
        {onDismiss ? (
          <Button aria-label="Dismiss toast" onClick={onDismiss} size="sm" variant="ghost">
            Dismiss
          </Button>
        ) : null}
      </div>
      {actionLabel ? (
        <div>
          <Button onClick={onAction} size="sm" variant="secondary">
            {actionLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
