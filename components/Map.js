import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

const customMarkerIcon = new L.Icon({
	iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
	shadowSize: [41, 41],
});

function Map() {
    useEffect(() => {
        const mapOverlay = document.getElementById("map-overlay");
        const mapContainer = document.getElementById("map");

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
        <>
            <div id="map-overlay">
                <p>Click to open</p>
            </div>
            <div id="map">
                <MapContainer
                    center={[49.810, 24.004]}
                    zoom={5}
                    minZoom={15}
                    maxZoom={18}
                    zoomSnap={0.5}
                    zoomDelta={0.5}
                    inertia
                    inertiaDeceleration={2000}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                    <Marker position={[49.810, 24.004]} icon={customMarkerIcon}>
                        <Popup>
                            <div className="map-card">
                                <h2>Our office</h2>
                                <p>Львів</p>
                                <p>вул. В.Великого 14</p>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
}

export default Map;