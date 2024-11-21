import CountUp from "react-countup";

import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";

function CountUpSection({ data }) {
	console.log(data, "countttttttttt");
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
				{data.map((item,index) => {
					return (
						<Animate
							config={{
								animateIn: "bounceInUp",
								delay: index / 10,
							}}
						>
							<div className="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32">
								<div className="flex gap-2 items-center">
									<Counter value={item.value} duration={item.duration} />
									<img style={{ height: "30px" }} src={baseUrl() + item.icon.url} />
								</div>
								<span className="font-semibold opacity-70 text-sm text-center">{item.text}</span>
							</div>
						</Animate>
					);
				})}
			</div>
		</div>
	);
}

function Counter({ value , duration }) {
	return (
		<CountUp enableScrollSpy start={0} end={value} duration={duration} scrollSpyDelay={500} scrollSpyOnce={true}>
			{({ countUpRef }) => <span ref={countUpRef} className="font-bold text-4xl" />}
		</CountUp>
	);
}

export default CountUpSection;
