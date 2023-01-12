export default function Header() {
	return (
		<div className="navbar bg-base-100 border-b-4 border-neutral pb-5">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Juan Michael</a>
			</div>
			<div className="flex-none mr-5">
				<button className="btn btn-primary">About</button>
			</div>
		</div>
	);
}
