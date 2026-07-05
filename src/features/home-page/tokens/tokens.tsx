"use client";
import { useState } from "react";
import ListContainer from "./list-container";
// icons
import bnbIcon from "@/assets/tokens/bnbIcon.svg";
import btcIcon from "@/assets/tokens/btcIcon.svg";
import ethIcon from "@/assets/tokens/ethIcon.svg";
import solIcon from "@/assets/tokens/solIcon.svg";
import usdtIcon from "@/assets/tokens/usdtIcon.svg";
import xrpIcon from "@/assets/tokens/xrpIcon.svg";
import { CurrencyType } from "@/types/currencies";

const timeFrames = ["1 Day", "1 Week", "1 Month", "1 Year", "All Time"];

const currencies: CurrencyType[] = [
	{
		icon: btcIcon.src,
		title: "Bitcoin",
		symbol: "BTC",
		price: "103,931",
		change: "0.25",
		marketCap: "2,064,456,684,764",
		volume: "31,570,685,137",
	},
	{
		icon: ethIcon.src,
		title: "Ethererum",
		symbol: "ETH",
		price: "2,612.12",
		change: "4.41",
		marketCap: "315,294,215,898",
		volume: "39,272,853,031",
	},
	{
		icon: xrpIcon.src,
		title: "XRP",
		symbol: "XRP",
		price: "2.61",
		change: "2.67",
		marketCap: "153,025,185,499",
		volume: "5,830,620,565",
	},
	{
		icon: usdtIcon.src,
		title: "Tether",
		symbol: "USDT",
		price: "1",
		change: "0.01",
		marketCap: "150,333,097,668",
		volume: "88,895,292,120",
	},
	{
		icon: bnbIcon.src,
		title: "BNB",
		symbol: "BNB",
		price: "658.13",
		change: "0.80",
		marketCap: "95,980,456,844",
		volume: "1,600,427,657",
	},

	{
		icon: solIcon.src,
		title: "Solana",
		symbol: "SOL",
		price: "180.73",
		change: "3.51",
		marketCap: "93,866,719,371",
		volume: "7,145,375,003",
	},
];

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
			<div className="border border-black/5 rounded-md py-0.5 px-1 outline-0 space-x-1 mb-5 mt-10">
				{timeFrames.map((time) => (
					<button
						key={time}
						onClick={() => {
							setIsActive(time);
						}}
						className={`${
							isActive == time
								? "bg-white text-black border-black/5 shadow-sm shadow-black/5 box-border"
								: "border-black/0 text-(--description-text)"
						} px-2 py-1 rounded-sm font-semibold border cursor-pointer outline-0 transition-all ease-in-out duration-800 text-[15.2px]`}
					>
						{time}
					</button>
				))}
			</div>
			<div className="w-full">
				<ListContainer currencies={currencies} />
			</div>
		</section>
	);
}
