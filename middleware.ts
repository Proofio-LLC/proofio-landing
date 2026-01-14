import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'de', 'fr', 'es', 'pt'];
const defaultLocale = 'en';

// Paths that should not be localized (API routes, static files, etc.)
const publicFilePattern = /\.(.*)$/;
const excludedPaths = ['/api', '/_next', '/favicon', '/robots.txt', '/sitemap'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for excluded paths
  if (
    excludedPaths.some(path => pathname.startsWith(path)) ||
    publicFilePattern.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a locale, continue
  if (pathnameHasLocale) {
    const response = NextResponse.next();
    response.headers.set('x-pathname', pathname);
    return response;
  }

  // Get locale from Accept-Language header or use default
  const locale = getLocale(request) || defaultLocale;

  // Redirect to localized path
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  const response = NextResponse.redirect(newUrl);
  response.headers.set('x-pathname', `/${locale}${pathname}`);
  return response;
}

function getLocale(request: NextRequest): string | null {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return null;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return { code: code.split('-')[0].toLowerCase(), quality: parseFloat(q) };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find first matching locale
  for (const lang of languages) {
    if (locales.includes(lang.code)) {
      return lang.code;
    }
  }

  return null;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
