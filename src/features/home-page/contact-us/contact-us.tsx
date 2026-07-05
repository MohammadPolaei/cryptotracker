import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactUs() {
	return (
		<div className="w-full flex justify-between items-center">
			<ContactInfo />
			<ContactForm />
		</div>
	);
}
