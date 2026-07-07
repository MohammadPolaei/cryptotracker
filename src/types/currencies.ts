export type CurrencyType = {
	icon: string;
	title: string;
	symbol: string;
	price: number;
	change: number;
	marketCap: number;
	volume: number;
	changeStat: "acs" | "dec";
};
