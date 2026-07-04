import ContactUs from "./contact-us/contact-us";
import Faq from "./FAQ/faq";
import Features from "./features/features";
import HeroSection from "./hero-section/hero-section";
import Tokens from "./tokens/tokens";

export default function HomePage() {
	return (
		<div>
			<HeroSection />
			<Tokens />
			<Features />
			<Faq />
			<ContactUs />
		</div>
	);
}
