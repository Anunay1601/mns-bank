// Next.js 16 proxy.ts - Route protection for admin panel
// This replaces the traditional middleware.ts convention

import { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE_NAME = 'admin-session';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only protect /admin/* routes (except /admin/login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const session = request.cookies.get(SESSION_COOKIE_NAME);
    
    if (!session || session.value !== 'authenticated') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  // If user is authenticated and trying to access login, redirect to dashboard
  if (pathname === '/admin/login') {
    const session = request.cookies.get(SESSION_COOKIE_NAME);
    
    if (session?.value === 'authenticated') {
      const dashboardUrl = new URL('/admin', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
