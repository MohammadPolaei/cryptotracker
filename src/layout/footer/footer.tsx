import FooterBottom from "./footer-bottom";
import FooterBrand from "./footer-brand";
import FooterLinks from "./footer-links";

export default function Footer() {
	return (
		<footer className="w-[99vw] border-t-2 border-(--border-color) pt-12">
			<div className="w-full mx-auto px-6">
				<div className="flex flex-col tablet:flex-row justify-between gap-16">
					<FooterBrand />
					<FooterLinks />
				</div>

				<FooterBottom />
			</div>
		</footer>
	);
}
