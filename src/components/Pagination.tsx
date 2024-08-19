"use client";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
export default function Pagination() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const page = parseInt(searchParams.get("start") || "1", 10);
  return (
    <div className="text-blue-600 flex px-10 pb-4 justify-center sm:justify-start sm:space-x-44  sm:px-0">
      {page > 1 && (
        <Link href={`${pathName}?searchTerm=${searchTerm}&start=${page - 1}`}>
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <BsChevronLeft className="h-5" />
            <p>previous</p>
          </div>
        </Link>
      )}
      <span> {page}</span>
      <Link href={`${pathName}?searchTerm=${searchTerm}&start=${page + 1}`}>
        <div className="flex flex-col items-center cursor-pointer hover:underline">
          <BsChevronRight className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}
