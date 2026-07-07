import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "./Button";
import { cx } from "./utils";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  description?: string;
  onClose?: () => void;
  open?: boolean;
  title: string;
};

export function Modal({
  children,
  className,
  description,
  onClose,
  open = false,
  style,
  title,
  ...props
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="ui-modal-overlay"
      role="dialog"
      style={{
        alignItems: "center",
        background: "color-mix(in srgb, var(--color-background-deep-green) 60%, transparent)",
        display: "grid",
        inset: 0,
        justifyItems: "center",
        padding: "var(--space-6)",
        position: "fixed",
        zIndex: "var(--z-index-modal)",
      }}
    >
      <div
        {...props}
        className={cx(className)}
        style={{
          background: "var(--color-surface-elevated)",
          border: "1px solid var(--color-border-subtle)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          color: "var(--color-text-primary)",
          display: "grid",
          gap: "var(--space-4)",
          maxWidth: "40rem",
          padding: "var(--space-6)",
          width: "min(100%, 40rem)",
          ...style,
        }}
      >
        <div
          style={{
            alignItems: "start",
            display: "flex",
            gap: "var(--space-4)",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <h2
              style={{
                fontFamily: "var(--font-family-display)",
                fontSize: "var(--font-size-2xl)",
                lineHeight: "var(--line-height-snug)",
                margin: 0,
              }}
            >
              {title}
            </h2>
            {description ? (
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--line-height-relaxed)",
                  margin: 0,
                }}
              >
                {description}
              </p>
            ) : null}
          </div>
          {onClose ? (
            <Button aria-label="Close modal" onClick={onClose} size="sm" variant="ghost">
              Close
            </Button>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
