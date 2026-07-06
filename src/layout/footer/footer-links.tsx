import FooterColumn from "./footer-column";

const columns = [
	{
		title: "Products",
		links: ["Pricing", "API", "Portfolio", "Alerts"],
	},
	{
		title: "Resources",
		links: ["Blog", "Documentation", "Guides", "Help Center"],
	},
	{
		title: "Company",
		links: ["About", "Careers", "Press", "Partners"],
	},
	{
		title: "Legal",
		links: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
	},
];

export default function FooterLinks() {
	return (
		<div
			id="footer"
			className="grid grid-cols-2 desktop:grid-cols-4 gap-2 desktop:gap-16"
		>
			{columns.map((column) => (
				<FooterColumn
					key={column.title}
					title={column.title}
					links={column.links}
				/>
			))}
		</div>
	);
}
