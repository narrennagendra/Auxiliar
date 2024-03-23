/* eslint-disable react/prop-types */
export default function Prerequisites({ prerequisites }) {
	const truncateUrl = (url, maxLength) => {
		if (url.length <= maxLength) return url;
		return url.substring(0, maxLength) + "...";
	};

	return (
		<>
			<section className="section prerequisites">
				<h2 className="section-title">Prerequisites :-</h2>
				<ul className="list">
					{prerequisites.map((prerequisite, index) => (
						<li className="list-item" key={index}>
							{prerequisite.length === 2 ? (
								<a
									href={prerequisite[1]}
									target="_blank"
									rel="noopener noreferrer"
									title={prerequisite[1]}
								>
									{truncateUrl(prerequisite[0], 50)}
								</a>
							) : (
								<a
									href={prerequisite[0]}
									target="_blank"
									rel="noopener noreferrer"
									title={prerequisite[0]}
								>
									{truncateUrl(prerequisite[0], 30)}
								</a>
							)}
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
