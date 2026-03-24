"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitch } from "./language-switch";

function getBackLink(pathname: string) {
  switch (pathname) {
    case "/contact":
    case "/legal-notice":
    case "/privacy-policy":
      return { href: "/", label: "Back to home" };
    case "/fr/contact":
    case "/fr/legal-notice":
    case "/fr/privacy-policy":
      return { href: "/fr", label: "Retour à l'accueil" };
    default:
      return null;
  }
}

export function TopBar() {
  const pathname = usePathname();
  const backLink = getBackLink(pathname);

  return (
    <div className="px-5 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
        <div>
          {backLink ? (
            <Link
              href={backLink.href}
              className="inline-flex text-sm font-medium text-[var(--muted)] no-underline transition-colors hover:text-[var(--foreground)]"
            >
              &lt;- {backLink.label}
            </Link>
          ) : null}
        </div>
        <LanguageSwitch />
      </div>
    </div>
  );
}
