import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "./Button";
import { Card } from "./Card";
import { cx } from "./utils";

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  actionLabel?: string;
  description: string;
  icon?: ReactNode;
  onAction?: () => void;
  title: string;
};

export function EmptyState({
  actionLabel,
  className,
  description,
  icon,
  onAction,
  style,
  title,
  ...props
}: EmptyStateProps) {
  return (
    <Card
      {...props}
      className={cx(className)}
      style={{
        display: "grid",
        gap: "var(--space-3)",
        justifyItems: "start",
        ...style,
      }}
      variant="soft"
    >
      {icon ? <div aria-hidden="true">{icon}</div> : null}
      <h2
        style={{
          color: "var(--color-text-primary)",
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
      {actionLabel ? <Button onClick={onAction} variant="secondary">{actionLabel}</Button> : null}
    </Card>
  );
}
