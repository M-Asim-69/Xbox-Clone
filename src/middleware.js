import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("access_token")?.value;

  // Define routes that require authentication
  const protectedRoutes = ["/Add", "/Todo", "/Update"];

  // Check if the current route is one of the protected routes
  const isProtectedRoute = protectedRoutes.some((route) => 
    request.nextUrl.pathname.startsWith(route)
  );

  // Redirect to login if the route is protected and no token is present
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  // Allow access to other routes without authentication
  return NextResponse.next();
}

export const config = {
  // Match all routes to ensure middleware runs for every request
  matcher: ["/Add",'/Todo','/Update'], 
};
