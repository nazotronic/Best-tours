function TourCard({ tour, reserveTour }) {
	return (
		<div className="card">
			<img className={tour.image_class} src={tour.image} alt={tour.name} />
			<h2>{tour.name}</h2>
			<p>{tour.country}</p>
			<p>{tour.date}</p>
			<div className="price-and-buy">
				<span>{tour.price}$</span>
				<button className="reserve-btn" onClick={() => reserveTour(tour)}>
					Reserve
				</button>
			</div>
		</div>
	);
}

export default TourCard;
