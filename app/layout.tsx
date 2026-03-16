import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

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
        {children}
        <footer className="site-footer px-5 pb-8 pt-4 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-3 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>Atcha Solutions is operated by Atcha Invest OÜ.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/legal-notice">Legal Notice</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <a href="mailto:atchasolutions@pm.me">atchasolutions@pm.me</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
