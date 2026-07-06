"use client";

import { useTheme } from "@/hooks/use-theme";

import { forwardRef, TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const CustomTextArea = forwardRef<HTMLTextAreaElement, Props>(
	(attributes, ref) => {
		const { dark } = useTheme();

		return (
			<div className="flex flex-col w-full gap-1">
				<label className="text-4 font-normal">Message</label>
				<textarea
					{...attributes}
					ref={ref}
					className={`${
						dark
							? "border border-(--border-color) outline-2 outline-white/0 focus:outline-(--green-color)/70"
							: "bg-white border border-(--border-color)/0 outline-2 outline-white/0 focus:outline-(--green-color)/70"
					}  p-2 h-40 resize-none rounded-md transition-all ease-in-out duration-700 placeholder:text-(----text-color)`}
					placeholder="Your massage here ..."
				/>
			</div>
		);
	}
);

export default CustomTextArea;
