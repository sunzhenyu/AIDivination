import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "zh", "fr", "ja"] as const;
const defaultLocale = "en";

function getLocaleFromPathname(pathname: string): string | null {
  const segments = pathname.split("/");
  const firstSegment = segments[1];
  return locales.includes(firstSegment as any) ? firstSegment : null;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 跳过静态文件和 API 路由
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const localeInPath = getLocaleFromPathname(pathname);
  const langParam = request.nextUrl.searchParams.get("lang");

  // 情况1: 路径已有语言前缀（如 /zh/tarot）
  if (localeInPath) {
    // 移除路径中的语言前缀，重写到实际页面
    const pathWithoutLocale = pathname.replace(`/${localeInPath}`, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = pathWithoutLocale;
    url.searchParams.set("lang", localeInPath);

    const response = NextResponse.rewrite(url);
    response.headers.set("x-locale", localeInPath);
    return response;
  }

  // 情况2: 有 lang 查询参数且不是英文（如 /tarot?lang=zh）
  if (langParam && langParam !== "en" && locales.includes(langParam as any)) {
    const newPath = pathname === "/" ? `/${langParam}` : `/${langParam}${pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    url.searchParams.delete("lang");
    return NextResponse.redirect(url, 301); // 永久重定向，有利于SEO
  }

  // 情况3: 英文路径（默认，无前缀）
  const response = NextResponse.next();
  response.headers.set("x-locale", defaultLocale);
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.webp).*)",
  ],
};
