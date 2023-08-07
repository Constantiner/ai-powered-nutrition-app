import Image from "next/image";
import { FunctionComponent } from "react";
import appLogo from "./app-logo.svg";

export const AppHeader: FunctionComponent<Record<string, never>> = () => {
	return (
		<header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
			<div className="container mx-auto px-4 flex justify-between items-center py-4">
				<div className="flex items-center">
					<h1 className="text-2xl font-bold text-white">Nutrition App</h1>
				</div>
				<div className="flex items-center">
					<Image src={appLogo} alt="Logo" className="h-12 w-12 filter invert brightness-150" />
				</div>
			</div>
		</header>
	);
};
