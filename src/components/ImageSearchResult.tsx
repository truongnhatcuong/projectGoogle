/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface Iimage {
  link: string;
  image: {
    contextLink: string;
  };
  title: string;
  displayLink: string;
}

interface IImageSearchProps {
  results: {
    items: Iimage[];
  };
}
const ImageSearchResult = ({ results }: IImageSearchProps) => {
  return (
    <div className="pb-40 sm:pb-24  mt-12">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4">
        {results.items?.map((item: Iimage, index: any) => (
          <div key={index} className="mb-10">
            <div className="group">
              <Link href={item.image.contextLink}>
                <img
                  alt={item.title}
                  src={item.link}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                />
              </Link>
              <Link href={item.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {item.title}
                </h2>
              </Link>
              <Link href={item.image.contextLink}>
                <p className="group-hover:underline text-gray-600">
                  {item.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResult;
