import { describe, expect, it } from "vitest";
import {
  placeholderRoutes,
  resolvePlaceholderRoute,
} from "../../src/lib/routes/placeholder-routes";

describe("S0-002 placeholder route manifest", () => {
  it("contains the reconciled 55-route Sprint 0 architecture set", () => {
    expect(placeholderRoutes).toHaveLength(55);
  });

  it("contains no duplicate route definitions", () => {
    const routes = placeholderRoutes.map((definition) => definition.route);
    expect(new Set(routes).size).toBe(routes.length);
  });

  it("resolves dynamic canonical route patterns", () => {
    expect(resolvePlaceholderRoute("/events/event-123")?.route).toBe("/events/[eventId]");
    expect(resolvePlaceholderRoute("/marketplace/listings/listing-123")?.route).toBe(
      "/marketplace/listings/[listingId]",
    );
    expect(resolvePlaceholderRoute("/app/messages/conversation-123")?.route).toBe(
      "/app/messages/[conversationId]",
    );
  });

  it("includes canonical P0 routes missing from the original Sprint 0 list", () => {
    const routes = new Set(placeholderRoutes.map((definition) => definition.route));
    expect(routes.has("/verify")).toBe(true);
    expect(routes.has("/app/messages")).toBe(true);
    expect(routes.has("/admin/moderation")).toBe(true);
    expect(routes.has("/admin/privacy")).toBe(true);
  });
});
