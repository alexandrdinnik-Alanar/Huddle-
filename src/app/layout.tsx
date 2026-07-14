import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://huddle-family.com"),
  title: {
    default: "Huddle Family",
    template: "%s | Huddle Family",
  },
  description: "Privacy-first local family platform helping families live better together.",
  applicationName: "Huddle Family",
  icons: {
    icon: [
      { url: "/brand/icons/favicon.ico" },
      { url: "/brand/icons/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/brand/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Huddle Family",
    description: "Privacy-first local family platform helping families live better together.",
    siteName: "Huddle Family",
    url: "https://huddle-family.com",
    type: "website",
    images: [{ url: "/brand/huddle-family-logo.png", alt: "Huddle Family" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
