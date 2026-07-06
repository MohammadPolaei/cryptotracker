import TitleAndDescription from "@/components/shared/title-and-description";
import FaqSummary from "./faq-summary";

const faqList = [
	{
		question: "How often are crypto prices updated?",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel rerum quaerat blanditiis reprehenderit maxime suscipit nam tenetur praesentium voluptatibus.",
	},
	{
		question: "Is it free to use this platform?",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel rerum quaerat blanditiis reprehenderit maxime suscipit nam tenetur praesentium voluptatibus.",
	},
	{
		question: "What cryptocurrencies are supported?",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel rerum quaerat blanditiis reprehenderit maxime suscipit nam tenetur praesentium voluptatibus.",
	},
	{
		question: "How do I create a watchlist?",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel rerum quaerat blanditiis reprehenderit maxime suscipit nam tenetur praesentium voluptatibus.",
	},
	{
		question: "Where does the price data come from?",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel rerum quaerat blanditiis reprehenderit maxime suscipit nam tenetur praesentium voluptatibus.",
	},
	{
		question: "Can I set price alerts?",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel rerum quaerat blanditiis reprehenderit maxime suscipit nam tenetur praesentium voluptatibus.",
	},
];

export default function Faq() {
	return (
		<div className="w-full flex flex-col justify-start items-center" id="faq">
			<TitleAndDescription
				title={
					<h2 className="font-bold text-[30px] tablet:text-[50px] desktop:h-10 text-center w-full leading-10">
						Frequently Asked
						<span className="text-(--green-color)"> Questions</span>
					</h2>
				}
				description="Find answers to common questions about our crypto tracking platform."
			/>
			<div className="w-full tablet:max-w-3xl flex flex-col justify-center items-start gap-1">
				{faqList.map((item, index) => (
					<FaqSummary
						key={index}
						question={item.question}
						answer={item.summary}
					/>
				))}
			</div>
		</div>
	);
}
