import { useDataContext } from "./DataContext";
export default function ImagesSection() {
	const promptData = useDataContext();
	const imagesUrl = promptData ? promptData.imagesUrl : "";
	return (
		<>
			<section className="section section-images">
				<h2 className="section-title">Images :-</h2>
				<ul className="list image-list">
					{imagesUrl.map((imageUrl, index)=>(
						<li key={index}>
							<img src= {imageUrl} alt="" />
						</li>
					))}
					{/* <li className="list-item">
						<img
							src="https://media.geeksforgeeks.org/wp-content/uploads/20210220204638/cn1.png"
							alt=""
						></img>
					</li>
					<li className="list-item">
						<img
							src="https://media.geeksforgeeks.org/wp-content/uploads/20210220204638/cn1.png"
							alt=""
						></img>
					</li> */}
				</ul>
			</section>
		</>
	);
}
