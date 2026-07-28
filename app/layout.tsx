import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-zeta-blond-52.vercel.app"),
  title: {
    default: "Shobhit Shukla | Full Stack & DevOps Engineer",
    template: "%s | Shobhit Shukla",
  },
  description:
    "Full-stack engineer building production systems end to end — Next.js and React frontends, Node.js APIs, PostgreSQL/MongoDB/Redis data layers, Docker and Kubernetes, shipped via GitHub Actions and Vercel.",
  keywords: [
    "Shobhit Shukla",
    "Full Stack Developer",
    "DevOps Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Docker",
    "Kubernetes",
    "Redis",
    "GitHub Actions",
    "Vercel",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Shobhit Shukla" }],
  creator: "Shobhit Shukla",
  openGraph: {
    type: "website",
    title: "Shobhit Shukla | Full Stack & DevOps Engineer",
    description:
      "Live products: multi-campus ERP systems, an analytics platform, and the containerised infrastructure behind them.",
    siteName: "Shobhit Shukla",
    images: ["/Shobhit.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shobhit Shukla | Full Stack & DevOps Engineer",
    description:
      "Live products: multi-campus ERP systems, an analytics platform, and the containerised infrastructure behind them.",
    images: ["/Shobhit.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
