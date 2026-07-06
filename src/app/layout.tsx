import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Crypto Tracker",
	description: "Track your crypto assets !",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col justify-start items-center bg-(--bg-color)">
				<Header />
				<main className="w-full">
					<div className="mx-auto max-w-7xl px-3 tablet:p-8 desktop:p-15">
						{children}
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
