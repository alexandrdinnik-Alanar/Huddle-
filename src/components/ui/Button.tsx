import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { cx } from "./utils";

export const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "ghost",
  "danger",
] as const;
export const BUTTON_SIZES = ["sm", "md", "lg"] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "var(--color-cta-primary)",
    border: "1px solid var(--color-cta-primary)",
    color: "var(--color-text-inverse)",
  },
  secondary: {
    background: "var(--color-cta-secondary)",
    border: "1px solid var(--color-cta-secondary)",
    color: "var(--color-text-inverse)",
  },
  ghost: {
    background: "transparent",
    border: "1px solid transparent",
    color: "var(--color-action-copper)",
  },
  danger: {
    background: "var(--color-status-danger)",
    border: "1px solid var(--color-status-danger)",
    color: "var(--color-text-inverse)",
  },
};

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: {
    minHeight: "2.25rem",
    padding: "0 var(--space-3)",
    fontSize: "var(--font-size-sm)",
  },
  md: {
    minHeight: "2.75rem",
    padding: "0 var(--space-4)",
    fontSize: "var(--font-size-base)",
  },
  lg: {
    minHeight: "3.25rem",
    padding: "0 var(--space-5)",
    fontSize: "var(--font-size-lg)",
  },
};

export function Button({
  children,
  className,
  disabled = false,
  leadingIcon,
  loading = false,
  size = "md",
  style,
  trailingIcon,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      aria-busy={loading || undefined}
      className={cx("ui-focus-ring", "ui-button", className)}
      disabled={disabled || loading}
      style={{
        alignItems: "center",
        appearance: "none",
        borderRadius: "var(--radius-pill)",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        display: "inline-flex",
        fontFamily: "var(--font-family-body)",
        fontWeight: "var(--font-weight-semibold)",
        gap: "var(--space-2)",
        justifyContent: "center",
        lineHeight: "var(--line-height-normal)",
        opacity: disabled || loading ? 0.68 : 1,
        transition:
          "transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease, color 160ms ease, border-color 160ms ease",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      type={type}
    >
      {loading ? (
        <span aria-hidden="true" className="ui-spinner" />
      ) : (
        leadingIcon
      )}
      <span>{children}</span>
      {!loading ? trailingIcon : null}
    </button>
  );
}
