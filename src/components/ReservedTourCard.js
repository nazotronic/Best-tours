function ReservedTourCard({ tour, deleteTour }) {
	return (
		<div className="card">
			<img className={tour.image_class} src={tour.image} alt={tour.name} />
            <h2>{tour.name}</h2>
            <p>{tour.country}, {tour.name}</p>
            <p>{tour.date}</p>
            <div class="price-and-buy">
                <button className="delete-btn" onClick={() => deleteTour(tour)}>
					Delete
				</button>
            </div>
		</div>
	);
}

export default ReservedTourCard;
