import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";

const Features = ({ data }) => {
	return (
		<div className="p-6 md:p-10 bg-gray-50 min-h-screen">
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-6">{data.Heading}</h1>
			<p className="text-center text-gray-600 text-base md:text-lg mb-8">{data.SubHeading}</p>
			<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
				{data.Lists.map((contact, index) => (
					<Animate
						config={{
							animateIn: "bounceInUp",
							delay: index / 10,
						}}
					>
						<div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform flex items-center">
							<div className="mr-4">
								<img style={{ height: "100px" }} src={baseUrl() + contact.Image.url} />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">{contact.Heading}</h3>

								<p className="text-gray-600 mb-4">{contact.Number}</p>

								<button className="text-orange-500 font-medium text-sm hover:underline">Call</button>
							</div>
						</div>
					</Animate>
				))}
			</div>
		</div>
	);
};

export default Features;
