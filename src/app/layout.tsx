import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NBA Beginner Guide",
  description:
    "A colorful, interactive guide to the NBA — positions, teams, standings, and player rankings for the 2025-26 season.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-blob ambient-blob--accent" />
          <div className="ambient-blob ambient-blob--cool" />
          <div className="ambient-blob ambient-blob--warm" />
          <div className="ambient-noise" />
        </div>
        <div className="app-shell">
          <Nav />
          <main className="flex-1">{children}</main>
          <footer className="glass glass-nav border-t border-white/10 py-6 text-center text-sm text-white/40">
            NBA Beginner Guide · 2025-26 Season
          </footer>
        </div>
      </body>
    </html>
  );
}
