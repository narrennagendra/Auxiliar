/* eslint-disable no-mixed-spaces-and-tabs */
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header className="container header">
				<Link to="/" className="logo">
					Auxiliar
				</Link>
				<nav className="navbar">
					<button className="btn">
						<Link to="/form">New Prompt</Link>
					</button>
					<button className="btn">Logout</button>
				</nav>
			</header>
		</>
	);
}
