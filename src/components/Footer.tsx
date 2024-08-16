import React from "react";
import CountryLookUp from "./CountryLookUp";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-950 w-full bg-[#f2f2f2] p-1">
      <div className="border-b px-8 py-3">
        <CountryLookUp />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="highlight">About</li>
          <li className="highlight">Business</li>
          <li className="highlight"> Advertising</li>
          <li className="highlight">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="highlight">Privacy </li>
          <li className="highlight">Terms </li>
          <li className="highlight">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
