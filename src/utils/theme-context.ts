"use client";
import { createContext } from "react";

type ThemeContextType = {
	dark: boolean;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
