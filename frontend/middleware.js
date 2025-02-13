import { NextResponse } from "next/server";

export function middleware(req) {
  // Get token & role from cookies
  const token = req.cookies.get("token");
  const isAdmin = req.cookies.get("isAdmin");  

  const url = req.nextUrl.clone();

  if (!token) {
    // If not logged in, send to login page
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Restrict access to /admin pages for non-admins
  if (url.pathname.startsWith("/admin") && isAdmin.value !== "true") {
    url.pathname = "/unauthorized"; 
    return NextResponse.redirect(url);
  }

  // Restrict access to /customer pages for non-customers
  if (url.pathname.startsWith("/customer") && isAdmin.value !== "false") {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow access if role is correct
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/admin/:path*", "/customer/:path*"],
};
