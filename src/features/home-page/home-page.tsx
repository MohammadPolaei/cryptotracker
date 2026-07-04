import ContactUs from "./contact-us/contact-us";
import Faq from "./FAQ/faq";
import Features from "./features/features";
import HeroSection from "./hero-section/hero-section";
import Tokens from "./tokens/tokens";

export default function HomePage() {
	return (
		<div className="w-full flex flex-col justify-start items-center gap-25">
			<HeroSection />
			<Tokens />
			<Features />
			<Faq />
			<ContactUs />
		</div>
	);
}
