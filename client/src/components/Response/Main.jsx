import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import TopicDirection from "./TopicDirection";
import Prerequisites from "./PreRequisites";
import AdditionalResources from "./AdditionalResources";
import ImagesSection from "./ImagesSection";
import ChatSection from "./ChatSection";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function Main() {
	const { promptId } = useParams();
	const [promptData, setPromptData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:8001/prompt/${promptId}`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				const data = await response.json();
				console.log(data);
				setPromptData(() => data.data.prompt);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [promptId]);

	const {
		topicName,
		prompt,
		response,
		imagesUrl,
		prerequisites,
		additionalResources,
	} = promptData;

	return (
		<>
			<Header />
			{promptData ? (
				<>
					<div className="not-main">
						<TopicDirection topicName = {topicName}/>
						<Prerequisites prerequisites = {prerequisites}/>
					</div>
					<div className="main">
						<ImagesSection imagesUrl = {imagesUrl}/>
						<ChatSection response = {response} prompt = {prompt}/>
					</div>
					<div className="not-main">
						<AdditionalResources additionalResources = {additionalResources}/>
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
			<Footer />
		</>
	);
}
