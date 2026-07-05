import { CurrencyType } from "@/types/currencies";
import CurrencySingleRow from "./currency-single-row";

export default function ListContainer({
	currencies,
}: {
	currencies: CurrencyType[];
}) {
	return (
		<div className="w-full border border-black/5 shadow-sm shadow-black/5 rounded-md">
			<table className="w-full">
				<thead className="h-20 text-(--description-text)">
					<tr>
						<th className="w-5 font-medium px-5">#</th>
						<th className="font-medium text-left px-5">Name</th>
						<th className="font-medium text-left w-15 px-5">Price</th>
						<th className="font-medium text-right px-5">24h%</th>
						<th className="font-medium text-right px-5">Market Cap</th>
						<th className="font-medium text-right px-5">Volume (24h)</th>
					</tr>
				</thead>
				<tbody>
					{currencies.map((currency: CurrencyType, index) => (
						<CurrencySingleRow
							index={index + 1}
							singleCurrency={currency}
							key={currency.title}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}
