/* eslint-disable react/prop-types */
export default function AdditionalResources( {additionalResources}) {
	return (
		<>
			<section className="section additional-resources">
				<h2 className="section-title">Additional Resources :-</h2>
				<ul className="list">
				{additionalResources.map((additionalResource, index) => (
						<li className="list-item" key={index}>
							{additionalResource[0] !== "" ? (
								<a href={additionalResource[0]}>{additionalResource[1]}</a>
							) : (
								<a href={additionalResource[0]}>{additionalResource[0]}</a>
							)}
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
