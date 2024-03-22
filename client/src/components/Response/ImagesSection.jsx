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
						<li className="list-item" key={index}>
							<img src= {imageUrl} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
