import { NextRequest, NextResponse } from "next/server";

const localizedRoutes = new Set(["/", "/contact", "/legal-notice", "/privacy-policy"]);
const LANGUAGE_COOKIE_NAME = "preferred_locale";

function getPreferredLocale(request: NextRequest) {
  const cookieValue = request.cookies.get(LANGUAGE_COOKIE_NAME)?.value;

  if (cookieValue === "en" || cookieValue === "fr") {
    return cookieValue;
  }

  const header = request.headers.get("accept-language")?.toLowerCase() || "";
  const first = header
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)[0];

  if (!first) return "en";

  const primary = first.split(";")[0]?.trim() || "";
  return primary === "fr" || primary.startsWith("fr-") ? "fr" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    return NextResponse.next();
  }

  if (localizedRoutes.has(pathname) && getPreferredLocale(request) === "fr") {
    const target = pathname === "/" ? "/fr" : `/fr${pathname}`;
    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/contact", "/legal-notice", "/privacy-policy"],
};
