import arrowIcon from "@/assets/faq/pointer.svg";

export default function FaqSummary({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) {
	return (
		<details className="faq">
			<summary>
				<span>{question}</span>

				<img src={arrowIcon.src} alt="" className="arrow" />
			</summary>

			<div className="content">
				<p>{answer}</p>
			</div>
		</details>
	);
}
