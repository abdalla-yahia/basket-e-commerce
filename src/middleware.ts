import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { TokenInterFace } from "./Interfaces/UserInterface";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as TokenInterFace

    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith("/dashboard/admins")) {
      if (decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }

    if (pathname.startsWith("/dashboard/users")) {
      if (decoded.role !== "USER" && decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/admins/:path*", "/dashboard/users/:path*"],
};
