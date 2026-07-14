import Image from "next/image";

import { brandLogoAssets, type BrandLogoAsset } from "./brand-assets";

type BrandLogoProps = Readonly<{
  variant?: BrandLogoAsset;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}>;

export function BrandLogo({
  variant = "familyLockupPng",
  alt = "Huddle Family",
  width = 2048,
  height = 782,
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
