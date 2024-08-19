"use client";
import React from "react";
import { MdOutlineCamera, MdOutlineSearch } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SearchHeaderOption() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const router = useRouter();
  const selectTab = (tab: string) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="flex space-x-2 select-none border-b justify-center w-full lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center pb-3 px-2 border-b-4 border-transparent space-x-1 active:text-blue-500 cursor-pointer ${
          pathname === "/search/web" && "!border-blue-600 !text-blue-600 "
        }`}
      >
        <MdOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center pb-3 px-2 border-b-4 border-transparent space-x-1 active:text-blue-500 cursor-pointer ${
          pathname === "/search/image" && "!border-blue-600 !text-blue-600 "
        }`}
      >
        <MdOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
