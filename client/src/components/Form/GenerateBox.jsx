/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./../../css/form.css";
export default function GenerateBox({ SetllmResponse, userInput,  setUserInput}) {
	const onClick = async () => {
		console.log("foo");
		const chat = [{ role: "user", parts: [{ text: userInput }] }];
		const response = await fetch("http://localhost:8001/chat/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ history: chat }),
		});
		const data = await response.json();
		console.log(data);
		SetllmResponse(data.data);
	};

	return (
		<div className="generate-box">
			<h2 className="section-title">Generation Instructions</h2>
			<textbox
				type="text"
				id="instruction"
				onChange={(event) => setUserInput(event.target.value)}
				value={userInput}
				className="instruction-box"
			></textbox>
			<button onClick={onClick} className="btn">
				Generate
			</button>
		</div>
	);
}
