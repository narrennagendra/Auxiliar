import { useState } from "react";

function MainForm() {
    const [prerequisiteCount, setPrerequisiteCount] = useState(1);
    const [imageCount, setImageCount] = useState(1);
    const [resourceCount, setResourceCount] = useState(1);

    // Function to add input fields dynamically
    function addInputField(inputType) {
        switch (inputType) {
            case 'prerequisite':
                setPrerequisiteCount(prevCount => prevCount + 1);
                break;
            case 'image':
                setImageCount(prevCount => prevCount + 1);
                break;
            case 'resource':
                setResourceCount(prevCount => prevCount + 1);
                break;
            default:
                break;
        }
    }
    function deleteInputField(inputType) {
        switch (inputType) {
            case 'prerequisite':
                setPrerequisiteCount(prevCount => prevCount - 1);
                break;
            case 'image':
                setImageCount(prevCount => prevCount - 1);
                break;
            case 'resource':
                setResourceCount(prevCount => prevCount - 1);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <h2 className="section-title">Create New Prompt :-</h2>
            <form action="#" className="prompt-form">
                <div className="form-section">
                    <h1 className="sub-heading">Enter the subject info :-</h1>
                    <div className="subject-input">
                        <div className="subject-info">
                            <label htmlFor="subject-name" className="label">Subject Name :</label>
                            <input type="text" id="subject-name" placeholder="Enter Subject" className="input" required />
                        </div>
                        <div className="subject-info">
                            <label htmlFor="unit-number" className="label">Unit Number :</label>
                            <input type="number" id="unit-number" placeholder="Enter Unit number" className="input" required />
                        </div>
                        <div className="subject-info">
                            <label htmlFor="topic-name" className="label">Topic Name :</label>
                            <input type="text" id="topic-name" placeholder="Enter Topic Name" className="input" required />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h1 className="sub-heading">Prerequisites :-</h1>
                    <div className="prerequisites-input subject-info">
                        {[...Array(prerequisiteCount)].map((_, index) => (
                            <div className="subject-info" key={index}>
                                <label className="label" htmlFor={`prereq${index + 1}`}>Prerequisite {index + 1} :</label>
                                <input type="url" className="input" id={`prereq${index + 1}`} placeholder="Enter URL" required />
                            </div>
                        ))}
                    </div>
                    <div className="btn-section">
                        <button type="button" className="btn" onClick={() => addInputField('prerequisite')}>Add</button>
                        <button type="button" className="btn" onClick={() => deleteInputField('prerequisite')}>Remove</button>
                    </div>
                </div>

                <div className="form-section">
                    <h3 className="sub-heading">Images</h3>
                    <div className="images-input subject-info">
                        {[...Array(imageCount)].map((_, index) => (
                            <div className="subject-info" key={index}>
                                <label className="label" htmlFor={`image${index + 1}`}>Image {index + 1} :</label>
                                <input className="input" type="url" id={`image${index + 1}`} placeholder="Enter URL" required />
                            </div>
                        ))}
                    </div>
                    <div className="btn-section">
                        <button type="button" className="btn" onClick={() => addInputField('image')}>Add</button>
                        <button type="button" className="btn" onClick={() => deleteInputField('image')}>Remove</button>
                    </div>
                </div>

                <div className="form-section">
                    <h3 className="sub-heading">Prompt</h3>
                    <div className="prompt-input subject-info">
                        <label className="label" htmlFor="promptUrl">Prompt URL :</label>
                        <input className="input" type="url" id="promptUrl" placeholder="Enter URL" required />
                    </div>
                </div>

                <div className="form-section-last">
                    <h3 className="sub-heading subject-info">Additional Resources</h3>
                    <div className="additional-resources-input subject-info">
                        {[...Array(resourceCount)].map((_, index) => (
                            <div className="subject-info" key={index}>
                                <label className="label" htmlFor={`resource${index + 1}`}>Resource {index + 1} :</label>
                                <input className="input" type="url" id={`resource${index + 1}`} placeholder="Enter URL" required />
                            </div>
                        ))}
                    </div>
                    <div className="btn-section">
                        <button type="button" className="btn" onClick={() => addInputField('resource')}>Add</button>
                        <button type="button" className="btn" onClick={() => deleteInputField('resource')}>Remove</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MainForm;
