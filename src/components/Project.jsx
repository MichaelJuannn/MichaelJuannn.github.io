export default function Project({ data }) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl image-full">
			<figure>
				<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{data.title}</h2>
				<p>{data.description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Visit</button>
				</div>
			</div>
		</div>
	);
}
