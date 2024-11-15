import { FaRegLightbulb } from "react-icons/fa";

function SolutionTip({data}) {
	return (
		<section className="flex justify-center max-w-[1200px] mx-auto gap-4 my-16">
			<figure>
				<FaRegLightbulb size={56} color="blue" />
			</figure>
			<p>{data}</p>
		</section>
	);
}
export default SolutionTip;
