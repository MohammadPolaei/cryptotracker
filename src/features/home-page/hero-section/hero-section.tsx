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
		<section className="w-full flex flex-col desktop:flex-row justify-between items-center relative gap-15 desktop:gap-0">
			{/* background (green spot) */}
			<div className="w-full desktop:w-2/3 h-full desktop:h-150 absolute right-0 bg-radial via-transparent from-(--green-color)/10 to-transparent pointer-events-none" />

			<div className="w-full max-w-181 flex flex-col gap-4 tablet:gap-8">
				{" "}
				<div className="font-bold text-[32px] tablet:text-[73px] tracking-[-1] tablet:tracking-[-3] leading-10 tablet:leading-18 desktop:leading-15">
					Track Crypto <span className="text-(--green-color)">Prices</span> in
					Real-Time
				</div>
				<p className="text-4 tablet:text-[25.5px] text-(--description-text)">
					Stay updated with the latest cryptocurrency prices, trends, and market
					data. Get insights and make informed decisions with our comprehensive
					tracking platform.
				</p>
				<div className="w-full tablet:w-62.5 flex flex-col tablet:flex-row justify-between items-center gap-5 tablet:gap-0">
					<button className="w-full tablet:w-fit bg-(--green-color) text-center rounded-md text-white cursor-pointer py-2 px-4 font-semibold">
						Get Started
					</button>
					<button className="w-full tablet:w-fit border border-black/5 shadow-sm text-center rounded-md text-black cursor-pointer py-2 px-4 font-semibold">
						Learn More
					</button>
				</div>
			</div>
			<div>
				<div className="w-[288px] h-61 border border-black/5 rounded-2xl shadow-sm shadow-black/5 relative flex flex-col justify-center items-center gap-3">
					{currencyList.map((currency) => (
						<div
							key={currency.title}
							className="w-60 h-11 flex justify-between items-center"
						>
							<div className="flex justify-start items-center gap-1.5">
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
