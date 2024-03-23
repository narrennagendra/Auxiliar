import { FaSearch } from "react-icons/fa";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import "../../css/Search.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
	const [searchBarClicked, setSearchBarClicked] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const handleSearchBarClick = () => {
		setSearchBarClicked(true);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:8001/subject/search?s=${searchInput}`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				const data = await response.json();
				setSearchResults(() => data.data.result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [searchInput]);

	return (
		<div>
			<Header />
			<div
				className={`search-container ${
					searchBarClicked ? "clicked" : ""
				}`}
				onClick={handleSearchBarClick}
			>
				<form className="main-search-form">
					<input
						type="text"
						placeholder="Search"
						className="main-search-input"
						onChange={(e) => setSearchInput(e.target.value)}
						value={searchInput}
					/>
					<button className="main-search-btn">
						<FaSearch color="black" />
					</button>
				</form>
				<div className="search-results-container">
					{searchBarClicked && (
						<ul className="search-results">
							{searchResults.map((result) => (
								<>
									<Link
										key={result._id}
										to={`/subject/${result._id}`}
										className="search-result-item"
									>
										{result.name}
									</Link>
								</>
							))}
						</ul>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
