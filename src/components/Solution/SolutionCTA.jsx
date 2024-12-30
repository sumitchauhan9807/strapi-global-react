import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";

function SolutionCTA({ data }) {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-10 grid-cols-1 lg:grid-cols-2 items-center">
				<Animate
					config={{
						animateIn: "bounceInLeft",
					}}
				>
					<img src={baseUrl() + data.Image.url} style={{minWidth:"400px"}} />
				</Animate>
				<Animate
					config={{
						animateIn: "bounceInRight",
					}}
				>
					<h3 className="text-3xl font-semibold my-4">{data.Heading}</h3>
					<p className="text-base font-light my-4">{data.Description}</p>
				</Animate>
			</div>
		</div>
	);
	return (
		<section className="grid grid-cols-2 gap-8 my-16 max-w-[1280px] mx-auto bg-[#fafafa] p-8">
			<div className="flex flex-col"></div>
		</section>
	);
}
export default SolutionCTA;
