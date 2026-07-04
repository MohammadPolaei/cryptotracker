import Link from "next/link";

const navBarList = [
	{ title: "Tokens", href: "/" },
	{ title: "Features", href: "/" },
	{ title: "FAQ", href: "/" },
	{ title: "Contact", href: "/" },
];

export default function Header() {
	return (
		<div className="w-full flex justify-between items-center">
			<div>LOGO</div>
			<nav className="flex justify-between items-center w-[273.68px] h-5">
				{navBarList.map((navItem) => (
					<Link href={navItem.href} key={navItem.title}>
						{navItem.title}
					</Link>
				))}
			</nav>
			<div>THEME BUTTON</div>
		</div>
	);
}
