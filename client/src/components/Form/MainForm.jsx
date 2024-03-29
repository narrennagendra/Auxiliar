import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./../../css/form.css";
import GenerateBox from "./GenerateBox";
import ResultBox from "./ResultBox";

function MainForm() {
	const [llmResponse, SetllmResponse] = useState("")
	const [userInput, setUserInput] = useState("");

	const form = useForm();
	const { register, control, handleSubmit, formState } = form;
	const {
		errors,
		touchedFields,
		dirtyFields,
		isDirty,
		isValid,
		isSubmitting,
		isSubmitted,
		isSubmitSuccessful,
	} = formState;
	console.log({
		touchedFields,
		dirtyFields,
		isDirty,
		isValid,
		isSubmitting,
		isSubmitted,
		isSubmitSuccessful,
	});
	const onSubmit = async (data) => {
		const response = await fetch("http://localhost:8001/prompt/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...data, prompt: userInput, response: llmResponse  }),
		});
		const submitData = await response.json();
		console.log(submitData);
	};
	const onError = (errors) => {
		console.log("Errors: ", errors);
	};
	const [prerequisiteCount, setPrerequisiteCount] = useState(1);
	const [imageCount, setImageCount] = useState(1);
	const [resourceCount, setResourceCount] = useState(1);

	// Function to add input fields dynamically
	function addInputField(inputType) {
		switch (inputType) {
			case "prerequisite":
				setPrerequisiteCount((prevCount) => prevCount + 1);
				break;
			case "image":
				setImageCount((prevCount) => prevCount + 1);
				break;
			case "resource":
				setResourceCount((prevCount) => prevCount + 1);
				break;
			default:
				break;
		}
	}
	function deleteInputField(inputType) {
		switch (inputType) {
			case "prerequisite":
				setPrerequisiteCount((prevCount) => prevCount - 1);
				break;
			case "image":
				setImageCount((prevCount) => prevCount - 1);
				break;
			case "resource":
				setResourceCount((prevCount) => prevCount - 1);
				break;
			default:
				break;
		}
	}

	return (
		<div>
			<h2 className="section-title">Create New Prompt :-</h2>
			<form
				action="#"
				className="prompt-form"
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
			>
				<div className="prompt-form">
					<div className="form-section">
						<h1 className="sub-heading">
							Enter the subject info :-
						</h1>
						<div className="subject-input">
							<div className="subject-info">
								<label htmlFor="subject-name" className="label">
									Subject Name :
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									placeholder="Enter Subject"
									className="input"
									{...register("subject", {
										required: {
											value: true,
											message: "Subject Name is Required",
										},
									})}
								/>
								<p className="error">
									{errors.subject?.message}
								</p>
							</div>
							<div className="subject-info">
								<label htmlFor="unit" className="label">
									Unit Number :
								</label>
								<input
									type="number"
									id="unit"
									name="unit"
									placeholder="Enter Unit number"
									className="input"
									{...register("unit", {
										pattern: {
											value: true,
											message: "Enter Valid Unit Number",
										},
									})}
								/>
								<p className="error">
									{errors.unit?.message}
								</p>
							</div>
							<div className="subject-info">
								<label htmlFor="topicName" className="label">
									Topic Name :
								</label>
								<input
									type="text"
									id="topicName"
									name="topicName"
									placeholder="Enter Topic Name"
									className="input"
									{...register("topicName", {
										pattern: {
											value: true,
											message:
												"Enter  a valid topic name.",
										},
									})}
								/>
								<p className="error">
									{errors.topicName?.message}
								</p>
							</div>
						</div>
					</div>

					<div className="form-section">
						<h1 className="sub-heading">Prerequisites :-</h1>
						<div className="prerequisites-input subject-info">
							{[...Array(prerequisiteCount)].map((_, index) => (
								<div className="subject-info" key={index}>
									<label
										className="label"
										htmlFor={`prerequisites${index + 1}`}
									>
										Prerequisite {index + 1} :
									</label>
									<input
										type="url"
										className="input"
										id={`prerequisites${index + 1}`}
										name="prerequisites"
										placeholder="Enter URL"
										{...register("prerequisites", {
											pattern: {
												value: true,
												message: "",
											},
										})}
									/>
									<p className="error">
										{errors.prerequisites?.message}
									</p>
								</div>
							))}
						</div>
						<div className="btn-section">
							<button
								type="button"
								className="btn"
								onClick={() => addInputField("prerequisite")}
							>
								Add
							</button>
							<button
								type="button"
								className="btn"
								onClick={() => deleteInputField("prerequisite")}
							>
								Remove
							</button>
						</div>
					</div>

					<div className="form-section">
						<h3 className="sub-heading">Images</h3>
						<div className="images-input subject-info">
							{[...Array(imageCount)].map((_, index) => (
								<div className="subject-info" key={index}>
									<label
										className="label"
										htmlFor={`imagesUrl${index + 1}`}
									>
										Image {index + 1} :
									</label>
									<input
										className="input"
										type="url"
										id={`imagesUrl${index + 1}`}
										name="imagesUrl"
										placeholder="Enter URL"
										{...register("images", {
											pattern: {
												value: true,
												message: "",
											},
										})}
									/>
									<p className="error">
										{errors.imagesUrl?.message}
									</p>
								</div>
							))}
						</div>
						<div className="btn-section">
							<button
								type="button"
								className="btn"
								onClick={() => addInputField("image")}
							>
								Add
							</button>
							<button
								type="button"
								className="btn"
								onClick={() => deleteInputField("image")}
							>
								Remove
							</button>
						</div>
					</div>

					<div className="form-section">
						<h3 className="sub-heading">Prompt</h3>
						<div className="prompt-input subject-info">
							<label className="label" htmlFor="promptUrl">
								Prompt URL :
							</label>
							<input
								className="input"
								type="url"
								id="prompt"
								name="prompt"
								placeholder="Enter URL"
								{...register("prompt", {
									pattern: { value: true, message: "" },
								})}
							/>
							<p className="error">{errors.prompt?.message}</p>
						</div>
					</div>

					<div className="form-section-last">
						<h3 className="sub-heading subject-info">
							Additional Resources
						</h3>
						<div className="additional-resources-input subject-info">
							{[...Array(resourceCount)].map((_, index) => (
								<div className="subject-info" key={index}>
									<label
										className="label"
										htmlFor={`additionalResource${index + 1}`}
									>
										Resource {index + 1} :
									</label>
									<input
										className="input"
										type="url"
										id={`additionalResource${index + 1}`}
										name="additionalResources"
										placeholder="Enter URL"
										{...register("resources", {
											pattern: {
												value: true,
												message: "",
											},
										})}
									/>
									<p className="error">
										{errors.additionalResources?.message}
									</p>
								</div>
							))}
						</div>
						<div className="btn-section">
							<button
								type="button"
								className="btn"
								onClick={() => addInputField("resource")}
							>
								Add
							</button>
							<button
								type="button"
								className="btn"
								onClick={() => deleteInputField("resource")}
							>
								Remove
							</button>
						</div>
					</div>
					<div className="generate">
					<GenerateBox SetllmResponse={SetllmResponse} userInput={userInput} setUserInput={setUserInput}/>
					<ResultBox llmResponse={llmResponse}/>
					</div>
					<button type="submit" className="btn">
						Submit
					</button>
					
				</div>
				<DevTool control={control} />
			</form>
		</div>
	);
}

export default MainForm;
