import Image from "next/image";

import {
  brandLogoAssets,
  type BrandLogoVariant,
} from "./brand-assets";

type BrandLogoProps = Readonly<{
  variant?: BrandLogoVariant;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}>;

export function BrandLogo({
  variant = "copperTransparent",
  alt = "Huddle",
  width = 1025,
  height = 316,
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={brandLogoAssets[variant]}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
