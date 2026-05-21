import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// JetBrains Mono carries the slab/typewriter weight we want for display
const displayMono = JetBrains_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "DialedIN — AI-native engineering firm",
  description:
    "DialedIN builds and operates the production systems a company needs but can't buy off-the-shelf — internal tools, AI agents, data infrastructure. Senior team. We carry the pager.",
  metadataBase: new URL("https://dialedin.solutions"),
  openGraph: {
    title: "DialedIN",
    description:
      "AI-native engineering firm. We build and operate the production systems a company can't buy off-the-shelf.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displayMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
