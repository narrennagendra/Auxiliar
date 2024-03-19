import { useDataContext } from "./DataContext";
export default function AdditionalResources() {
	const promptData = useDataContext();
	const additionalResources = promptData ? promptData.additionalResources : "";
	return (
		<>
			<section className="section additional-resources">
				<h2 className="section-title">Additional Resources :-</h2>
				<ul className="list">
					{
						additionalResources.map((additionalResource, index) => (
							<li key={index}>
								<a href={additionalResource}>{additionalResource}</a>
							</li>
						))
					}
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
