import crypIcon from "@/assets/cryptotrackerIcon.svg";
import Facebook from "@/assets/footer/facebook";
import Instagram from "@/assets/footer/instagram";
import Linkedin from "@/assets/footer/linkedin";
import Twitter from "@/assets/footer/twitter";
import Link from "next/link";

export default function FooterBrand() {
	return (
		<div className="max-w-xs overflow-hidden">
			<div className="flex items-center gap-1 mb-5">
				<img src={crypIcon.src} />

				<h3 className="font-bold text-2xl">CryptoTracker</h3>
			</div>

			<p className="text-(--text-color) leading-7 mb-8">
				The ultimate platform for tracking cryptocurrency prices and managing
				your digital assets.
			</p>

			<div className="flex items-start gap-2 desktop:gap-5">
				<Link href="#" className="text-(--text-color)">
					<Twitter />
				</Link>
				<Link href="#" className="text-(--text-color)">
					<Facebook />
				</Link>
				<Link href="#" className="text-(--text-color)">
					<Instagram />
				</Link>
				<Link href="#" className="text-(--text-color)">
					<Linkedin />
				</Link>
			</div>
		</div>
	);
}
