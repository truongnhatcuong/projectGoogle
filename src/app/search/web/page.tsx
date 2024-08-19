import WebSearchResult from "@/components/WebSearchResult";
import Link from "next/link";
import React from "react";

export default async function WebSearch({ searchParams }: any) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const page = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${page}`
  );

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  const result = data.items;

  if (!result || result.length === 0)
    return (
      <div className="text-center mt-5">
        {" "}
        <h1 className="text-3xl "> No results found</h1>
        <p className="mt-2">
          Try Searching For Something Or Go Back To The Back Home
        </p>
        <Link href={"/"}>
          <p className="text-blue-600 hover:text-blue-400">Home</p>
        </Link>
      </div>
    );
  return <>{result && <WebSearchResult results={data} />}</>;
}
