import themeIcon from "@/assets/header/ThemeIcon.svg";
import cryptoTrackerIcon from "@/assets/header/cryptotrackerIcon.svg";
import Link from "next/link";

const navBarList = [
	{ title: "Tokens", href: "#tokens" },
	{ title: "Features", href: "#features" },
	{ title: "FAQ", href: "#faq" },
	{ title: "Contact", href: "#contact" },
];

export default function Header() {
	return (
		<div className="w-full h-16 px-2 tablet:px-10 flex justify-between items-center">
			<div className="flex items-center justify-center gap-1">
				<img src={cryptoTrackerIcon.src} alt="Icon" />
				<span className="font-bold text-xl tablet:text-2xl">CryptoTracker</span>
			</div>
			<nav className="hidden tablet:flex justify-between items-center tablet:gap-5 max-w-[273.68px] h-5 text-[15.2px] font-semibold">
				{navBarList.map((navItem) => (
					<Link href={navItem.href} key={navItem.title}>
						{navItem.title}
					</Link>
				))}
			</nav>
			<div>
				<button className="w-10 h-10 rounded-lg shadow-sm shadow-black/5 flex flex-col justify-center items-center cursor-pointer active:bg-(--green-color)/30 transition duration-300 ease-in-out">
					<img src={themeIcon.src} alt="ThemeToggle" />
				</button>
			</div>
			<div className="tablet:hidden flex flex-col justify-center items-center">
				Menu
			</div>
		</div>
	);
}
