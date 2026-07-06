"use client";
import { useTheme } from "@/hooks/use-theme";

export default function CustomInput(
	attributes: React.InputHTMLAttributes<HTMLInputElement>
) {
	const { dark } = useTheme();
	return (
		<input
			{...attributes}
			className={`${
				dark
					? " border border-(--border-color) outline-2 outline-white/0 focus:outline-(--green-color)/70"
					: "bg-white border border-(--border-color)/0 outline-2 outline-white/0 focus:outline-(--green-color)/70"
			}  w-full h-9.25 rounded-sm px-2 transition-all ease-in-out duration-700 placeholder:text-(--text-color)`}
		/>
	);
}
