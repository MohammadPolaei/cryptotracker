"use client";
import { useState } from "react";
import ListContainer from "./list-container";
const timeFrames = ["1 Day", "1 Week", "1 Month", "1 Year", "All Time"];
export default function Tokens() {
	const [isActive, setIsActive] = useState<string>(timeFrames[0]);

	return (
		<section className="w-full flex flex-col justify-start items-center">
			<div className="flex flex-col justify-center items-center">
				<h2 className="text-[56.4px] font-bold">
					Latest Crypto <span className="text-(--green-color)">Prices</span>
				</h2>
				<p className="text-(--description-text) text-[25.5px]">
					Track the top 10 cryptocurrencies by market capitalization in
					real-time
				</p>
			</div>
			<div className="border border-black/5 rounded-xl py-0.5 px-1 outline-0 space-x-1 mb-5 mt-10">
				{timeFrames.map((time) => (
					<button
						key={time}
						onClick={() => {
							setIsActive(time);
						}}
						className={`${
							isActive == time
								? "bg-white text-black border-black/5 shadow-sm shadow-black/5 box-border"
								: "border-black/0"
						} px-2 py-1 rounded-sm font-semibold border cursor-pointer outline-0 transition-all ease-in-out duration-800 text-[15.2px]`}
					>
						{time}
					</button>
				))}
			</div>
			<div className="w-full">
				<ListContainer />
			</div>
		</section>
	);
}
