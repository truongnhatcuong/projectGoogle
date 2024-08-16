import HomeHeader from "@/components/HomeHeader";
import React from "react";
import Image from "next/image";

import HomeSearch from "@/components/HomeSearch";

const page = () => {
  return (
    <>
      <HomeHeader />
      {/* {body} */}
      <div className="flex flex-col items-center mt-24 ">
        <Image
          width={300}
          height={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt={""}
          className="mb-3"
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default page;
