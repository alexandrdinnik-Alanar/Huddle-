import Image from "next/image";

import { brandIconAssets, type BrandIconAsset } from "./brand-assets";

type IconWatermarkProps = Readonly<{
  variant?: BrandIconAsset;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  decorative?: boolean;
}>;

export function IconWatermark({
  variant = "app512",
  alt = "Huddle community mark",
  width = 512,
  height = 512,
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
