"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const router = useRouter();
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      className="flex  border border-gray-400  ml-10 mr-5 rounded-full px-6 py-3 shadow-lg flex-grow justify-between max-w-3xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-gray-500 text-2xl"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="text-blue-500 text-4xl pl-4 border-l-2 border-gray-400 hidden sm:inline-flex mr-3" />
      <IoIosSearch
        className="text-blue-500 text-2xl cursor-pointer hidden sm:inline-flex"
        onClick={handleSubmit}
      />
    </form>
  );
}
