export default function CustomInput(
	attributes: React.InputHTMLAttributes<HTMLInputElement>
) {
	return (
		<input
			{...attributes}
			className="bg-white h-9.25 rounded-md px-2 outline-2 outline-white/0 focus:outline-(--green-color) transition-all ease-in-out duration-500 placeholder:text-black"
		/>
	);
}
