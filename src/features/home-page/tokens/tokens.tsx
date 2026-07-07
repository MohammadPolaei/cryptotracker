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
import TitleAndDescription from "@/components/shared/title-and-description";
import { useTheme } from "@/hooks/use-theme";
import { CurrencyType } from "@/types/currencies";

const timeFrames = ["1 Day", "1 Week", "1 Month", "1 Year", "All Time"];

const currencies: CurrencyType[] = [
	{
		icon: btcIcon.src,
		title: "Bitcoin",
		symbol: "BTC",
		price: 103931,
		change: 0.25,
		marketCap: 2064456684764,
		volume: 31570685137,
		changeStat: "acs",
	},
	{
		icon: ethIcon.src,
		title: "Ethererum",
		symbol: "ETH",
		price: 2612.12,
		change: 4.41,
		marketCap: 315294215898,
		volume: 39272853031,
		changeStat: "acs",
	},
	{
		icon: xrpIcon.src,
		title: "XRP",
		symbol: "XRP",
		price: 2.61,
		change: 2.67,
		marketCap: 153025185499,
		volume: 5830620565,
		changeStat: "acs",
	},
	{
		icon: usdtIcon.src,
		title: "Tether",
		symbol: "USDT",
		price: 1,
		change: 0.01,
		marketCap: 150333097668,
		volume: 88895292120,
		changeStat: "dec",
	},
	{
		icon: bnbIcon.src,
		title: "BNB",
		symbol: "BNB",
		price: 658.13,
		change: 0.8,
		marketCap: 95980456844,
		volume: 1600427657,
		changeStat: "acs",
	},

	{
		icon: solIcon.src,
		title: "Solana",
		symbol: "SOL",
		price: 180.73,
		change: 3.51,
		marketCap: 93866719371,
		volume: 7145375003,
		changeStat: "acs",
	},
];

export default function Tokens() {
	const [isActive, setIsActive] = useState<string>(timeFrames[0]);
	const { dark } = useTheme();

	return (
		<section
			className="w-full flex flex-col justify-start items-center"
			id="tokens"
		>
			<TitleAndDescription
				title={
					<h2 className="font-bold text-[30px] tablet:text-[56.4px] desktop:h-12 text-center w-full">
						Latest Crypto <span className="text-(--green-color)">Prices</span>
					</h2>
				}
				description="Track the top 10 cryptocurrencies by market capitalization in real-time"
			/>

			<div className="border-2 border-(--border-color) rounded-lg py-0.5 px-1 outline-0 space-x-1 mb-8">
				{timeFrames.map((time) => (
					<button
						key={time}
						onClick={() => {
							setIsActive(time);
						}}
						className={`${
							isActive == time
								? `bg-(--time-frame-button) text-(--text-color) ${
										dark
											? "border-(--border-color)/0"
											: "border-(--border-color)"
								  } box-border`
								: "border-black/0 text-(--description-text)/50"
						} px-1 tablet:px-2 py-1 rounded-sm font-semibold border-2 cursor-pointer outline-0 transition-all ease-in-out duration-800 tablet:text-[15.2px] text-[12px]`}
					>
						{time}
					</button>
				))}
			</div>
			<div className="w-full relative">
				<div className="h-200 absolute w-full bg-radial via-transparent from-(--green-color)/5 to-transparent" />

				<ListContainer currencies={currencies} />
			</div>
		</section>
	);
}
