/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function ChatSection({ response, prompt }) {
	const [chat, setChat] = useState([
		{ role: "user", parts: [{ text: prompt }] },
		{ role: "model", parts: [{ text: response }] },
	]);
	const [userInput, setUserInput] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const updatedChat = [
			...chat,
			{ role: "user", parts: [{ text: userInput }] },
		];
		setChat(updatedChat);
		setUserInput("");
		await fetchLLMResponse(updatedChat);
	};

	const fetchLLMResponse = async (updatedChat) => {
		const response = await fetch("http://localhost:8001/chat/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ history: updatedChat }),
		});
		const data = await response.json();
		setChat((prevChat) => [
			...prevChat,
			{ role: "model", parts: [{ text: data.data }] },
		]);
	};

	return (
		<form>
			<section className="section section-chat">
				<h2 className="section-title">Chat :-</h2>
				{chat.slice(1).map((message, index) => (
					<div
						key={index}
						className={
							index % 2 === 1
								? "chat user-chat"
								: "chat gemini-response wrapper"
						}
					>
						<ReactMarkdown key={index}>
							{message.parts[0].text}
						</ReactMarkdown>
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
