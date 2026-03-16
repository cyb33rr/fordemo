import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const auth = request.headers.get('authorization')
    if (auth !== 'Bearer s3cret-admin-token') {
      return new NextResponse('Unauthorized — proxy blocked this request.', {
        status: 401,
      })
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
