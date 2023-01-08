import React from "react";

export default function Die({ value, isHeld, holdDie }) {
	return (
		<div
			className={`cursor-pointer shadow-sm active:shadow-none rounded-md shadow-gray-400 sm:w-12 sm:h-12 w-8 h-8 flex justify-center items-center ${
				isHeld ? "bg-green-400" : "bg-white"
			}`}
			onClick={holdDie}
		>
			<p className=" font-semibold">{value}</p>
		</div>
	);
}
