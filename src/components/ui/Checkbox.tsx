import type { InputHTMLAttributes } from "react";

import { cx, tokenStyles } from "./utils";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  description?: string;
  label: string;
};

export function Checkbox({ className, description, id, label, ...props }: CheckboxProps) {
  return (
    <label
      style={{
        alignItems: "start",
        color: "var(--color-text-primary)",
        display: "grid",
        gap: "var(--space-2)",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <input
        {...props}
        className={cx("ui-focus-ring", className)}
        id={id}
        style={{
          accentColor: "var(--color-cta-primary)",
          blockSize: "1rem",
          inlineSize: "1rem",
          marginTop: "0.2rem",
        }}
        type="checkbox"
      />
      <span style={{ display: "grid", gap: "var(--space-1)" }}>
        <span style={tokenStyles.textLabel}>{label}</span>
        {description ? <span style={tokenStyles.helpText}>{description}</span> : null}
      </span>
    </label>
  );
}
