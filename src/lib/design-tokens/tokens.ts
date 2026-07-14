export const rawBrandTokens = {
  color: {
    warmCream: "#F6F0E8",
    sandBeige: "#E8D9C9",
    copperClay: "#C98A5C",
    softOlive: "#8A9076",
    graphiteTaupe: "#7C6D63",
    white: "#FFFFFF",
  },
  typography: {
    fontFamily: {
      display: '"Playfair Display", Georgia, "Times New Roman", serif',
      body: 'Inter, "Segoe UI", Arial, sans-serif',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3rem",
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.65,
    },
    letterSpacing: {
      tight: "-0.02em",
      normal: "0",
      wide: "0.08em",
    },
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },
  radius: {
    none: "0",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    pill: "9999px",
  },
  shadow: {
    none: "none",
    sm: "0 8px 24px rgba(124, 109, 99, 0.1)",
    md: "0 16px 40px rgba(124, 109, 99, 0.14)",
    lg: "0 24px 60px rgba(124, 109, 99, 0.18)",
  },
  breakpoint: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
  },
  zIndex: {
    base: 0,
    raised: 10,
    sticky: 100,
    overlay: 400,
    modal: 500,
    toast: 600,
    tooltip: 700,
  },
} as const;

export const functionalColorTokens = {
  textStrong: "#62554D",
  textDefault: "#695A52",
  actionCopper: "#9B5C38",
  actionCopperHover: "#84492A",
  actionOlive: "#59604A",
  actionOliveHover: "#4B513D",
  success: "#5F755F",
  warning: "#A56A2A",
  danger: "#A1463C",
  info: "#5D747A",
} as const;

export const designTokens = {
  color: {
    background: {
      base: rawBrandTokens.color.warmCream,
      soft: rawBrandTokens.color.sandBeige,
      accent: rawBrandTokens.color.softOlive,
    },
    surface: {
      card: rawBrandTokens.color.warmCream,
      elevated: rawBrandTokens.color.white,
      muted: rawBrandTokens.color.sandBeige,
    },
    text: {
      primary: functionalColorTokens.textStrong,
      secondary: functionalColorTokens.textDefault,
      muted: functionalColorTokens.textDefault,
      inverse: rawBrandTokens.color.white,
    },
    brand: {
      copper: rawBrandTokens.color.copperClay,
      olive: rawBrandTokens.color.softOlive,
      graphite: rawBrandTokens.color.graphiteTaupe,
    },
    cta: {
      primary: functionalColorTokens.actionCopper,
      primaryHover: functionalColorTokens.actionCopperHover,
      secondary: functionalColorTokens.actionOlive,
      secondaryHover: functionalColorTokens.actionOliveHover,
    },
    border: {
      subtle: rawBrandTokens.color.sandBeige,
      strong: rawBrandTokens.color.graphiteTaupe,
    },
    status: {
      success: functionalColorTokens.success,
      warning: functionalColorTokens.warning,
      danger: functionalColorTokens.danger,
      info: functionalColorTokens.info,
    },
  },
  typography: {
    fontFamily: rawBrandTokens.typography.fontFamily,
    fontWeight: rawBrandTokens.typography.fontWeight,
    fontSize: rawBrandTokens.typography.fontSize,
    lineHeight: rawBrandTokens.typography.lineHeight,
    letterSpacing: rawBrandTokens.typography.letterSpacing,
  },
  spacing: rawBrandTokens.spacing,
  radius: rawBrandTokens.radius,
  shadow: rawBrandTokens.shadow,
  breakpoint: rawBrandTokens.breakpoint,
  zIndex: rawBrandTokens.zIndex,
} as const;

export type DesignTokens = typeof designTokens;
