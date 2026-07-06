import addressIcon from "@/assets/contact-us/addressIcon.svg";
import emailIcon from "@/assets/contact-us/emailIcon.svg";
import phoneIcon from "@/assets/contact-us/phoneIcon.svg";

export default function ContactInfo() {
	return (
		<div className="desktop:max-w-136.5">
			<div className="flex flex-col justify-start items-start">
				<div className="flex flex-col justify-start items-start pb-10">
					<h2 className="font-bold text-[30px] tablet:text-[56.4px] tablet:h-18">
						Get In
						<span className="text-(--green-color)"> Touch</span>
					</h2>
					<p className="desktop:max-w-136.5 text-[16px] tablet:text-[25.5px] text-(--description-text)">
						Have questions or feedback? We'd love to hear from you. Fill out the
						form and our team will get back to you as soon as possible.
					</p>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex justify-start items-center gap-3">
						<img src={phoneIcon.src} />
						<div className="flex flex-col justify-start items-start leading-5">
							<span className="font-bold text-[17.1px]">Phone</span>
							<span className="text-(--description-text) text-[16px] tablet:text-[19.6px]">
								+1 (555) 123-4567
							</span>
						</div>
					</div>
					<div className="flex justify-start items-center gap-3">
						<img src={emailIcon.src} />
						<div className="flex flex-col justify-start items-start leading-5">
							<span className="font-bold text-[17.1px]">Email</span>
							<span className="text-(--description-text) text-[16px] tablet:text-[19.6px]">
								support@cryptotracker.com
							</span>
						</div>
					</div>
					<div className="flex justify-start items-center gap-3">
						<img src={addressIcon.src} />
						<div className="flex flex-col justify-start items-start leading-5">
							<span className="font-bold text-[17.1px]">Address</span>
							<span className="text-(--description-text) text-[16px] tablet:text-[19.6px]">
								123 Blockchain Street, Crypto City, CC 12345
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
