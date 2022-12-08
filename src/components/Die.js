import React from "react";

export default function Die({ value }) {
  return (
    <div className="bg-white cursor-pointer font-semibold border border-gray-500 shadow-md rounded-md shadow-gray-400 sm:w-12 sm:h-12 w-8 h-8 flex justify-center items-center">
      {value}
    </div>
  );
}
