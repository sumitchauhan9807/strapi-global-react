import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";

const Features = ({ data }) => {
	return (
		<div className="p-6 md:p-10 bg-gray-50 min-h-screen">
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
				{data.Heading}
			</h1>
			<p className="text-center text-gray-600 text-base md:text-lg mb-8 max-w-3xl mx-auto">
				{data.SubHeading}
			</p>
			<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
				{data.Lists.map((contact, index) => (
					<Animate
						key={index}
						config={{
							animateIn: "fadeIn",
							delay: index * 0.1,
						}}
					>
						<div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 flex items-center -mt-5">
							<div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full mr-4">
								<img
									className="w-6 h-6 object-contain"
									src={baseUrl() + contact.Image.url}
									alt={contact.Heading}
								/>
							</div>
							<div>
								<h3 className="text-base font-semibold text-gray-800 mb-1">
									{contact.Heading}
								</h3>
								<p className="text-gray-600 text-sm mb-1">{contact.Number}</p>
								<a
									href={`tel:${contact.Number}`}
									className="text-orange-500 font-medium text-sm hover:underline"
								>
									{contact.ActionText || "Call"}
								</a>
							</div>
						</div>
					</Animate>
				))}
			</div>
		</div>
	);
};

export default Features;
