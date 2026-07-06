"use client";
import { useTheme } from "@/hooks/use-theme";
import { forwardRef, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, Props>((attributes, ref) => {
	const { dark } = useTheme();
	return (
		<input
			{...attributes}
			ref={ref}
			className={`${
				dark
					? " border border-(--border-color)/70 outline-2 outline-white/0 focus:outline-(--green-color)/70"
					: "bg-white border border-(--border-color)/0 outline-2 outline-white/0 focus:outline-(--green-color)/70"
			}  w-full h-9.25 rounded-sm px-2 transition-all ease-in-out duration-700 placeholder:text-(--text-color)`}
		/>
	);
});

export default CustomInput;
