import { baseUrl } from "src/helpers";
import ReCAPTCHA from "react-google-recaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "src/axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const schema = z.object({
	firstName: z.string().min(5, { message: "FirstName must have at least 4 characters" }),
	lastName: z.string().min(8, { message: "Lastname must have at least 4 characters" }),
	company: z.string().min(8, { message: "Company name must have at least 8 characters" }),
	phonenumber: z.string().min(7, { message: "phonenumber must have at least 8 characters" }),
	phoneFix: z.string().min(7, { message: "Must have at least 8 characters" }),
	email: z.string().email(),
	purpose: z.string(),
	message: z.string().min(8, { message: "Message must have at least 8 characters" }),
});

const ContactForm1 = ({ data }) => {
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
		console.log("here");
		// console.log(privacyPolicyRef.current.checked,"asdasdasd")
		if (!privacyPolicyRef.current.checked) return alert("Please agree to the privacy policy and terms");
		if (!recapval) return alert("Please confirm you are not a bot :)");
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
					phoneFix:formData.phoneFix,
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

	return (
		<div className="bg-gray-800 text-white py-10 px-5 sm:px-10">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold mb-5">{data.Heading}</h2>
				<p className="mb-8">{data.SubHeading}</p>
				<div>
					<label className="block mb-2" htmlFor="help-topic">
						{data.FormFields.Purpose}
					</label>
					<select {...register("purpose")} id="help-topic" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl">
						{data.Purpose.map((p, index) => {
							return <option value={p.text}>{p.text}</option>;
						})}
					</select>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					<div>
						<label className="block mb-2" htmlFor="company">
						{data.FormFields.Company}
						</label>
						<input {...register("company")} type="text" id="company" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl" />
						{errors.company && <p className="text-red-500 text-xs italic mt-2">{errors.company.message}</p>}
					</div>

					<div>
						<label className="block mb-2" htmlFor="firstname">
						{data.FormFields.FirstName}
						</label>
						<input {...register("firstName")} type="text" id="firstname" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl" />
						{errors.firstName && <p className="text-red-500 text-xs italic mt-2">{errors.firstName.message}</p>}
					</div>

					<div>
						<label className="block mb-2" htmlFor="lastname">
						{data.FormFields.LastName}
						</label>
						<input {...register("lastName")} type="text" id="lastname" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl" />
						{errors.lastName && <p className="text-red-500 text-xs italic mt-2">{errors.lastName.message}</p>}
					</div>

					<div>
						<label className="block mb-2" htmlFor="email">
						{data.FormFields.Email}
						</label>
						<input {...register("email")} type="email" id="email" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl" />
						{errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email.message}</p>}
					</div>

					<div>
						<label className="block mb-2" htmlFor="phone">
						{data.FormFields.Phone}
						</label>
						<input {...register("phonenumber")} type="tel" id="phone" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl" />
						{errors.phonenumber && <p className="text-red-500 text-xs italic mt-2">{errors.phonenumber.message}</p>}
					</div>
					<div>
						<label className="block mb-2" htmlFor="phone">
						{data.FormFields.PhoneFix}
						</label>
						<input {...register("phoneFix")} type="tel" id="phone" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl" />
						{errors.phoneFix && <p className="text-red-500 text-xs italic mt-2">{errors.phoneFix.message}</p>}
					</div>
				</div>
				<div>
					<label className="block mb-2" htmlFor="message">
					{data.FormFields.Message}
					</label>
					<textarea {...register("message")} id="message" rows="5" className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"></textarea>
					{errors.message && <p className="text-red-500 text-xs italic mt-2">{errors.message.message}</p>}
				</div>
				<div className="space-y-2">
					<div className="flex items-center">
						<input type="checkbox" id="marketing-consent" className="mr-2" />
						<label dangerouslySetInnerHTML={{ __html: data.Declaration.replaceAll("\n", "<br/>") }} htmlFor="marketing-consent"></label>
					</div>
					<div className="flex items-center">
						<input ref={privacyPolicyRef} type="checkbox" id="privacy-policy" className="mr-2" />
						<label dangerouslySetInnerHTML={{ __html: data.PrivacyPolicy.replaceAll("\n", "<br/>") }}  htmlFor="privacy-policy"></label>
					</div>
				</div>
				<ReCAPTCHA sitekey="6LcSr4sqAAAAAP3JhRexDSfNpKya99zSgfjhlD8H" onChange={onChange} />,
				<button type="submit" className="bg-orange-500 text-white font-bold py-3 px-6 rounded hover:bg-orange-600">
					Submit
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
	);
};

export default ContactForm1;
