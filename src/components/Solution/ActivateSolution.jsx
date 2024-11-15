import { FaRegCheckCircle } from "react-icons/fa";

function ActivateSolution() {
	return (
		<>
			<section className="flex justify-center my-16">
				<div className="flex flex-col p-4 mt-14 gap-2 mx-4">
					<small className="flex items-center h-[200px] text-base justify-end ">Monthly fee:</small>
					<div className="flex flex-col items-end gap-7 mt-4">
						<small className="text-base">Fixed-line direction:</small>
						<small className="text-base">Mobile direction:</small>
						<small className="text-base">Additional channel:</small>
						<small className="text-base">Number of channels:</small>
						<small className="text-base">Auto geo replacement:</small>
						<small className="text-base">Call management features:</small>
						<small className="text-base">Real second billing:</small>
					</div>
				</div>
				<section className="flex flex-col items-center gap-8">
					<div className="flex items-center">
						<button className="border p-2 px-4 bg-blue-200">Billed monthly</button>
						<button className="border p-2 px-4">Billed anually</button>
					</div>
					<section className="flex gap-2">
						<div className="w-[250px] bg-gray-100">
							<div className="flex flex-col p-4 h-[200px]">
								<h5 className="text-2xl font-bold border-b py-4">Basics</h5>
								<span className="text-xl font-bold my-2">$1,49</span>
								<button className="border p-2 px-4 rounded bg-blue-300 w-max my-2">Buy Now</button>
							</div>
							<div className="flex flex-col gap-6 text-xl font-semibold p-4">
								<span>$0,02/minute</span>
								<span>$0,09/minute</span>
								<span>$0,49</span>
								<span>1</span>
								<span>$1,00</span>
								<span>$0,49</span>
								<span>
									<FaRegCheckCircle />
								</span>
							</div>
						</div>
						<div className="w-[250px] bg-gray-100">
							<div className="flex flex-col p-4 h-[200px]">
								<h5 className="text-2xl font-bold border-b py-4">Megachannel</h5>
								<span className="text-xl font-bold my-2">$9,99</span>
								<button className="border p-2 px-4 rounded bg-blue-300 w-max my-2">Buy Now</button>
							</div>
							<div className="flex flex-col gap-6 text-xl font-semibold p-4">
								<span>$0,02/minute</span>
								<span>$0,09/minute</span>
								<span>$0,49</span>
								<span>1</span>
								<span>$1,00</span>
								<span>$0,49</span>
								<span>
									<FaRegCheckCircle />
								</span>
							</div>
						</div>
					</section>
				</section>
			</section>
			<section className="flex flex-col items-center my-16">
				<h6 className="text-3xl font-bold">Activate the solution</h6>
				<span>Follow the instructions to activate the solution.</span>
				<form action="" className="flex flex-col w-[360px] my-8 gap-4">
					<input type="text" placeholder="Your name" className="border p-2 rounded" />
					<input type="text" placeholder="Your email" className="border p-2 rounded" />
					<input type="text" placeholder="Your phone number" className="border p-2 rounded" />
					<button className="bg-blue-200 p-2">Send</button>
				</form>
			</section>
		</>
	);
}
export default ActivateSolution