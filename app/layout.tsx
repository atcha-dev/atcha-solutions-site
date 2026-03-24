import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { TopBar } from "./components/top-bar";

export const metadata: Metadata = {
  metadataBase: new URL("https://atchasolutions.vercel.app"),
  title: {
    default: "Atcha Solutions | Fast Website Fixes and Landing Pages",
    template: "%s | Atcha Solutions",
  },
  description:
    "Atcha Solutions helps small businesses and independents with fast website fixes, landing pages, mobile cleanup, and lightweight automation.",
  keywords: [
    "Atcha Solutions",
    "website fixes",
    "landing pages",
    "Tallinn web developer",
    "small business website help",
    "mobile cleanup",
    "contact flow optimization",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Atcha Solutions | Fast Website Fixes and Landing Pages",
    description:
      "Fast website fixes, landing pages, mobile cleanup, and lightweight automation for small businesses and independents.",
    url: "https://atchasolutions.vercel.app",
    siteName: "Atcha Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atcha Solutions | Fast Website Fixes and Landing Pages",
    description:
      "Fast website fixes, landing pages, mobile cleanup, and lightweight automation.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
