import {Routes, Route} from "react-router-dom"
import "./styles/styles.css"
import "./styles/auth.css"
import "./styles/cards-styles.css"
import "./styles/contacts-styles.css"
import 'leaflet/dist/leaflet.css';

import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Contacts from "./pages/Contacts";

import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Footer from"./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Auth />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Bookings" element={<Bookings />} />
				<Route path="/Contacts" element={<Contacts />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
