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
						<th className="w-10 font-medium">#</th>
						<th className="font-medium">Name</th>
						<th className="font-medium">Price</th>
						<th className="font-medium">24h%</th>
						<th className="font-medium">Market Cap</th>
						<th className="font-medium">Volume (24h)</th>
					</tr>
				</thead>
				<tbody>
					{currencies.map((currency: CurrencyType) => (
						<CurrencySingleRow singleCurrency={currency} key={currency.title} />
					))}
				</tbody>
			</table>
		</div>
	);
}
