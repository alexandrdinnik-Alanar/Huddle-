export type PlaceholderPriority = "P0" | "P1";

export type PlaceholderRouteDefinition = Readonly<{
  screenName: string;
  route: string;
  priority: PlaceholderPriority;
}>;

export const placeholderRoutes = [
  { screenName: "Huddle home", route: "/", priority: "P0" },
  { screenName: "Marketplace discovery", route: "/marketplace", priority: "P0" },
  { screenName: "Listing detail", route: "/marketplace/listings/[listingId]", priority: "P0" },
  { screenName: "Events discovery", route: "/events", priority: "P0" },
  { screenName: "Event detail", route: "/events/[eventId]", priority: "P0" },
  { screenName: "Activities discovery", route: "/activities", priority: "P0" },
  { screenName: "Services discovery", route: "/services", priority: "P1" },
  { screenName: "Safety", route: "/safety", priority: "P0" },
  { screenName: "Privacy", route: "/privacy", priority: "P0" },
  { screenName: "Terms", route: "/terms", priority: "P0" },
  { screenName: "Community guidelines", route: "/community-guidelines", priority: "P0" },
  { screenName: "Newborn family guide", route: "/family-guides/newborn", priority: "P1" },
  { screenName: "Toddler family guide", route: "/family-guides/toddler", priority: "P1" },
  { screenName: "Preschool family guide", route: "/family-guides/preschool", priority: "P1" },
  { screenName: "School-age family guide", route: "/family-guides/school-age", priority: "P1" },
  { screenName: "Teen family guide", route: "/family-guides/teen-family", priority: "P1" },
  { screenName: "Seasonal guides", route: "/seasonal-guides", priority: "P1" },
  { screenName: "Sign up", route: "/signup", priority: "P0" },
  { screenName: "Login", route: "/login", priority: "P0" },
  { screenName: "Password recovery", route: "/forgot-password", priority: "P0" },
  { screenName: "Identity verification", route: "/verify", priority: "P0" },
  { screenName: "Onboarding entry", route: "/onboarding", priority: "P0" },
  { screenName: "Family onboarding", route: "/onboarding/family", priority: "P0" },
  { screenName: "Children onboarding", route: "/onboarding/children", priority: "P0" },
  { screenName: "Interests onboarding", route: "/onboarding/interests", priority: "P0" },
  { screenName: "Location and privacy onboarding", route: "/onboarding/location", priority: "P0" },
  { screenName: "Consent onboarding", route: "/onboarding/consent", priority: "P0" },
  { screenName: "App home", route: "/app", priority: "P0" },
  { screenName: "Global search", route: "/app/search", priority: "P0" },
  { screenName: "Saved hub", route: "/app/saved", priority: "P0" },
  { screenName: "Notifications", route: "/app/notifications", priority: "P0" },
  { screenName: "Messaging inbox", route: "/app/messages", priority: "P0" },
  { screenName: "Conversation", route: "/app/messages/[conversationId]", priority: "P0" },
  { screenName: "Account", route: "/app/account", priority: "P0" },
  { screenName: "Settings", route: "/app/settings", priority: "P0" },
  { screenName: "Family profile", route: "/app/family", priority: "P0" },
  { screenName: "Family members", route: "/app/family/members", priority: "P0" },
  { screenName: "Connections", route: "/app/connections", priority: "P0" },
  { screenName: "Community home", route: "/app/community", priority: "P0" },
  { screenName: "App marketplace", route: "/app/marketplace", priority: "P0" },
  { screenName: "App events", route: "/app/events", priority: "P0" },
  { screenName: "App activities", route: "/app/activities", priority: "P0" },
  { screenName: "Privacy center", route: "/app/privacy", priority: "P0" },
  { screenName: "Safety center", route: "/app/safety", priority: "P0" },
  { screenName: "Municipality data governance", route: "/app/municipality/governance", priority: "P0" },
  { screenName: "Admin dashboard", route: "/admin", priority: "P0" },
  { screenName: "User management", route: "/admin/users", priority: "P0" },
  { screenName: "Listing moderation", route: "/admin/listings", priority: "P0" },
  { screenName: "Event administration", route: "/admin/events", priority: "P1" },
  { screenName: "Reports", route: "/admin/reports", priority: "P1" },
  { screenName: "Audit log", route: "/admin/audit-log", priority: "P0" },
  { screenName: "Moderation dashboard", route: "/admin/moderation", priority: "P0" },
  { screenName: "Moderation reports queue", route: "/admin/moderation/reports", priority: "P0" },
  { screenName: "Moderation appeals", route: "/admin/moderation/appeals", priority: "P0" },
  { screenName: "Privacy governance", route: "/admin/privacy", priority: "P0" },
] as const satisfies readonly PlaceholderRouteDefinition[];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function routePatternToRegExp(route: string): RegExp {
  const pattern = route
    .split("/")
    .map((segment) => {
      if (segment.startsWith("[") && segment.endsWith("]")) {
        return "[^/]+";
      }

      return escapeRegExp(segment);
    })
    .join("/");

  return new RegExp(`^${pattern}$`);
}

export function resolvePlaceholderRoute(pathname: string): PlaceholderRouteDefinition | undefined {
  return placeholderRoutes.find(
    (definition) =>
      definition.route === pathname || routePatternToRegExp(definition.route).test(pathname),
  );
}
