"use client";
import React, { useEffect, useState } from "react";

const CountryLookUp = () => {
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setCountry(data?.country || []))
      .catch((error) => console.error(error));
  });
  return <div>{country}</div>;
};

export default CountryLookUp;
