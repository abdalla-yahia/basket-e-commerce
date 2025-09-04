import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "./Interfaces/UserInterface";

export function middleware(request: NextRequest) {
  try {
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      console.log("❌ No cookie found");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const token = cookie.value.replace("Bearer ", "");
    const decoded = Jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as TokenInterFace;

    console.log("✅ Middleware decoded:", decoded);

    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith("/dashboard/admin")) {
      if (decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }

    if (pathname.startsWith("/dashboard/users")) {
      if (!["USER", "ADMIN"].includes(decoded.role)) {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("❌ Middleware error:", err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/admin/:path*",
    "/dashboard/admins/:path*",
    "/dashboard/users/:path*",
  ],
};
