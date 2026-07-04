export default function HeroSection() {
	return (
		<section className="h-78.5">
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
					<button className="bg-(--green-color) text-center rounded-md text-white cursor-pointer py-2 px-4 font-semibold">
						Get Started
					</button>
					<button className="border border-black/10 shadow-sm text-center rounded-md text-black cursor-pointer py-2 px-4 font-semibold">
						Learn More
					</button>
				</div>
			</div>
			<div></div>
		</section>
	);
}
