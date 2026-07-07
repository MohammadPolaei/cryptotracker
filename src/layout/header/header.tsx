"use client";

import cryptoTrackerIcon from "@/assets/cryptotrackerIcon.svg";
import themeIconDark from "@/assets/header/ThemeIcon-dark.svg";
import themeIcon from "@/assets/header/ThemeIcon.svg";
import { useTheme } from "@/hooks/use-theme";
import Link from "next/link";
import { useState } from "react";

const navBarList = [
	{ title: "Tokens", href: "#tokens" },
	{ title: "Features", href: "#features" },
	{ title: "FAQ", href: "#faq" },
	{ title: "Contact", href: "#contact" },
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { dark, toggleTheme } = useTheme();

	const toggleMenu = () => {
		if (!isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		setIsMenuOpen((perv) => !perv);
	};

	return (
		<div
			id="theHeader"
			className="w-full bg-(--bg-color) h-16 px-2 tablet:px-10 flex justify-between items-center fixed inset-0 z-200 border-b-2 border-(--border-color)"
		>
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
			<div className="flex items-center gap-3">
				<button
					onClick={() => {
						toggleTheme();
					}}
					className="w-10 h-10 rounded-lg border-2 border-(--border-color) flex flex-col justify-center items-center cursor-pointer active:bg-(--green-color)/30 transition duration-300 ease-in-out"
				>
					{dark ? (
						<img src={themeIconDark.src} alt="ThemeToggle" />
					) : (
						<img src={themeIcon.src} alt="ThemeToggle" />
					)}
				</button>
				<button
					onClick={() => toggleMenu()}
					className="tablet:hidden w-10 h-10 rounded-lg border-2 border-(--border-color) flex flex-col justify-center items-center cursor-pointer active:bg-(--green-color)/30 transition duration-300 ease-in-out"
				>
					<svg
						className="text-(--text-color)"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							d="M3.33325 10H16.6666M3.33325 15H16.6666M3.33325 5H16.6666"
							stroke="currentColor"
							strokeWidth="1.33333"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>{" "}
				</button>
			</div>
			{/* mobile menu */}
			<nav
				className={`
        absolute
        top-full
        right-0
        w-full
        bg-(--bg-color)/50
				backdrop-blur-[20px]
        overflow-hidden
				

        transition-all
        duration-800
        ease-in-out

        ${
					isMenuOpen
						? "h-screen opacity-100 z-100 py-10"
						: "max-h-0 opacity-0 z-0 py-0"
				}

				flex flex-col justify-start items-center gap-5
				
    `}
			>
				{navBarList.map((navItem) => (
					<Link
						href={navItem.href}
						key={navItem.title}
						onClick={() => toggleMenu()}
						className={`${
							dark ? "to-white/10" : "to-white/50"
						} text-(--text-color) bg-radial from-transparent  rounded-lg shadow-sm shadow-b-black/10 py-5 w-4/5 text-center origin-center active:scale-120 transition duration-100 ease-in-out`}
					>
						{navItem.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
