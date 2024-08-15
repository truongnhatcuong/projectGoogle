import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

const homeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center ">
        <Link href="https://email.google.com" className="hover:underline">
          Email
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-600 hover:brightness-105 hover:shadow-md px-6 py-2 text-white rounded-3xl transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default homeHeader;
