import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactUs() {
	return (
		<div className="w-full flex flex-col gap-10 tablet:gap-0 tablet:flex-row justify-between items-center">
			<ContactInfo />
			<ContactForm />
		</div>
	);
}
