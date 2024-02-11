export default function MainForm() {
    return (
      <div>
          <h2 className="section-title">Create New Prompt :-</h2>
          <form action="#" className="prompt-form">
              <div>
                  <h1 className="sub-heading">Enter the subject info :-</h1>
                  <div className="subject-input">
                      <div className="subject-info">
                          <label htmlFor="subject-name" className="label">Subject Name :</label>
                          <input type="text" id="subject-name" placeholder="Enter Subject" className="input"  required />
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
  
              <div className="form-section">Prerequisites</div>
           
              <div className="form-section">Images</div>
       
              <div className="form-section">Prompt</div>
     
              <div className="form-section-last">additional resources</div>
          </form>
      </div>
    )
  }
  