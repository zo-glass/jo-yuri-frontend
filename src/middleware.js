import { NextResponse } from 'next/server'

export function middleware(request) {
    const timezone = request.headers.get('x-vercel-ip-timezone') || 'UTC'
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-timezone', timezone)
    return NextResponse.next({
        request: { headers: requestHeaders }
    })
}

export const config = {
    matcher: ['/', '/schedule/:path*'],
}
