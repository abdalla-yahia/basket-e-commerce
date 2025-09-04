import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "./Interfaces/UserInterface";

export function middleware(request: NextRequest) {
  try {
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const token = cookie.value;
    const decoded = Jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as TokenInterFace;

    const pathname = request.nextUrl.pathname;

    // Admin dashboard
    if (pathname.startsWith("/dashboard/admins")) {
      if (decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }

    // User dashboard
    if (pathname.startsWith("/dashboard/users")) {
      if (!["USER", "ADMIN"].includes(decoded.role)) {
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
