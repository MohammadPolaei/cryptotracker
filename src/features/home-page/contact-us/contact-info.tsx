import addressIcon from "@/assets/contact-us/addressIcon.svg";
import emailIcon from "@/assets/contact-us/emailIcon.svg";
import phoneIcon from "@/assets/contact-us/phoneIcon.svg";

export default function ContactInfo() {
	return (
		<div className="w-136.5 h-90.25">
			<div className="flex flex-col justify-start items-start">
				<div className="flex flex-col justify-start items-start pb-10">
					<h2 className="font-bold text-[56.4px]">
						Get In
						<span className="text-(--green-color)"> Touch</span>
					</h2>
					<p className="text-[25.5px] text-(--description-text)">
						Have questions or feedback? We'd love to hear from you. Fill out the
						form and our team will get back to you as soon as possible.
					</p>
				</div>
				<div>
					<div className="flex justify-start items-center gap-4">
						<img src={phoneIcon.src} />
						<div className="flex flex-col justify-start items-start">
							<span className="font-bold">Phone</span>
							<span className="text-(--description-text)">
								+1 (555) 123-4567
							</span>
						</div>
					</div>
					<div className="flex justify-start items-center gap-4">
						<img src={emailIcon.src} />
						<div className="flex flex-col justify-start items-start">
							<span className="font-bold">Email</span>
							<span className="text-(--description-text)">
								support@cryptotracker.com
							</span>
						</div>
					</div>
					<div className="flex justify-start items-center gap-4">
						<img src={addressIcon.src} />
						<div className="flex flex-col justify-start items-start">
							<span className="font-bold">Address</span>
							<span className="text-(--description-text)">
								123 Blockchain Street, Crypto City, CC 12345
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
