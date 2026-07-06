"use client";

import { ThemeContext } from "@/utils/theme-context";
import { useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [dark, setDark] = useState(false);

	const toggleTheme = () => {
		setDark((prev) => !prev);
		document.body.classList.toggle("dark");
	};

	return (
		<ThemeContext.Provider value={{ dark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
