export default function CustomInput(
	attributes: React.InputHTMLAttributes<HTMLInputElement>
) {
	return (
		<input
			{...attributes}
			className="bg-white w-full h-9.25 rounded-sm px-2 outline-3 outline-white/0 focus:outline-(--green-color)/40 transition-all ease-in-out duration-500 placeholder:text-black"
		/>
	);
}
