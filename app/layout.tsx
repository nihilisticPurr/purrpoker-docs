import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purr Poker Documentation",
  description: "Documentation for PurrPoker. Powered by Hyperliquid."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
