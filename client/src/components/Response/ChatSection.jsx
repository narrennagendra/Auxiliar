import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';
const markdown= '';

export default function ChatSection() {
	return (
		<>
			<section className="section section-chat">
				<h2 className="section-title">Chat :-</h2>
				<div className="chat gemini-response wrapper">
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</div>
				<div className="chat user-chat">
					<p>Can you explain more about data link layer</p>
				</div>

				<div className="user-input">
					<input
						type="text"
						placeholder="Type your message here..."
						className="chat-input"
					/>
					<button className="send-btn">
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
		</>
	);
}

// const markdown = `
// 	The OSI model (Open Systems Interconnection model) is a conceptual 
// 	framework for understanding and designing network protocols. It 
// 	divides the communication process into seven distinct layers, each 
// 	with its own set of functions.

// 	The seven layers of the OSI model are:

// 	1. **Physical Layer:**
// 	- Purpose: Establishes and maintains the physical connection 
// 	  between two devices.
// 	- Functions:
// 		- Encoding and decoding of data
// 		- Transmission and reception of data over the network 
// 		  medium
// 		- Handling of data transmission errors

// 	2. **Data Link Layer:**
// 	- Purpose: Provides reliable data transfer between two devices.
// 	- Functions:
// 		- Framing: Dividing data into manageable chunks
// 		- Addressing: Assigning unique addresses to devices on the 
// 		  network
// 		- Error control: Detecting and correcting errors in data 
// 		  transmission
// 		- Flow control: Regulating the flow of data to avoid 
// 		  congestion

// 	3. **Network Layer:**
// 	- Purpose: Responsible for routing data packets from source to destination.
// 	- Functions:
// 		- Routing: Determining the path that data packets should take through the network
// 		- Forwarding: Sending data packets to the next hop on the network based on the routing information
// 		- Addressing: Assigning network addresses to devices on the network

// 	4. **Transport Layer:**
// 	- Purpose: Provides reliable data transfer between two hosts on the network.
// 	- Functions:
// 		- Port addressing: Assigning unique port numbers to applications on the host devices
// 		- Segmentation and reassembly: Dividing data into smaller segments for transmission and reassembling them at the receiving host
// 		- Error control: Detecting and recovering from errors in data transmission
// 		- Flow control: Regulating the flow of data to avoid congestion

// 	5. **Session Layer:**
// 	- Purpose: Establishes, manages, and terminates sessions between two hosts on the network.
// 	- Functions:
// 		- Session establishment: Negotiating the parameters of the session, such as the duration and the security mechanisms to be used
// 		- Session management: Monitoring and controlling the session to ensure its proper operation
// 		- Session termination: Closing the session in an orderly manner

// 	6. **Presentation Layer:**
// 	- Purpose: Formats and encrypts data to prepare it for transmission and decrypts and decodes data received from the network.
// 	- Functions:
// 		- Data formatting: Converting data into a format that is compatible with the application layer
// 		- Data encryption: Encrypting data to protect its confidentiality
// 		- Data compression: Compressing data to reduce its size and improve transmission efficiency

// 	7. **Application Layer:**
// 	- Purpose: Provides a common interface for applications to access network services and communicate with each other.
// 	- Functions:
// 		- File transfer: Enabling the transfer of files between hosts on the network
// 		- Email: Sending and receiving electronic mail messages
// 		- Web browsing: Accessing web pages on the internet
// 		- Streaming media: Sending and receiving continuous media data, such as audio and video

// 	Use Cases of the OSI Model:
// 	- **Network Design and Management:** The OSI model helps network engineers and administrators in designing, implementing, and managing network infrastructures. Each layer of the model can be independently analyzed and managed, which simplifies the troubleshooting and maintenance of complex networks.
// 	- **Protocol Development:** The OSI model serves as a guideline for protocol designers and developers. It ensures that protocols are developed in a structured and interoperable manner, allowing different devices and applications from different vendors to communicate seamlessly.
// 	- **Education and Training:** The OSI model is extensively used in networking education and training programs. It provides a clear and systematic framework for understanding the fundamental concepts of data communication and network protocols.
// 	- **Troubleshooting and Problem Resolution:** When troubleshooting network issues, the OSI model can be used to identify the layer at which the problem occurs. This helps network engineers and administrators to focus their troubleshooting efforts and resolve the issue more efficiently.

// 	`;

// createRoot(document.body).render(<ReactMarkdown>{markdown}</ReactMarkdown>)