import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ChapterDetails({ chapter }) {
	return (
		<div className="chapter-details">
			{chapter.map((topic, index) => (
				<Link
					to={`/prompt/${topic[0]}`}
					key={index}
					className="topic-links"
				>
					{topic[1]}
				</Link>
			))}
		</div>
	);
}
