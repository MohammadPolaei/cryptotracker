import CustomInput from "@/components/base/custom-input";
import CustomTextArea from "./custom-text-area";

export default function ContactForm() {
	return (
		<div className="w-full desktop:w-148.25 h-127.75 rounded-md border-2 border-(--border-color) flex flex-col justify-between items-center p-2">
			<div className="flex justify-between items-center gap-5 w-full">
				<div className="flex flex-col w-full gap-1">
					<label className="text-4 font-normal">First name</label>
					<CustomInput type="text" placeholder="John" />
				</div>
				<div className="flex flex-col w-full gap-1">
					<label className="text-4 font-normal">Last name</label>
					<CustomInput type="text" placeholder="Doe" />
				</div>
			</div>
			<div className="flex flex-col w-full gap-1">
				<label className="text-4 font-normal">Email</label>
				<CustomInput type="email" placeholder="John.doe@example.com" />
			</div>
			<div className="flex flex-col w-full gap-1">
				<label className="text-4 font-normal">Subject</label>
				<CustomInput type="text" placeholder="How can we help you?" />
			</div>
			<CustomTextArea />
			<button className="w-full bg-(--green-color)/80 text-white rounded-sm disabled:opacity-50 cursor-pointer py-2">
				Send Message
			</button>
		</div>
	);
}
