import { baseUrl } from "src/helpers";
import ReCAPTCHA from "react-google-recaptcha";
function ContactForm({ data }) {
	console.log(data, "datadatadata");
	const onChange = (data) => {
		console.log(data)
	}
	return (
		<>
			<section className="mb-32">
				<div style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')" }} className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"></div>
				<div className=" px-6 md:px-12">
					<div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
						<div className="flex flex-wrap">
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
								<form>
									<div className="grid gap-4 grid-cols-1 lg:grid-cols-2  justify-between ">
										<div className="relative mb-6" data-te-input-wrapper-init>
											<input type="text" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput90" />
											<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput90">
												First Name
											</label>
										</div>
										<div className="relative mb-6" data-te-input-wrapper-init>
											<input type="text" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput90" />
											<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput90">
												Last Name
											</label>
										</div>
									</div>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<input type="email" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput91" />
										<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput91">
											Email address
										</label>
									</div>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<input type="email" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput91" />
										<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput91">
											Email address
										</label>
									</div>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<textarea className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
										<label htmlFor="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
											Message
										</label>
									</div>
									<ReCAPTCHA sitekey="6LcSr4sqAAAAAP3JhRexDSfNpKya99zSgfjhlD8H" onChange={onChange} />,
									<button type="button" className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
										Send
									</button>
								</form>
							</div>
							<div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
								<div className="flex flex-wrap">
									{data.info.map((item, index) => {
										return (
											<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
												<div className="flex items-start">
													<div className="shrink-0">
														<div className="inline-block rounded-md bg-sky-200 text-primary">
															<img style={{ height: "70px" }} src={baseUrl() + item.icon.url} />
														</div>
													</div>
													<div className="ml-6 grow">
														<p className="mb-2 font-bold ">{item.title}</p>
														<p className="text-sm text-neutral-500" dangerouslySetInnerHTML={{ __html: item.description.replaceAll("\n", "<br/>") }}></p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default ContactForm;
