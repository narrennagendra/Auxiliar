/* eslint-disable react/prop-types */
export default function Prerequisites({ prerequisites }) {
	return (
		<>
			<section className="section prerequisites">
				<h2 className="section-title">Prerequisites :-</h2>
				<ul className="list">
					{prerequisites.map((prerequisite, index) => (
						<li className="list-item" key={index}>
							{prerequisite[0] !== "" ? (
								<a href={prerequisite[0]}>{prerequisite[1]}</a>
							) : (
								<a href={prerequisite[0]}>{prerequisite[0]}</a>
							)}
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
