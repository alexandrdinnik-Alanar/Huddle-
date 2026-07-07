import type { CSSProperties, ReactNode, SelectHTMLAttributes } from "react";

import { cx, tokenStyles } from "./utils";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  hint?: string;
  label?: string;
  options?: Array<{ label: string; value: string; disabled?: boolean }>;
  placeholder?: string;
  children?: ReactNode;
};

function fieldStateStyle(hasError: boolean, disabled: boolean | undefined): CSSProperties {
  return {
    ...tokenStyles.controlBase,
    background: disabled ? "var(--color-background-soft)" : "var(--color-surface-elevated)",
    borderColor: hasError ? "var(--color-status-danger)" : "var(--color-border-subtle)",
    color: disabled ? "var(--color-text-muted)" : "var(--color-text-primary)",
  };
}

export function Select({
  children,
  className,
  disabled,
  error,
  hint,
  id,
  label,
  options,
  placeholder,
  style,
  ...props
}: SelectProps) {
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
      <select
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
      >
        {placeholder ? (
          <option disabled value="">
            {placeholder}
          </option>
        ) : null}
        {options?.map((option) => (
          <option key={option.value} disabled={option.disabled} value={option.value}>
            {option.label}
          </option>
        ))}
        {children}
      </select>
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
