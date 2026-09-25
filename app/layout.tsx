import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Haroon | Full-Stack Developer",
  description:
    "Mohammad Haroon, full-stack developer in Pakistan. Building thoughtful web applications, real-time experiences, and practical AI products.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#171b20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-6QPKFSV2KN" />
    </html>
  );
}
