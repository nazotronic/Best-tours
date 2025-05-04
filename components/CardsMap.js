import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function CardsMap() {
	useEffect(() => {
		const mapOverlay = document.getElementById("cards-map-overlay");
		const mapContainer = document.getElementById("cards-map");

		if (!mapOverlay || !mapContainer) return;

		mapOverlay.addEventListener("click", () => {
			mapOverlay.style.display = "none";
		});

		mapContainer.addEventListener("mouseleave", () => {
			mapOverlay.style.display = "flex";
		});

		return () => {
			mapOverlay.removeEventListener("click", () => {
				mapOverlay.style.display = "none";
			});
			mapContainer.removeEventListener("mouseleave", () => {
				mapOverlay.style.display = "flex";
			});
		};
	}, []);

	return (
		<div className="cards-map-container">
			<div id="cards-map-overlay">
				<p>Click to open</p>
			</div>
			<div id="cards-map">
				<MapContainer
					center={[42.0, 5.0]}
					zoom={5}
					minZoom={4}
					maxZoom={6}
					zoomSnap={0.5}
					zoomDelta={0.5}
					inertia
					inertiaDeceleration={2000}
				>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
				</MapContainer>
			</div>
		</div>
	);
}

export default CardsMap;
