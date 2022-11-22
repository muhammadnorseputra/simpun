// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const isSpalshScreen = request.cookies.has('splashscreen')
  if(JSON.stringify(isSpalshScreen) === 'false' || isSpalshScreen === undefined) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/me/:path*', '/certificates', '/blogs'],
}