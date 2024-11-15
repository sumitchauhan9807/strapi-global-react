function HowSolutionWorks({ data }) {
	return (
		<section className="mt-12 mb-12 flex flex-col items-center max-w-[1200px] mx-auto justify-center">
			<h4 className="text-2xl font-bold my-8">How does it work with a Robot that returns calls?</h4>
			<div className="grid  gap-8">
				<div className="flex flex-col gap-4">
					{data.map((item) => {
						return (
							<div key={item.id} className="flex relative bg-gray-100 w-[300px] justify-center p-8">
								<span className="flex h-8 w-8 justify-center items-center bg-green-500 p-2 rounded-full absolute left-[-20px] top-[20px]">1</span>
								<span>{item.text}</span>
							</div>
						);
					})}
				</div>
				{/* <figure className="border"></figure> */}
			</div>
		</section>
	);
}

export default HowSolutionWorks;
