import { FeatureType } from "@/types/features";
import FeatureCard from "./feature-card";
// icons
import educationalIcon from "@/assets/features/Educational Resources.svg";
import historicalIcon from "@/assets/features/Historical Data.svg";
import insightsIcon from "@/assets/features/Market Insights.svg";
import responsiveIcon from "@/assets/features/Mobile Responsive.svg";
import alertsIcon from "@/assets/features/Price Alerts.svg";
import realTimeIcon from "@/assets/features/Real-Time Prices.svg";
import TitleAndDescription from "@/components/shared/title-and-description";

const featuresList: FeatureType[] = [
	{
		icon: realTimeIcon.src,
		title: "Real-Time Prices",
		description:
			"Get real-time price updates for the top cryptocurrencies in the market.",
	},
	{
		icon: historicalIcon.src,
		title: "Historical Data",
		description:
			"View historical price data with customizable time frames from 1 day to all time.",
	},
	{
		icon: insightsIcon.src,
		title: "Market Insights",
		description:
			"Get valuable insights and analytics to make informed investment decisions.",
	},
	{
		icon: alertsIcon.src,
		title: "Price Alerts",
		description:
			"Set up customizable price alerts to stay informed about market movements.",
	},
	{
		icon: educationalIcon.src,
		title: "Educational Resources",
		description:
			"Access educational content to learn more about cryptocurrencies and blockchain technology.",
	},
	{
		icon: responsiveIcon.src,
		title: "Mobile Responsive",
		description:
			"Access your crypto dashboard on any device with our fully responsive design.",
	},
];

export default function Features() {
	return (
		<section>
			<TitleAndDescription
				title={
					<h2 className="font-bold text-[30px] tablet:text-[56.4px] desktop:h-12 text-center w-full">
						Powerful <span className="text-(--green-color)">Features</span>
					</h2>
				}
				description="Everything you need to track cryptocurrency prices and market trends."
			/>

			<div className="w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5">
				{featuresList.map((feature) => (
					<FeatureCard key={feature.title} feat={feature} />
				))}
			</div>
		</section>
	);
}
