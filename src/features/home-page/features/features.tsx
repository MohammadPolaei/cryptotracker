"use client";

import { FeatureType } from "@/types/features";
import FeatureCard from "./feature-card";
// icons
import educationalIcon from "@/assets/features/Educational Resources.svg";
import historicalIcon from "@/assets/features/Historical Data.svg";
import insightsIcon from "@/assets/features/Market Insights.svg";
import responsiveIcon from "@/assets/features/Mobile Responsive.svg";
import alertsIcon from "@/assets/features/Price Alerts.svg";
import realTimeIcon from "@/assets/features/Real-Time Prices.svg";

import educationalIconDark from "@/assets/features/Educational Resources-dark.svg";
import historicalIconDark from "@/assets/features/Historical Data-dark.svg";
import insightsIconDark from "@/assets/features/Market Insights-dark.svg";
import responsiveIconDark from "@/assets/features/Mobile Responsive-dark.svg";
import alertsIconDark from "@/assets/features/Price Alerts-dark.svg";
import realTimeIconDark from "@/assets/features/Real-Time Prices-dark.svg";

import TitleAndDescription from "@/components/shared/title-and-description";
import { useTheme } from "@/hooks/use-theme";

export default function Features() {
	const { dark } = useTheme();

	const featuresList: FeatureType[] = [
		{
			icon: dark ? realTimeIconDark.src : realTimeIcon.src,
			title: "Real-Time Prices",
			description:
				"Get real-time price updates for the top cryptocurrencies in the market.",
		},
		{
			icon: dark ? historicalIconDark.src : historicalIcon.src,
			title: "Historical Data",
			description:
				"View historical price data with customizable time frames from 1 day to all time.",
		},
		{
			icon: dark ? insightsIconDark.src : insightsIcon.src,
			title: "Market Insights",
			description:
				"Get valuable insights and analytics to make informed investment decisions.",
		},
		{
			icon: dark ? alertsIconDark.src : alertsIcon.src,
			title: "Price Alerts",
			description:
				"Set up customizable price alerts to stay informed about market movements.",
		},
		{
			icon: dark ? educationalIconDark.src : educationalIcon.src,
			title: "Educational Resources",
			description:
				"Access educational content to learn more about cryptocurrencies and blockchain technology.",
		},
		{
			icon: dark ? responsiveIconDark.src : responsiveIcon.src,
			title: "Mobile Responsive",
			description:
				"Access your crypto dashboard on any device with our fully responsive design.",
		},
	];

	return (
		<section id="features">
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
