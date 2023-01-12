export default function Project({ data }) {
	return (
		<div className="card w-96 max-h-64 bg-base-100 shadow-xl image-full mt-5">
			<figure>
				<img src={data.image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{data.title}</h2>
				<p>{data.description}</p>
				<div className="card-actions justify-end">
					<a href={data.link}>
						<button className="btn btn-primary">Visit</button>
					</a>
				</div>
			</div>
		</div>
	);
}
