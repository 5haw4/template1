import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const siteId = req.headers.get('host') || '';
    const url = req.nextUrl.clone();
    url.searchParams.set('ip', req.ip || 'IP not found');
    url.searchParams.set('geo', JSON.stringify((req?.geo && Object.keys(req.geo).length) ? req.geo : {}, null, 4));
    url.pathname = `/sites/${siteId}${url.pathname}`;
    
    return NextResponse.rewrite(url);
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
}
