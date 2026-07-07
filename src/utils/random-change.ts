export const randomChange = (value: number, percent = 0.3) => {
	const direction = Math.random() > 0.5 ? 1 : -1;
	const amount = (value * (Math.random() * percent)) / 100;

	return Number((value + direction * amount).toFixed(2));
};
