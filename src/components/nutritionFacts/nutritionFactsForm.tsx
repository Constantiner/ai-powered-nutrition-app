import Image from "next/image";
import { FormEventHandler, forwardRef } from "react";
import progress from "./progress.svg";

interface NutritionFactsFormProperties {
	pending: boolean;
	handleSubmit: FormEventHandler<HTMLFormElement>;
	resetForm: VoidFunction;
	error: string | null;
}

export const NutritionFactsForm = forwardRef<HTMLFormElement, NutritionFactsFormProperties>(function NutritionFactsForm(
	{ pending, handleSubmit, resetForm, error },
	formReference
) {
	return (
		<section className="md:max-w-md md:border-r-2 pr-4 md:flex md:flex-col md:grow md:gap-1  md:shrink-0 md:my-auto">
			<h1 className="text-3xl font-bold text-right py-8 md:shrink-0">
				🍅 Find Nutrition Facts
				<br />
				for any recipe
			</h1>
			<form
				className="w-full flex flex-wrap pb-6 flex-col items-end md:shrink-0"
				onSubmit={handleSubmit}
				ref={formReference}
			>
				<textarea
					className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					name="recipe"
					disabled={pending}
					rows={5} // add this line to set the number of rows
				/>
				<div className="flex flex-row w-full mb-3 justify-end md:shrink-0">
					<button
						className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2 ${
							pending ? "opacity-50 cursor-not-allowed" : ""
						}`}
						type="button"
						onClick={resetForm}
						disabled={pending}
					>
						Clear
					</button>
					<button
						className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
							pending ? "opacity-50 cursor-not-allowed" : ""
						}`}
						type="submit"
						disabled={pending}
					>
						{pending ? (
							<Image src={progress} alt="Loading…" className="h-5 w-10 text-blue-500" />
						) : (
							"Submit"
						)}
					</button>
				</div>
				{error && <p className="text-red-500 md:shrink-0">{error}</p>}
			</form>
		</section>
	);
});
