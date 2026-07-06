import { ThemeContext } from "@/utils/theme-context";
import { useContext } from "react";

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used inside ThemeProvider");
	}

	return context;
};
