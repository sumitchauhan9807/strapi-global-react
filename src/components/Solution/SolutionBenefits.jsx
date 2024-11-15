function SolutionBenefits({ data }) {
	return (
		<section className="flex flex-col max-w-[1200px] items-center mx-auto gap-8">
			{data.length && <h4 className="text-xl font-bold my-16">Important benefits</h4> }
			<div className="flex gap-8">
				{data.map((benefit) => {
					return (
						<div key={benefit.id} className="flex flex-col items-center gap-4 text-center">
							<span className="w-12 h-12 border"></span>
							<h5 className="font-bold">{benefit.Heading}</h5>
							<span>{benefit.SubHeading}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default SolutionBenefits;
