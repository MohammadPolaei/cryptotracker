import arrowIcon from "@/assets/faq/pointer.svg";

export default function FaqSummary({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) {
	return (
		<details>
			<summary className="shadow-[8px] shadow-black/5">
				<span className="font-medium text-[14px] tablet:text-[19px]">
					{question}
				</span>

				<img src={arrowIcon.src} alt="" className="arrow" />
			</summary>

			<div className="content">
				<p>{answer}</p>
			</div>
		</details>
	);
}
