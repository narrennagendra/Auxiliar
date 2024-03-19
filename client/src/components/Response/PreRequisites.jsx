import { useDataContext } from "./DataContext";

export default function Prerequisites() {
	const promptData = useDataContext();
	const prerequisites = promptData ? promptData.prerequisites : "";
	return (
		<>
			<section className="section prerequisites">
				<h2 className="section-title">Prerequisites :-</h2>
				<ul className="list">
					{prerequisites.map((prerequisite, index) => (
						<li key={index}>
						<a href={prerequisite}>{prerequisite}</a>
						</li>
					))}
					{/* <li className="list-item">
						<a href="#">Basics of Computer Networks</a>
					</li>
					<li className="list-item">
						<a href="#">Basics of Computer Networks</a>
					</li> */}
				</ul>
			</section>
		</>
	);
}
