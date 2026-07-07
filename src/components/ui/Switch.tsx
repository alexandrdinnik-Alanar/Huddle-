import type { ButtonHTMLAttributes } from "react";

import { cx, tokenStyles } from "./utils";

export type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  checked?: boolean;
  description?: string;
  label: string;
};

export function Switch({
  checked = false,
  className,
  description,
  disabled,
  label,
  onClick,
  type = "button",
  ...props
}: SwitchProps) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "var(--space-3)",
      }}
    >
      <button
        {...props}
        aria-checked={checked}
        className={cx("ui-focus-ring", className)}
        disabled={disabled}
        onClick={onClick}
        role="switch"
        style={{
          alignItems: "center",
          background: checked ? "var(--color-cta-primary)" : "var(--color-border-subtle)",
          border: "0",
          borderRadius: "var(--radius-pill)",
          cursor: disabled ? "not-allowed" : "pointer",
          display: "inline-flex",
          inlineSize: "3rem",
          minBlockSize: "1.75rem",
          opacity: disabled ? 0.6 : 1,
          padding: "0.2rem",
          transition: "background-color 160ms ease, opacity 160ms ease",
        }}
        type={type}
      >
        <span
          aria-hidden="true"
          style={{
            background: "var(--color-surface-elevated)",
            blockSize: "1.35rem",
            borderRadius: "50%",
            inlineSize: "1.35rem",
            transform: checked ? "translateX(1.15rem)" : "translateX(0)",
            transition: "transform 160ms ease",
          }}
        />
      </button>
      <span style={{ display: "grid", gap: "var(--space-1)" }}>
        <span style={tokenStyles.textLabel}>{label}</span>
        {description ? <span style={tokenStyles.helpText}>{description}</span> : null}
      </span>
    </div>
  );
}
