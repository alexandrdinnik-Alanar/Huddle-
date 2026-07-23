import type { Metadata } from "next";
import { DesignLab } from "./DesignLab";

export const metadata: Metadata = {
  title: "Design Lab",
  description: "Private Huddle art-direction concepts for product-owner review.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function DesignLabPage() {
  return <DesignLab />;
}
