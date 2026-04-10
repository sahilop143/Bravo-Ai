import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bravo.Ai | Premium AI Marketplace",
  description: "The Open Marketplace for AI Agents and Skills",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
