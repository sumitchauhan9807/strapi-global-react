import { baseUrl } from 'src/helpers'

function SolutionCTA({data}) {
	return (
		<section className="grid grid-cols-2 gap-8 my-16 max-w-[1280px] mx-auto bg-[#fafafa] p-8">
			<img src={baseUrl() + data.Image.url} style={{minWidth:"400px"}}/>
			<div className="flex flex-col">
				<h3 className="text-3xl font-semibold my-4">{data.Heading}</h3>
				<p className="text-base font-light my-4">{data.Description}</p>
			</div>
		</section>
	);
}
export default SolutionCTA;
