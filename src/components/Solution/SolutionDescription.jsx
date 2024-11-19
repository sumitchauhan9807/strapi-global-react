function SolutionDescription({data}) {
	return (
		<section className="grid grid-cols-2 my-16">
			<figure></figure>
			<div className="flex flex-col">
				<small>SOLUTION</small>
				<span className="text-3xl font-semibold my-4">{data.Heading}</span>
				<p className="text-base font-light">{data.SubHeading}</p>
				{/* <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">BUY NOW</button> */}
			</div>
		</section>
	);
}
export default SolutionDescription;
