import type { CSSProperties, InputHTMLAttributes } from "react";

import { cx, tokenStyles } from "./utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  hint?: string;
  label?: string;
};

function fieldStateStyle(hasError: boolean, disabled: boolean | undefined): CSSProperties {
  return {
    ...tokenStyles.controlBase,
    background: disabled ? "var(--color-background-soft)" : "var(--color-surface-elevated)",
    borderColor: hasError ? "var(--color-status-danger)" : "var(--color-border-subtle)",
    color: disabled ? "var(--color-text-muted)" : "var(--color-text-primary)",
  };
}

export function Input({ className, disabled, error, hint, id, label, style, ...props }: InputProps) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      style={{
        display: "grid",
        gap: "var(--space-2)",
      }}
    >
      {label ? <span style={tokenStyles.textLabel}>{label}</span> : null}
      <input
        {...props}
        aria-describedby={describedBy || undefined}
        aria-invalid={error ? true : undefined}
        className={cx("ui-focus-ring", className)}
        disabled={disabled}
        id={id}
        style={{
          ...fieldStateStyle(Boolean(error), disabled),
          ...style,
        }}
      />
      {hint ? (
        <span id={id ? `${id}-hint` : undefined} style={tokenStyles.helpText}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={id ? `${id}-error` : undefined} role="alert" style={tokenStyles.errorText}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
