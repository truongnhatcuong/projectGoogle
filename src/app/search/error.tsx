"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";

export default function error(error: any, reset: any) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <div className="text-center">
      <h1 className="text-lg">
        Some thing went wrong. Please try again later.
      </h1>
      <button onClick={() => reset} className="text-blue-500">
        Try again
      </button>
    </div>
  );
}
