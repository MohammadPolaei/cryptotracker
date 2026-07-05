import { FeatureType } from "@/types/features";

export default function FeatureCard({ feat }: { feat: FeatureType }) {
	return (
		<div className="bg-white flex flex-col justify-start items-start gap-3 rounded-md border border-black/5 shadow-sm shadow-black/5 p-5 h-59.5">
			<div>
				<img src={feat.icon} />
			</div>
			<h3 className="font-bold text-[22.7px]">{feat.title}</h3>
			<p className="text-[19.6px] text-(--description-text)">
				{feat.description}
			</p>
		</div>
	);
}
