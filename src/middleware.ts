import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export { default } from 'next-auth/middleware';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  if (token && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (request.nextUrl.pathname === '/dashboard') {
    if (!token) return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}
