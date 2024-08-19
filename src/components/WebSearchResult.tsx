"use client";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import Pagination from "./Pagination";

interface IGoogle {
  title: string;
  link: string;
  htmlSnippet: string;
}

interface WebSearchResultProps {
  results: {
    searchInformation?: {
      formattedTotalResults: string;
      formattedSearchTime: string;
    };
    items: IGoogle[];
  };
}

export default function WebSearchResult({ results }: WebSearchResultProps) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:ml-[5%] md:ml-[14%] mt-3 ">
      <p className="text-sm text-gray-600 mb-8">
        About {results.searchInformation?.formattedTotalResults} Results (
        {results.searchInformation?.formattedSearchTime} Seconds)
      </p>
      {results.items?.map((item: any) => (
        <div key={item.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link href={item.link} className="text-sm truncate text-black">
              {item.link}
            </Link>
            <Link
              href={item.link}
              className="hover:underline decoration-blue-800 text-xl text-blue-900 font-bold truncate "
            >
              {item.title}
            </Link>
          </div>
          <p className="text-gray-600">
            {typeof item.htmlSnippet === "string"
              ? parse(item.htmlSnippet)
              : ""}
          </p>
        </div>
      ))}
      <Pagination />
    </div>
  );
}
