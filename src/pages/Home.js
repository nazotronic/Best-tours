import React, { useState } from "react";
import { useEffect, useRef } from "react";
import VideoBackground from "../components/VideoBackground";
import InfoPocket from "../components/InfoPocket";
import TourCard from "../components/TourCard";
import Map from "../components/CardsMap";
import { useAuth } from "../AuthContext";
import { auth, db } from "../Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const toursData = [
		{
				name: "Kotor",
				country: "Montenegro",
				date: "Aug 13 - Jul 20",
				price: 850,
				image: "images/Kotor1.png",
				image_class: "",
				coords: [42.4637, 18.7712]
		},
		{
				name: "Zadar",
				country: "Croatia",
				date: "Jun 3 - Jun 10",
				price: 700,
				image: "images/Zadar1.png",
				image_class: "",
				coords: [44.1194, 15.2318]
		},
		{
				name: "Ravenna",
				country: "Italy",
				date: "Jul 10 - Jul 17",
				price: 750,
				image: "images/Ravenna1.png",
				image_class: "",
				coords: [44.4184, 12.2047]
		},
		{
				name: "Palma",
				country: "Spain",
				date: "Jul 10 - Jul 17",
				price: 690,
				image: "images/Palma1.png",
				image_class: "",
				coords: [39.5696, 2.6502]
		},
		{
				name: "Herceg-Novi",
				country: "Montenegro",
				date: "Jun 3 - Jun 10",
				price: 710,
				image: "images/Herceg-Novi1.png",
				image_class: "",
				coords: [42.4584, 18.5344]
		},
		{
				name: "Venice",
				country: "Italy",
				date: "Aug 13 - Jul 20",
				price: 810,
				image: "images/Venice1.png",
				image_class: "",
				coords: [45.4408, 12.3155]
		},
		{
				name: "Marseille",
				country: "France",
				date: "Jul 10 - Jul 17",
				price: 760,
				image: "images/Marseille1.png",
				image_class: "",
				coords: [43.2965, 5.3698]
		},
		{
				name: "Barcelona",
				country: "Spain",
				date: "Aug 13 - Jul 20",
				price: 800,
				image: "images/Barcelona1.png",
				image_class: "",
				coords: [41.3784, 2.1915]
		},
		{
				name: "Durres",
				country: "Albania",
				date: "Jun 3 - Jun 10",
				price: 850,
				image: "images/Durres1.png",
				image_class: "",
				coords: [41.3231, 19.4543]
		}
];	


function Home() {
	const [tours, setTours] = useState(toursData);
	const [sortOrder, setSortOrder] = useState("default");
	const { openAuthBox } = useAuth();

	const reserveTour = async (tour) => {
		const user = auth.currentUser;
	
		if (user) {
			const userRef = doc(db, "tours", user.uid);
	
			try {
				const userSnap = await getDoc(userRef);
				let reserved = [];
	
				if (userSnap.exists()) {
					const data = userSnap.data();
					reserved = data.reserved || [];
				}
	
				if (!reserved.includes(tour.name)) {
					reserved.push(tour.name);
	
					await setDoc(userRef, { reserved: reserved }, { merge: true });
				} else {
					alert("Tour is already reserved!");
				}
			} catch (error) {
				console.error("Error reserving tour:", error);
			}
	
		} else {
			openAuthBox();
		}
	};

	const handleSortChange = (value) => {
		setSortOrder(value);

		let sortedTours = [...tours];

		if (value === "asc") {
			sortedTours.sort((a, b) => a.price - b.price);
		} else if (value === "desc") {
			sortedTours.sort((a, b) => b.price - a.price);
		} else {
			sortedTours = [...toursData];
		}

		setTours(sortedTours);
	};

	tours.forEach((tour) => {
		tour.image_class = tour.name + "-image";
	});

	return (
		<main>
			<VideoBackground />
			<InfoPocket text="Hot tours" top="-25px" />

			<div className="sort-switch">
				<button
					className={sortOrder === "default" ? "active" : ""}
					onClick={() => handleSortChange("default")}
				>
					Default
				</button>
				<button
					className={sortOrder === "asc" ? "active" : ""}
					onClick={() => handleSortChange("asc")}
				>
					↑ Price
				</button>
				<button
					className={sortOrder === "desc" ? "active" : ""}
					onClick={() => handleSortChange("desc")}
				>
					↓ Price
				</button>
			</div>

			<div className="cards-container">
				{tours.map((tour) => (
					<TourCard key={tour.name} tour={tour} reserveTour={reserveTour} />
				))}
			</div>

			<InfoPocket text="Available tours" />
			<Map tours={tours} reserveTour={reserveTour} />
		</main>
	);
}

export default Home;
