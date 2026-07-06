export const brandLogoAssets = {
  copperTransparent:
    "/brand/logotype/Huddle_logotype_copper_transparent_APPROVED.png",
  darkGreenTransparent:
    "/brand/logotype/Huddle_logotype_dark_green_transparent.png",
  whiteTransparent: "/brand/logotype/Huddle_logotype_white_transparent.png",
  copperOnDeepGreen:
    "/brand/logotype/Huddle_logotype_copper_on_deep_green.png",
  darkGreenOnIvory:
    "/brand/logotype/Huddle_logotype_dark_green_on_ivory.png",
  whiteOnDeepGreen:
    "/brand/logotype/Huddle_logotype_white_on_deep_green.png",
} as const;

export const brandIconAssets = {
  copperTransparent:
    "/brand/icon/Huddle_icon_copper_transparent_SELECTED.png",
  blackTransparent: "/brand/icon/Huddle_icon_black_transparent.png",
  whiteTransparent: "/brand/icon/Huddle_icon_white_transparent.png",
  copperOnDeepGreen: "/brand/icon/Huddle_icon_copper_on_deep_green.png",
  darkGreenOnIvory: "/brand/icon/Huddle_icon_dark_green_on_ivory.png",
  whiteOnDeepGreen: "/brand/icon/Huddle_icon_white_on_deep_green.png",
} as const;

export type BrandLogoVariant = keyof typeof brandLogoAssets;
export type BrandIconVariant = keyof typeof brandIconAssets;
