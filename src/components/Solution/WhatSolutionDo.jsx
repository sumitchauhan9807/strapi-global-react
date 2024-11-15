function WhatSolutionDo({ data }) {
	if(!data.Heading) return 
	return (
		<section className="flex flex-col max-w-[1280px] mx-auto">
			<h4 className="flex font-bold text-2xl mx-auto my-8">{data.Heading}</h4>
			<section className="grid grid-cols-2 gap-8">
				{data.SolutionDos.map((solu) => {
					return (
						<div key={solu.id} className="flex flex-col p-16 bg-[#fafafa]">
							<span className="text-xl font-bold my-4">{solu.Heading}</span>
							<p>{solu.SubHeading}</p>
							<button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">READ MORE</button>
						</div>
					);
				})}
			</section>
		</section>
	);
}

export default WhatSolutionDo;
