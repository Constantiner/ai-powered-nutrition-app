import Image from "next/image";
import { FunctionComponent } from "react";
import copilotLogo from "./github-copilot-logo.svg";
import openAiLogo from "./openai-logo.svg";

export const AppFooter: FunctionComponent<Record<string, never>> = () => {
	return (
		<footer className="bg-gray-800 py-4 text-gray-300">
			<div className="container mx-auto flex flex-col items-start justify-between px-4 md:flex-row md:items-center">
				<div>
					<p>
						Made with ❤️ by{" "}
						<a
							href="https://github.com/Constantiner"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:text-blue-200"
						>
							Constantiner
						</a>{" "}
						&amp;{" "}
						<a
							href="https://copilot.github.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:text-blue-200"
						>
							GitHub Copilot
						</a>
					</p>
					<p>
						Powered by{" "}
						<a
							href="https://openai.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:text-blue-200"
						>
							OpenAI
						</a>
					</p>
				</div>
				<div className="mt-5 flex gap-4 md:mt-0">
					<Image src={openAiLogo} alt="OpenAI" className="h-12 w-12 brightness-150 invert filter" />
					<Image src={copilotLogo} alt="GitHub Copilot" className="h-12 w-12 brightness-150 invert filter" />
				</div>
			</div>
		</footer>
	);
};
