/* eslint-disable react/prop-types */
export default function AdditionalResources( {additionalResources}) {
	const truncateUrl = (url, maxLength) => {
		if (url.length <= maxLength) return url;
		return url.substring(0, maxLength) + "...";
	};

	return (
		<>
			<section className="section additional-resources">
				<h2 className="section-title">Additional Resources :-</h2>
				<ul className="list">
				{additionalResources.map((additionalResource, index) => (
					<li className="list-item" key={index}>
							{additionalResource[0] !== "" ? (
								<a
									href={additionalResource[1]}
									target="_blank"
									rel="noopener noreferrer"
									title={additionalResource[1]}
								>
									{truncateUrl(additionalResource[0], 50)}
								</a>
							) : (
								<a
									href={additionalResource[1]}
									target="_blank"
									rel="noopener noreferrer"
									title={additionalResource[1]}
								>
									{truncateUrl(additionalResource[1], 30)}
								</a>
							)}
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
