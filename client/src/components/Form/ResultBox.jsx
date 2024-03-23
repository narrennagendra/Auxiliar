import ReactMarkdown from "react-markdown";
export default function ResultBox({llmResponse}) {
	return (
		<section className="container result-box">
			<h2 className="section-title">Result</h2>
			<div className="result-grid">
				{/* Result items will be dynamically added here */}
				<ReactMarkdown>{llmResponse}</ReactMarkdown>
			</div>
		</section>
	);
}
