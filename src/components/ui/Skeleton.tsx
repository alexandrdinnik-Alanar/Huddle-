import type { HTMLAttributes } from "react";

import { cx } from "./utils";

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  circle?: boolean;
  height?: string | number;
  width?: string | number;
};

export function Skeleton({
  circle = false,
  className,
  height = "1rem",
  style,
  width = "100%",
  ...props
}: SkeletonProps) {
  return (
    <div
      {...props}
      aria-hidden="true"
      className={cx("ui-skeleton", className)}
      style={{
        background:
          "linear-gradient(90deg, var(--color-background-soft) 0%, var(--color-surface-elevated) 50%, var(--color-background-soft) 100%)",
        backgroundSize: "200% 100%",
        borderRadius: circle ? "50%" : "var(--radius-md)",
        height,
        width,
        ...style,
      }}
    />
  );
}
