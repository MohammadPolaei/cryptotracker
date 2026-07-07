import acsIcon from "@/assets/acsIcon.svg";
import decIcon from "@/assets/decIcon.svg";
import { CurrencyType } from "@/types/currencies";

export default function CurrencySingleRow({
	singleCurrency,
	index,
}: {
	singleCurrency: CurrencyType;
	index: number;
}) {
	return (
		<tr className="text-center h-15">
			<td>{index}</td>
			<td className="flex justify-start items-center gap-1 pr-5">
				<img src={singleCurrency.icon} />
				<div className="flex flex-col justify-start items-start">
					<span className="font-semibold">{singleCurrency.title}</span>
					<span className="text-(--description-text)">
						{singleCurrency.symbol}
					</span>
				</div>
			</td>
			<td className="font-semibold text-left">{`$${singleCurrency.price.toLocaleString()}`}</td>
			<td
				className={`${
					singleCurrency.changeStat == "acs"
						? "text-(--green-color)"
						: "text-(--red-color)"
				} px-5`}
			>
				<div className="flex items-center justify-end gap-1">
					<img
						src={`${
							singleCurrency.changeStat == "acs" ? acsIcon.src : decIcon.src
						}`}
					/>{" "}
					{`${singleCurrency.change
						.toFixed(2)
						.toLocaleString()
						.replace("-", "")}%`}
				</div>
			</td>
			<td className="font-semibold text-right px-5">{`$${singleCurrency.marketCap.toLocaleString()}`}</td>
			<td className="font-semibold text-right px-5">{`$${singleCurrency.volume.toLocaleString()}`}</td>
		</tr>
	);
}
