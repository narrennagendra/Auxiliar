/* eslint-disable react/prop-types */
export default function ImagesSection( {imagesUrl}) {
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
