import Image from "next/image";

import {
  brandIconAssets,
  type BrandIconVariant,
} from "./brand-assets";

type IconWatermarkProps = Readonly<{
  variant?: BrandIconVariant;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  decorative?: boolean;
}>;

export function IconWatermark({
  variant = "copperTransparent",
  alt = "Huddle community mark",
  width = 660,
  height = 571,
  className,
  decorative = true,
}: IconWatermarkProps) {
  return (
    <Image
      src={brandIconAssets[variant]}
      alt={decorative ? "" : alt}
      aria-hidden={decorative ? true : undefined}
      width={width}
      height={height}
      className={className}
    />
  );
}
