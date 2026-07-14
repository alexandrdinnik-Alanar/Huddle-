export const brandLogoAssets = {
  familyLockupPng: "/brand/huddle-family-logo.png",
  familyLockupWebp: "/brand/huddle-family-logo.webp",
  wordmarkPng:
    "/brand/logotype/Huddle_logotype_copper_transparent_APPROVED.png",
} as const;

export const brandIconAssets = {
  favicon: "/brand/icons/favicon.ico",
  appleTouch: "/brand/icons/apple-touch-icon.png",
  app192: "/brand/icons/icon-192.png",
  app512: "/brand/icons/icon-512.png",
} as const;

export type BrandLogoAsset = keyof typeof brandLogoAssets;
export type BrandIconAsset = keyof typeof brandIconAssets;
