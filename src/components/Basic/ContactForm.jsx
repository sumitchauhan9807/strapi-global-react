import { baseUrl } from "src/helpers";
import ReCAPTCHA from "react-google-recaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "src/axios";
import { useRef, useState } from "react";

const schema = z.object({
	firstName: z.string().min(5, { message: "FirstName must have at least 4 characters" }),
	lastName: z.string().min(8, { message: "Lastname must have at least 4 characters" }),
	company: z.string().min(8, { message: "Company name must have at least 8 characters" }),
	phonenumber: z.string().min(7, { message: "phonenumber must have at least 8 characters" }),
	email: z.string().email(),
	purpose: z.string(),
	message: z.string().min(8, { message: "Message must have at least 8 characters" }),
});

function ContactForm({ data }) {
	const [recapval, setRecapval] = useState("");
	const [formSubmitted, isFormSubmitted] = useState(false);
	const privacyPolicyRef = useRef(false);
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	});
	const onChange = (data) => {
		console.log(data);
		setRecapval(data);
	};
	const onSubmit = async (formData) => {
		// console.log(privacyPolicyRef.current.checked,"asdasdasd")
		if(!privacyPolicyRef.current.checked) return alert("Please agree to the privacy policy and terms")
		if(!recapval) return alert("Please confirm you are not a bot :)")
		try {
			console.log(formData);
			isFormSubmitted(false);
			const { data } = await axios({
				url: "custom/mail",
				method: "post",
				data: {
					firstName: formData.firstName,
					lastName: formData.lastName,
					email: formData.email,
					purpose: formData.purpose,
					message: formData.message,
					phonenumber: formData.phonenumber,
					company: formData.company,
					recaptcha: recapval,
				},
			});
			reset();
			isFormSubmitted(true);
		} catch (e) {
			setError("root", {
				message: e.response.data.error,
			});
			// alert("tehre i serrr")
			console.log(e.response.data.error);
		}
	};
	// console.log(errors);
	return (
		<>
			<section className="mb-32">
				<div style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')" }} className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"></div>
				<div className=" px-6 md:px-12">
					<div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
						<div className="flex flex-wrap">
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<input {...register("company")} className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
										{errors.company && <p className="text-red-500 text-xs italic mt-2">{errors.company.message}</p>}

										<label htmlFor="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
											Company
										</label>
									</div>
									<div className="grid gap-4 grid-cols-1 lg:grid-cols-2  justify-between ">
										<div className="relative mb-6" data-te-input-wrapper-init>
											<input {...register("firstName")} type="text" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput90" />
											{errors.firstName && <p className="text-red-500 text-xs italic mt-2">{errors.firstName.message}</p>}
											<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput90">
												First Name
											</label>
										</div>
										<div className="relative mb-6" data-te-input-wrapper-init>
											<input {...register("lastName")} type="text" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput90" />
											{errors.lastName && <p className="text-red-500 text-xs italic mt-2">{errors.lastName.message}</p>}
											<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput90">
												Last Name
											</label>
										</div>
									</div>
									<div className="grid gap-4 grid-cols-1 lg:grid-cols-2  justify-between ">
										<div className="relative mb-6" data-te-input-wrapper-init>
											<input {...register("email")} type="email" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput91" />
											{errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email.message}</p>}

											<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput91">
												Email address
											</label>
										</div>
										<div className="relative mb-6" data-te-input-wrapper-init>
											<input {...register("phonenumber")} type="text" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleInput90" />
											{errors.phonenumber && <p className="text-red-500 text-xs italic mt-2">{errors.phonenumber.message}</p>}
											<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput90">
												Phonenumber
											</label>
										</div>
									</div>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<select {...register("purpose")} id="countries" class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none ">
											{data.Purpose.map((p, index) => {
												return <option value={p.text}>{p.text}</option>;
											})}
											{/* <option selected>Choose a country</option>
											<option value="CA">Canada</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option> */}
										</select>

										<label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none " htmlFor="exampleInput91">
											Purpose
										</label>
									</div>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<textarea {...register("message")} className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none " id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
										{errors.message && <p className="text-red-500 text-xs italic mt-2">{errors.message.message}</p>}

										<label htmlFor="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
											Message
										</label>
									</div>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<div className="flex items-center">
											<input id="link-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
											<label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
											Yes, I would like to be contacted and advised by ecotel (by phone/email) or by an ecotel sales partner personally about the selected product, promotions and other marketing and sales purposes. Please note that this declaration of consent is voluntary and can be revoked at any time. *
											</label>
										</div>
									</div>
									<div className="relative mb-6" data-te-input-wrapper-init>
										<div className="flex items-center">
											<input ref={privacyPolicyRef}  type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
											<label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
												Yes, I have read the
												<a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
													&nbsp; privacy policy
												</a>{" "}
												. I am aware that my data will be processed for the intended purpose. *
											</label>
										</div>
									</div>
									<ReCAPTCHA sitekey="6LcSr4sqAAAAAP3JhRexDSfNpKya99zSgfjhlD8H" onChange={onChange} />,
									<button type="submit" className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
										Send
									</button>
									{errors.root && (
										<center>
											<div className="text-red-500 mt-4">{errors.root.message}</div>
										</center>
									)}
									{formSubmitted && (
										<center>
											<div className="text-green-500 mt-4">Thanks !! We will try to get back soon :</div>
										</center>
									)}
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
