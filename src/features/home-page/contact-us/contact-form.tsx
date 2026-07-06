"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Spinner from "@/assets/spinner";
import CustomInput from "@/components/base/custom-input";
import { ContactFormData, contactSchema } from "@/utils/contact-schema";
import CustomTextArea from "./custom-text-area";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		mode: "onChange",
	});

	const onSubmit = (data: ContactFormData) => {
		alert("Result in console");
		console.log("FORM DATA:", data);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full desktop:w-148.25 h-127.75 rounded-md border-2 border-(--border-color) flex flex-col justify-between items-center p-3"
		>
			<div className="flex justify-between items-center gap-5 w-full">
				<div className="flex flex-col w-full gap-1 relative">
					<label>First name</label>
					<CustomInput {...register("firstName")} placeholder="John" />
					{errors.firstName && (
						<p className="text-red-500 text-xs absolute right-2 bottom-[-15] tablet:bottom-full tablet:top-0">
							{errors.firstName.message}
						</p>
					)}
				</div>

				<div className="flex flex-col w-full gap-1 relative">
					<label>Last name</label>
					<CustomInput {...register("lastName")} placeholder="Doe" />
					{errors.lastName && (
						<p className="text-red-500 text-xs absolute right-2 bottom-[-15] tablet:bottom-full tablet:top-0">
							{errors.lastName.message}
						</p>
					)}
				</div>
			</div>

			<div className="flex flex-col w-full gap-1 relative">
				<label>Email</label>
				<CustomInput
					type="email"
					{...register("email")}
					placeholder="John.doe@example.com"
				/>
				{errors.email && (
					<p className="text-red-500 text-xs absolute right-2 top-0">
						{errors.email.message}
					</p>
				)}
			</div>

			<div className="flex flex-col w-full gap-1 relative">
				<label>Subject</label>
				<CustomInput
					type="text"
					{...register("subject")}
					placeholder="How can we help you?"
				/>
				{errors.subject && (
					<p className="text-red-500 text-xs absolute right-2 top-0">
						{errors.subject.message}
					</p>
				)}
			</div>

			<div className="flex flex-col w-full gap-1 relative">
				<CustomTextArea {...register("message")} />
				{errors.message && (
					<p className="text-red-500 text-xs absolute right-2 top-0">
						{errors.message.message}
					</p>
				)}
			</div>

			<button
				type="submit"
				disabled={!isValid || isSubmitting}
				className="w-full bg-(--green-color)/80 text-white rounded-sm disabled:opacity-50 cursor-pointer py-2"
			>
				{isSubmitting ? (
					<>
						<Spinner /> Sending...
					</>
				) : (
					"Send Message"
				)}
			</button>
		</form>
	);
}
