"use client";

import Link from "next/link";
import * as icon from '@/Utils/Icons/Icons';

export default function NotAuthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center max-w-md">
        <icon.LuShieldAlert className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Access Denied 
        </h1>
        <p className="text-gray-600 text-center mb-6">
          You don’t have the necessary permissions to access this page. <br />
          If you believe this is a mistake, please contact the administrator.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
