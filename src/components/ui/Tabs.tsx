import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import { cx } from "./utils";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
};

export type TabsProps = HTMLAttributes<HTMLDivElement> & {
  activeTab: string;
  items: TabItem[];
  onTabChange?: (tabId: string) => void;
};

export function Tabs({ activeTab, className, items, onTabChange, style, ...props }: TabsProps) {
  const currentTab = items.find((item) => item.id === activeTab) ?? items[0];

  return (
    <div {...props} className={cx(className)} style={style}>
      <div
        aria-label="Tabs"
        role="tablist"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-2)",
          marginBottom: "var(--space-4)",
        }}
      >
        {items.map((item) => {
          const selected = item.id === currentTab.id;

          return (
            <button
              aria-controls={`panel-${item.id}`}
              aria-selected={selected}
              className="ui-focus-ring"
              disabled={item.disabled}
              id={`tab-${item.id}`}
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              role="tab"
              style={{
                background: selected ? "var(--color-cta-primary)" : "var(--color-background-soft)",
                border: "1px solid",
                borderColor: selected ? "var(--color-cta-primary)" : "var(--color-border-subtle)",
                borderRadius: "var(--radius-pill)",
                color: selected ? "var(--color-text-inverse)" : "var(--color-text-primary)",
                cursor: item.disabled ? "not-allowed" : "pointer",
                fontFamily: "var(--font-family-body)",
                fontSize: "var(--font-size-sm)",
                fontWeight: "var(--font-weight-semibold)",
                opacity: item.disabled ? 0.6 : 1,
                padding: "0.75rem 1rem",
              }}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        aria-labelledby={`tab-${currentTab.id}`}
        id={`panel-${currentTab.id}`}
        role="tabpanel"
        style={{
          background: "var(--color-surface-card)",
          border: "1px solid var(--color-border-subtle)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-5)",
        }}
      >
        {currentTab.content}
      </div>
    </div>
  );
}

export type TabButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
