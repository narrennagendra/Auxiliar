import "../../css/SubjectDetails.css";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useEffect, useState } from "react";
import ChapterDetails from "./ChapterDetails";
import { useParams } from "react-router-dom";

export default function SubjectDetails() {
	const { subjectId } = useParams();
	const [subjectData, setSubjectData] = useState({
		units: [[], [], [], [], []],
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:8001/subject/${subjectId}`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				const data = await response.json();
				setSubjectData(() => data.data.subject);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [subjectId]);

	return (
		<div>
			<Header />
			<div className="s-container">
				<h2 className="s-subject-name">{subjectData.name}</h2>
				{subjectData.units.map((chapter, index) => (
					<>
						<h3 key={index} className="s-title">
							Chapter {index + 1}
						</h3>
						<ChapterDetails key={index} chapter={chapter} />
					</>
				))}
			</div>
			<Footer />
		</div>
	);
}
