export default function FooterBottom() {
	return (
		<div className="text-[12px] desktop:text-[16px] border-t-2 border-(--border-color) mt-10 py-8 flex flex-col tablet:flex-row justify-between items-center gap-4">
			<p className="text-(--description-text)">
				© 2025 CryptoTracker. All rights reserved.
			</p>

			<div className="flex gap-3 desktop:gap-8">
				<a href="#" className="text-(--description-text) hover:text-black">
					Privacy Policy
				</a>

				<a href="#" className="text-(--description-text) hover:text-black">
					Terms of Service
				</a>

				<a href="#" className="text-(--description-text) hover:text-black">
					Cookie Settings
				</a>
			</div>
		</div>
	);
}
