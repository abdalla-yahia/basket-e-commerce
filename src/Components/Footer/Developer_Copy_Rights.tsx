import Link from "next/link";
import * as icon from '@/Utils/Icons/Icons';

export default function Developer_Copy_Rights() {
  return (
    <>
      {/**Site Developer */}
      <div className="w-full flex flex-wrap justify-center items-center text-xs text-gray-500 gap-1">
        <span>Developed by</span>
        <Link
          href="https://www.linkedin.com/in/abdalla-yahia/"
          target="_blank"
          className="hover:underline text-blue-600 font-medium flex items-center gap-1"
        >
          Eng. Abdalla Yahia <span className="text-red-500">™</span>
        </Link>
        <span className="opacity-60">© All Rights Reserved</span>
        <span className="flex items-center gap-1">
          | Contact:
          <icon.FaWhatsapp className="text-green-600" />
          <Link
            href="https://wa.me/201211100554?text=Hello%20Eng.%20Abdalla,%20I%20would%20like%20to%20connect%20with%20you%20for%20website%20development."
            target="_blank"
            className="hover:underline text-gray-500"
          >
            01211100554
          </Link>
        </span>
      </div>
    </>
  )
}
