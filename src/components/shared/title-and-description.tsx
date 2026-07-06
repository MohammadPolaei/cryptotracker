import { JSX } from "react/jsx-runtime";

export default function TitleAndDescription({
	title,
	description,
}: {
	title: JSX.Element;
	description: string;
}) {
	return (
		<div className="flex flex-col justify-center items-center gap-3 tablet:gap-7 mb-15">
			{title}
			<p className="text-4 text-center tablet:text-left tablet:text-[25.5px] text-(--description-text)">
				{description}
			</p>
		</div>
	);
}
