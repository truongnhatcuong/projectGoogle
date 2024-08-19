"use client";
import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomsearchloading, setRandomsearchloading] = useState(false);
  const router = useRouter();
  function handelsubmit(e: any) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`search/web?searchTerm=${input}`);
  }

  async function randomHandler() {
    setRandomsearchloading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data: any) => data[0]);
    if (!response) return;
    router.push(`search/image?searchTerm=${response}`);
    setRandomsearchloading(false);
  }
  return (
    <>
      <form
        className="flex w-full m5-5 mx-auto max-w-[90%]  border border-gray-200 px-5 py-3 
    rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        onSubmit={handelsubmit}
      >
        <AiOutlineSearch className="text-xl mr-4" onClick={handelsubmit} />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FaMicrophone className="text-xl" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button className="btn" onClick={handelsubmit}>
          Google Search
        </button>
        <button
          className="btn flex justify-center items-center"
          onClick={randomHandler}
          disabled={randomsearchloading}
        >
          {randomsearchloading ? (
            // eslint-disable-next-line @next/next/no-img-element
            <span className="loading loading-spinner loading-lg disabled:opacity-70"></span>
          ) : (
            <>I Am Feeling Lucky</>
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
