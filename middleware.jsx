import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
export function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const url = new URL(request.nextUrl);
  if (!token && url.pathname === "/") {
    const absoluteUrl = new URL("/auth/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  if (token && url.pathname.includes("/auth")) {
    const absoluteUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  return NextResponse.next();
}
