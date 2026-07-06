import { JSX } from "react/jsx-runtime";

export default function TitleAndDescription({
	title,
	description,
}: {
	title: JSX.Element;
	description: string;
}) {
	return (
		<div className="flex flex-col justify-center items-center gap-2 desktop:gap-8 mb-15">
			{title}
			<p className="text-4 text-center desktop:text-left tablet:text-[20px] desktop:text-[25.5px] text-(--description-text)">
				{description}
			</p>
		</div>
	);
}
