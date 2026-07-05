import { JSX } from "react/jsx-runtime";

export default function TitleAndDescription({
	title,
	description,
}: {
	title: JSX.Element;
	description: string;
}) {
	return (
		<div className="flex flex-col justify-center items-center gap-7 mb-15">
			<h2 className="font-bold text-[56.4px] h-12">{title}</h2>
			<p className="text-[25.5px] text-(--description-text)">{description} </p>
		</div>
	);
}
