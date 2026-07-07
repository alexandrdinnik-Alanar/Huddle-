import { describe, expect, it } from "vitest";

import {
  BADGE_VARIANTS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  CARD_VARIANTS,
  Badge,
  Button,
  Card,
  Checkbox,
  EmptyState,
  ErrorState,
  Input,
  Modal,
  Select,
  Skeleton,
  Switch,
  Tabs,
  Textarea,
  Toast,
} from "../../src/components/ui";

describe("Huddle primitive UI components", () => {
  it("exports every required primitive", () => {
    expect(Button).toBeTypeOf("function");
    expect(Input).toBeTypeOf("function");
    expect(Textarea).toBeTypeOf("function");
    expect(Select).toBeTypeOf("function");
    expect(Checkbox).toBeTypeOf("function");
    expect(Switch).toBeTypeOf("function");
    expect(Modal).toBeTypeOf("function");
    expect(Toast).toBeTypeOf("function");
    expect(Badge).toBeTypeOf("function");
    expect(Card).toBeTypeOf("function");
    expect(Tabs).toBeTypeOf("function");
    expect(Skeleton).toBeTypeOf("function");
    expect(EmptyState).toBeTypeOf("function");
    expect(ErrorState).toBeTypeOf("function");
  });

  it("keeps the required Button variants and sizes", () => {
    expect(BUTTON_VARIANTS).toEqual(["primary", "secondary", "ghost", "danger"]);
    expect(BUTTON_SIZES).toEqual(["sm", "md", "lg"]);
  });

  it("keeps the required Badge and Card variants", () => {
    expect(BADGE_VARIANTS).toEqual(["neutral", "success", "warning", "danger", "info"]);
    expect(CARD_VARIANTS).toEqual(["default", "elevated", "soft"]);
  });
});
