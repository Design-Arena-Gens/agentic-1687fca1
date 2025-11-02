import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import ClientReady from "@/components/ClientReady";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex"
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk"
});

export const metadata: Metadata = {
  title: "ETH Ascendance - The Future of Crypto",
  description:
    "An immersive 3D journey exploring why Ethereum is the limitless, programmable future of decentralized finance and digital societies."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plex.variable} ${grotesk.variable}`}>
      <body>
        <ClientReady>{children}</ClientReady>
      </body>
    </html>
  );
}
