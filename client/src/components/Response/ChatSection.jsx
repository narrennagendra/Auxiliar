/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function ChatSection({ response, prompt }) {
	const [chat, setChat] = useState([
		{ role: "user", parts: [{ test: prompt }] },
		{ role: "model", parts: [{ test: response }] },
	]);
	const [userInput, setUserInput] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		setChat((prevChat) => [
			...prevChat,
			{ role: "user", parts: [{ test: userInput }] },
		]);
		setUserInput("");
		await fetchLLMResponse();
	};

	const fetchLLMResponse = async () => {
		const response = await fetch("http://localhost:8001/chat/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ chat }),
		});
		const data = await response.json();
		setChat((prevChat) => [
			...prevChat,
			{ role: "model", parts: [{ test: data.data }] },
		]);
	};

	return (
		<form>
			<section className="section section-chat">
				<h2 className="section-title">Chat :-</h2>
				{chat.map((message, index) => (
					<div
						key={index}
						className={
							index % 2 === 0
								? "chat user-chat"
								: "chat gemini-response wrapper"
						}
					>
						{index > 0 && index % 2 === 0 && (
							<ReactMarkdown key={index}>{message}</ReactMarkdown>
						)}
						{index > 0 && index % 2 !== 0 && message}
					</div>
				))}

				<div className="user-input">
					<input
						type="text"
						placeholder="Type your message here..."
						className="chat-input"
						value={userInput}
						onChange={(event) => setUserInput(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								handleSubmit(event);
							}
						}}
					/>
					<button className="send-btn" onClick={handleSubmit}>
						<IconContext.Provider
							value={{ color: "#5de8c1", size: "40px" }}
						>
							<div>
								<FaPlay />
							</div>
						</IconContext.Provider>
					</button>
				</div>
			</section>
		</form>
	);
}
