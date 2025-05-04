import { NextResponse } from "next/server";

export async function middleware(request) {

    const token = request.cookies.get("access_token")?.value;
    const protectedRoutes = ["/Add", "/Todo", "/Update"];

    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/Login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/Add", '/Todo', '/Update'],
};