import HeroSection from "./hero-section/hero-section";
import Tokens from "./tokens/tokens";

export default function HomePage() {
	return (
		<div className="w-full flex flex-col justify-start items-center gap-40">
			<HeroSection />
			<Tokens />
			{/* <Features />
			<Faq />
			<ContactUs /> */}
		</div>
	);
}
