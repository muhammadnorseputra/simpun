// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const isSpalshScreen = request.cookies.has('splashscreen')
  const { pathname, origin } = request.nextUrl
  if(isSpalshScreen === false || isSpalshScreen === undefined) {
    return NextResponse.rewrite(`${origin}/`)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/me/:path*', '/certificates', '/blogs'],
}