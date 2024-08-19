import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOption from "./SearchHeaderOption";
const SearchHeader = () => (
  <header className="sticky top-0 bg-white">
    <div className="flex w-full items-center justify-between p-6">
      <Link href={"/"} className="">
        <Image
          width={120}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt="Google logo"
          className="w-auto h-auto"
          priority={true} // {false} | {true}
        />
      </Link>

      <div className="flex-1">
        <SearchBox />
      </div>
      <div className="hidden md:inline-flex space-x-2">
        <IoSettingsOutline className="header-icon" />
        <TbGridDots className="header-icon" />
      </div>
      <button className="bg-blue-600 hover:brightness-105 hover:shadow-md px-6 py-2 text-white rounded-lg transition-shado ml-2">
        Sign in
      </button>
    </div>
    <SearchHeaderOption />
  </header>
);

export default SearchHeader;
