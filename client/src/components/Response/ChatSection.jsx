import { IconContext } from 'react-icons';
import { FaPlay } from "react-icons/fa";

export default function ChatSection() {
  return (
	<>
        <section className="section section-chat">
			<h2 className="section-title">Chat :-</h2>
			<div className="chat gemini-response">
				<p>The OSI model (Open Systems Interconnection model) is a conceptual framework for understanding and
					designing network protocols. It divides the communication process into seven distinct layers, each
					with its own set of functions.</p>
				<p>The seven layers of the OSI model are:</p>
				<ol>
					<li>
						<p><strong>Physical Layer:</strong></p>
						<ul>
							<li>Purpose: Establishes and maintains the physical connection between two devices.</li>
							<li>Functions:<ul>
									<li>Encoding and decoding of data</li>
									<li>Transmission and reception of data over the network medium</li>
									<li>Handling of data transmission errors</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p><strong>Data Link Layer:</strong></p>
						<ul>
							<li>Purpose: Provides reliable data transfer between two devices.</li>
							<li>Functions:<ul>
									<li>Framing: Dividing data into manageable chunks</li>
									<li>Addressing: Assigning unique addresses to devices on the network</li>
									<li>Error control: Detecting and correcting errors in data transmission</li>
									<li>Flow control: Regulating the flow of data to avoid congestion</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p><strong>Network Layer:</strong></p>
						<ul>
							<li>Purpose: Responsible for routing data packets from source to destination.</li>
							<li>Functions:<ul>
									<li>Routing: Determining the path that data packets should take through the network
									</li>
									<li>Forwarding: Sending data packets to the next hop on the network based on the
										routing information</li>
									<li>Addressing: Assigning network addresses to devices on the network</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p><strong>Transport Layer:</strong></p>
						<ul>
							<li>Purpose: Provides reliable data transfer between two hosts on the network.</li>
							<li>Functions:<ul>
									<li>Port addressing: Assigning unique port numbers to applications on the host
										devices</li>
									<li>Segmentation and reassembly: Dividing data into smaller segments for
										transmission and reassembling them at the receiving host</li>
									<li>Error control: Detecting and recovering from errors in data transmission</li>
									<li>Flow control: Regulating the flow of data to avoid congestion</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p><strong>Session Layer:</strong></p>
						<ul>
							<li>Purpose: Establishes, manages, and terminates sessions between two hosts on the network.
							</li>
							<li>Functions:<ul>
									<li>Session establishment: Negotiating the parameters of the session, such as the
										duration and the security mechanisms to be used</li>
									<li>Session management: Monitoring and controlling the session to ensure its proper
										operation</li>
									<li>Session termination: Closing the session in an orderly manner</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p><strong>Presentation Layer:</strong></p>
						<ul>
							<li>Purpose: Formats and encrypts data to prepare it for transmission and decrypts and
								decodes data received from the network.</li>
							<li>Functions:<ul>
									<li>Data formatting: Converting data into a format that is compatible with the
										application layer</li>
									<li>Data encryption: Encrypting data to protect its confidentiality</li>
									<li>Data compression: Compressing data to reduce its size and improve transmission
										efficiency</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p><strong>Application Layer:</strong></p>
						<ul>
							<li>Purpose: Provides a common interface for applications to access network services and
								communicate with each other.</li>
							<li>Functions:<ul>
									<li>File transfer: Enabling the transfer of files between hosts on the network</li>
									<li>Email: Sending and receiving electronic mail messages</li>
									<li>Web browsing: Accessing web pages on the internet</li>
									<li>Streaming media: Sending and receiving continuous media data, such as audio and
										video</li>
								</ul>
							</li>
						</ul>
					</li>
				</ol>
				<p>Use Cases of the OSI Model:</p>
				<ul>
					<li>
						<p><strong>Network Design and Management:</strong> The OSI model helps network engineers and
							administrators in designing, implementing, and managing network infrastructures. Each layer
							of the model can be independently analyzed and managed, which simplifies the troubleshooting
							and maintenance of complex networks.</p>
					</li>
					<li>
						<p><strong>Protocol Development:</strong> The OSI model serves as a guideline for protocol
							designers and developers. It ensures that protocols are developed in a structured and
							interoperable manner, allowing different devices and applications from different vendors to
							communicate seamlessly.</p>
					</li>
					<li>
						<p><strong>Education and Training:</strong> The OSI model is extensively used in networking
							education and training programs. It provides a clear and systematic framework for
							understanding the fundamental concepts of data communication and network protocols.</p>
					</li>
					<li>
						<p><strong>Troubleshooting and Problem Resolution:</strong> When troubleshooting network issues,
							the OSI model can be used to identify the layer at which the problem occurs. This helps
							network engineers and administrators to focus their troubleshooting efforts and resolve the
							issue more efficiently.</p>
					</li>
				</ul>

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
						value={{color:"#5de8c1", size: '40px'}}
					>
					<div>
					<FaPlay />
					</div>
					</IconContext.Provider>
				</button>
			</div>

		</section>
      </>
  )
}
 