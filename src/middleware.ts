import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function middleware(request: NextRequest) {
  try {
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const token = cookie.value.replace("Bearer ", "");

    const { payload } = await jwtVerify(token, secret);

    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith("/dashboard/admins")) {
      if (payload.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }

    if (pathname.startsWith("/dashboard/users")) {
      if (!["USER", "ADMIN"].includes(payload.role as string)) {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/admin/:path*",
    "/dashboard/admins/:path*",
    "/dashboard/user/:path*",
    "/dashboard/users/:path*",
  ],
};
