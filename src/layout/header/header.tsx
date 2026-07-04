import themeIcon from "@/assets/header/ThemeIcon.svg";
import cryptoTrackerIcon from "@/assets/header/cryptotrackerIcon.svg";
import Link from "next/link";

const navBarList = [
	{ title: "Tokens", href: "/" },
	{ title: "Features", href: "/" },
	{ title: "FAQ", href: "/" },
	{ title: "Contact", href: "/" },
];

export default function Header() {
	return (
		<div className="w-full h-16 px-10 flex justify-between items-center">
			<div className="flex items-center justify-center gap-1">
				<img src={cryptoTrackerIcon.src} alt="Icon" />
				<span className="font-semibold text-2xl">CryptoTracker</span>
			</div>
			<nav className="flex justify-between items-center w-[273.68px] h-5 text-[15.2px]">
				{navBarList.map((navItem) => (
					<Link href={navItem.href} key={navItem.title}>
						{navItem.title}
					</Link>
				))}
			</nav>
			<div>
				<button className="w-10 h-10 rounded-md shadow-sm shadow-black/5 flex flex-col justify-center items-center cursor-pointer">
					<img src={themeIcon.src} alt="ThemeToggle" />
				</button>
			</div>
		</div>
	);
}
