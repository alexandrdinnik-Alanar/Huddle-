import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "./Button";
import { Card } from "./Card";
import { cx } from "./utils";

export type ErrorStateProps = HTMLAttributes<HTMLDivElement> & {
  actionLabel?: string;
  description: string;
  icon?: ReactNode;
  onAction?: () => void;
  title: string;
};

export function ErrorState({
  actionLabel,
  className,
  description,
  icon,
  onAction,
  style,
  title,
  ...props
}: ErrorStateProps) {
  return (
    <Card
      {...props}
      className={cx(className)}
      style={{
        borderColor: "color-mix(in srgb, var(--color-status-danger) 40%, var(--color-surface-elevated))",
        display: "grid",
        gap: "var(--space-3)",
        justifyItems: "start",
        ...style,
      }}
      variant="elevated"
    >
      {icon ? <div aria-hidden="true">{icon}</div> : null}
      <h2
        style={{
          color: "var(--color-status-danger)",
          fontFamily: "var(--font-family-display)",
          fontSize: "var(--font-size-2xl)",
          lineHeight: "var(--line-height-snug)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: "var(--color-text-secondary)",
          lineHeight: "var(--line-height-relaxed)",
          margin: 0,
        }}
      >
        {description}
      </p>
      {actionLabel ? <Button onClick={onAction} variant="danger">{actionLabel}</Button> : null}
    </Card>
  );
}
