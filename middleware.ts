import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Just pass through - let Next.js handle routing
  // Links will be generated with appropriate trailing slashes in the components
  return NextResponse.next()
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, static files, and images
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
