"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGUAGE_COOKIE_NAME = "preferred_locale";

function persistLanguagePreference(locale: "en" | "fr") {
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function toEnglishPath(pathname: string) {
  if (pathname === "/fr") return "/";
  if (pathname.startsWith("/fr/")) return pathname.replace(/^\/fr/, "") || "/";
  return pathname;
}

function toFrenchPath(pathname: string) {
  if (pathname === "/") return "/fr";
  if (pathname.startsWith("/fr")) return pathname;
  return `/fr${pathname}`;
}

export function LanguageSwitch() {
  const pathname = usePathname();
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const enHref = toEnglishPath(pathname);
  const frHref = toFrenchPath(pathname);
  const activeClass =
    "bg-[#17120f] text-[#fff7f0] shadow-[0_10px_24px_rgba(23,18,15,0.18)] border border-[#17120f]";
  const idleClass = "text-[#171310] hover:bg-white/70 border border-transparent";

  return (
    <div className="glass-card inline-flex rounded-full p-1 text-sm">
      <Link
        href={enHref}
        aria-current={isFr ? undefined : "page"}
        className={`rounded-full px-4 py-2 font-medium no-underline transition-colors ${isFr ? idleClass : activeClass}`}
        style={isFr ? undefined : { color: "#fff7f0" }}
        onClick={() => persistLanguagePreference("en")}
      >
        EN
      </Link>
      <Link
        href={frHref}
        aria-current={isFr ? "page" : undefined}
        className={`rounded-full px-4 py-2 font-medium no-underline transition-colors ${isFr ? activeClass : idleClass}`}
        style={isFr ? { color: "#fff7f0" } : undefined}
        onClick={() => persistLanguagePreference("fr")}
      >
        FR
      </Link>
    </div>
  );
}
