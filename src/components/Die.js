import React from "react";

export default function Die({ value }) {
  return (
    <div className="bg-white cursor-pointer shadow-sm hover:shadow-lg active:shadow-none active:bg-green-400 rounded-md shadow-gray-400 sm:w-12 sm:h-12 w-8 h-8 flex justify-center items-center">
      <p className=" font-semibold">{value}</p>
    </div>
  );
}
