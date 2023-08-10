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
		<section className="pr-4 md:my-auto md:flex md:max-w-md md:shrink-0 md:grow md:flex-col  md:gap-1 md:border-r-2">
			<h1 className="py-8 text-right text-3xl font-bold md:shrink-0">
				🍅 Find Nutrition Facts
				<br />
				for any recipe
			</h1>
			<form
				className="flex w-full flex-col flex-wrap items-end pb-6 md:shrink-0"
				onSubmit={handleSubmit}
				ref={formReference}
			>
				<textarea
					className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
					name="recipe"
					disabled={pending}
					rows={5} // add this line to set the number of rows
				/>
				<div className="mb-3 flex w-full flex-row justify-end md:shrink-0">
					<button
						className={`mr-2 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 ${
							pending ? "cursor-not-allowed opacity-50" : ""
						}`}
						type="button"
						onClick={resetForm}
						disabled={pending}
					>
						Clear
					</button>
					<button
						className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${
							pending ? "cursor-not-allowed opacity-50" : ""
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
