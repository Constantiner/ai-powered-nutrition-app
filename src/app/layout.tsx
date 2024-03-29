import { AppFooter } from "@/components/layout/appFooter";
import { AppHeader } from "@/components/layout/appHeader";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nutrition App",
	description: "🍅 Find Nutrition Facts for any recipe"
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<html className="h-full w-full" lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={`font-sans ${inter.className} flex h-full w-full flex-col bg-gray-100`}>
				<AppHeader />
				<main className="h-full w-full overflow-y-auto">{children}</main>
				<AppFooter />
			</body>
		</html>
	);
}
