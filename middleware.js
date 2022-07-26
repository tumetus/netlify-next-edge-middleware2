import { NextResponse } from 'next/server'

// export async function middleware(req) {
//   const { nextUrl: url, geo } = req
//   url.searchParams.set('country', geo.country)
//   return NextResponse.rewrite(url)
// }

export function middleware(request) {
  if (!request.nextUrl.pathname.startsWith('/api/hello')) {
    return NextResponse.redirect(new URL('/api/hello', request.url))
  }
}

