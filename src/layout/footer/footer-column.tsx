type Props = {
	title: string;
	links: string[];
};

export default function FooterColumn({ title, links }: Props) {
	return (
		<div>
			<h4 className="font-semibold mb-3">{title}</h4>

			<ul className="space-y-3">
				{links.map((item) => (
					<li key={item}>
						<a
							href="#"
							className="text-(--description-text) hover:text-black transition"
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
