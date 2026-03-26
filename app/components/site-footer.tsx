"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const base = isFr ? "/fr" : "";

  return (
    <footer className="site-footer px-5 pb-8 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {isFr
            ? "Atcha Solutions est exploité par Atcha Invest OÜ."
            : "Atcha Solutions is operated by Atcha Invest OÜ."}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href={`${base}/legal-notice`}>{isFr ? "Mentions légales" : "Legal Notice"}</Link>
          <Link href={`${base}/privacy-policy`}>{isFr ? "Politique de confidentialité" : "Privacy Policy"}</Link>
          <a href="mailto:contact@atchasolutions.com">contact@atchasolutions.com</a>
        </div>
      </div>
    </footer>
  );
}
