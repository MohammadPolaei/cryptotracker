import CustomInput from "@/components/base/custom-input";

export default function ContactForm() {
	return (
		<div className="w-148.25 h-127.75 rounded-md border border-black/4 shadow-sm shadow-black/4 flex flex-col justify-between items-center p-2">
			<div className="flex justify-between items-center gap-5 w-full">
				<div className="flex flex-col w-full gap-1">
					<label className="text-4 font-semibold">First name</label>
					<CustomInput type="text" placeholder="John" />
				</div>
				<div className="flex flex-col w-full gap-1">
					<label className="text-4 font-semibold">Last name</label>
					<CustomInput type="text" placeholder="Doe" />
				</div>
			</div>
			<div className="flex flex-col w-full gap-1">
				<label className="text-4 font-semibold">Email</label>
				<CustomInput type="email" placeholder="John.doe@example.com" />
			</div>
			<div className="flex flex-col w-full gap-1">
				<label className="text-4 font-semibold">Subject</label>
				<CustomInput type="text" placeholder="How can we help you?" />
			</div>
			<div className="flex flex-col w-full gap-1">
				<label className="text-4 font-semibold">Message</label>
				<textarea
					className="bg-white p-2 h-40 resize-none outline-white/0 focus:outline-(--green-color) rounded-md transition-all ease-in-out duration-500"
					placeholder="Your massage here ..."
				/>
			</div>
			<button className="w-full bg-(--green-color) text-white rounded-md disabled:opacity-70 cursor-pointer py-2">
				Send Message
			</button>
		</div>
	);
}
