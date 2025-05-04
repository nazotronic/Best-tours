import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {
	const { toggleAuthBox } = useAuth();

	return (
		<header>
			<nav className="nav-bar">
				<div className="logo">
					<p className="logo-text-up">best</p>
					<p className="logo-text-down">tours</p>
				</div>
				<div className="drop">
					<button className="nav-but">&#9776;</button>
					<div className="nav-list">
						<Link to="/">Hot tours</Link>
						<Link to="/Bookings">Bookings</Link>
						<Link to="/Contacts">Contacts</Link>
					</div>
				</div>
				<div className="auth-icon" onClick={toggleAuthBox}>
					<img src={`${process.env.PUBLIC_URL}/images/auth.png`} alt="auth.png" />
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
