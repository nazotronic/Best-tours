import React, { useState, useEffect } from "react";
import VideoBackground from "../components/VideoBackground";
import InfoPocket from "../components/InfoPocket";
import ReservedTourCard from "../components/ReservedTourCard";
import { auth, db } from "../Firebase"; // підключення Firebase
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firebase Firestore методи
import { useAuth } from "../AuthContext";

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

function Bookings() {
	const [reservedTours, setReservedTours] = useState([]);
	const { openAuthBox } = useAuth();
	const user = auth.currentUser;

	// зчитуємо тури при завантаженні
	useEffect(() => {
		const fetchReservedTours = async () => {
			if (user) {
				const userRef = doc(db, "tours", user.uid); // доступ до користувацьких турів

				try {
					const userSnap = await getDoc(userRef); // отримуємо дані користувача
					
					if (userSnap.exists()) {
						const data = userSnap.data();
						const reserved = data.reserved || [];

						// фільтруємо загальний масив турів на основі зарезервованих
						const filteredTours = toursData.filter(tour =>
							reserved.includes(tour.name) // перевіряємо, чи є тур у зарезервованих
						);

						setReservedTours(filteredTours); // оновлюємо стан зарезервованих турів
					}
				} catch (error) {
					console.error("Error fetching reserved tours:", error);
				}
			}
		};

		fetchReservedTours();
	}, []);

	// видалення туру
	const deleteTour = (tour) => {
		const updatedTours = reservedTours.filter((t) => t.name !== tour.name);
		setReservedTours(updatedTours);
		// Оновлюємо Firestore, видаляючи тур зі списку
		const user = auth.currentUser;
		if (user) {
			const userRef = doc(db, "tours", user.uid);
			setDoc(userRef, { reserved: updatedTours.map(t => t.name) }, { merge: true });
		}
	};

	return (
		<main>
			<VideoBackground />
			<InfoPocket text="Bookings" top="-25px" />

			(user) ?
			<div className="cards-container">
				{reservedTours.map((tour) => (
					<ReservedTourCard key={tour.name} tour={tour} deleteTour={deleteTour} />
				))}
			</div>
			:
			<div className="registration-req">
				<p>To see your tours please </p>
				<span onClick={openAuthBox}>Sign In | Sign Up</span>
			</div>
		</main>
	);
}

export default Bookings;
