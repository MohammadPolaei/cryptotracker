import adaIcon from "@/assets/hero-section/ADA.svg";
import ethIcon from "@/assets/hero-section/ETH.svg";
import solIcon from "@/assets/hero-section/SOL.svg";

import acsIcon from "@/assets/acsIcon.svg";
import decIcon from "@/assets/decIcon.svg";

const currencyList = [
	{
		icon: ethIcon.src,
		title: "Ethereum",
		symbol: "ETH",
		price: "3,245.67",
		change: "1.8",
		changeStat: "acs",
	},
	{
		icon: solIcon.src,
		title: "Solana",
		symbol: "SOL",
		price: "142.89",
		change: "0.5",
		changeStat: "dec",
	},
	{
		icon: adaIcon.src,
		title: "Cardano",
		symbol: "ADA",
		price: "0.58",
		change: "3.2",
		changeStat: "acs",
	},
];

export default function HeroSection() {
	return (
		<section className="w-full h-78.5 flex justify-between items-center relative">
			{/* background (green spot) */}
			<div className="w-2/3 h-150 absolute right-0 bg-radial via-transparent from-(--green-color)/10 to-transparent" />

			<div className="w-181.75 h-full flex flex-col justify-start items-start gap-5">
				<div className="font-bold text-[73px] tracking-[-3] leading-14">
					Track Crypto <span className="text-(--green-color)">Prices</span> in
					Real-Time
				</div>
				<p className="text-[25.5px] text-(--description-text)">
					Stay updated with the latest cryptocurrency prices, trends, and market
					data. Get insights and make informed decisions with our comprehensive
					tracking platform.
				</p>
				<div className="w-62.5 flex justify-between items-center">
					<button className="bg-(--green-color) text-center rounded-lg text-white cursor-pointer py-2 px-4 font-semibold">
						Get Started
					</button>
					<button className="border border-black/5 shadow-sm text-center rounded-lg text-black cursor-pointer py-2 px-4 font-semibold">
						Learn More
					</button>
				</div>
			</div>
			<div>
				<div className="w-[288px] h-61 border border-black/5 rounded-2xl shadow-sm shadow-black/5 relative flex flex-col justify-center items-center gap-2">
					{currencyList.map((currency) => (
						<div
							key={currency.title}
							className="w-60 h-11 flex justify-between items-center"
						>
							<div className="flex justify-start items-center gap-1">
								<img src={currency.icon} />
								<div className="flex flex-col justify-center items-start">
									<span className="font-bold">{currency.title}</span>
									<span className="text-(--description-text) text-sm">
										{currency.symbol}
									</span>
								</div>
							</div>
							<div className="flex flex-col justify-center items-end">
								<span className="font-bold">{`$${currency.price}`}</span>
								<div className="flex items-center justify-center">
									<img
										src={
											currency.changeStat == "acs" ? acsIcon.src : decIcon.src
										}
									/>
									<span
										className={`text-sm ${
											currency.changeStat == "acs"
												? "text-(--green-color)"
												: "text-(--red-color)"
										}`}
									>{`${currency.change}%`}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
