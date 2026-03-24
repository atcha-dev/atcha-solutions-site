import { NextRequest, NextResponse } from "next/server";

const localizedRoutes = new Set(["/", "/contact", "/legal-notice", "/privacy-policy"]);

function wantsFrench(request: NextRequest) {
  const header = request.headers.get("accept-language")?.toLowerCase() || "";
  const first = header
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)[0];

  if (!first) return false;

  const primary = first.split(";")[0]?.trim() || "";
  return primary === "fr" || primary.startsWith("fr-");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    return NextResponse.next();
  }

  if (localizedRoutes.has(pathname) && wantsFrench(request)) {
    const target = pathname === "/" ? "/fr" : `/fr${pathname}`;
    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/contact", "/legal-notice", "/privacy-policy"],
};
