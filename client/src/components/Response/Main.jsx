import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import TopicDirection from "./TopicDirection";
import Prerequisites from "./PreRequisites";
import AdditionalResources from "./AdditionalResources";
import ImagesSection from "./ImagesSection";
import ChatSection from "./ChatSection";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { DataProvider } from "./DataContext";

export default function Main() {
	const { promptId } = useParams();
	const [promptData, setPromptData] = useState({
		"topicName": "OSI Model",
        "prompt": "You are a chatbot which helps engineering students to learn. You will be given a topic or subject to talk about and make sure the response follows the below given instructions and also you need to explain it in detail instructions which need to be followed:- 1) the topic is \"OSI model\" which is from the subject \"Computer Networks\" 2) the response should be in the form of points 3) It should explain in detail about all 7 layers of OSI models along with its use cases",
        "response": "# OSI Model \n\nThe OSI model (Open Systems Interconnection) is a conceptual framework that describes the various layers of communication involved in network communication. It provides a common framework for understanding how data is transmitted between devices on a network.\n\n## The 7 layers of the OSI model are:\n\n1. *Physical Layer:\n - Concerned with the physical transmission of data over a network.\n - Defines the physical characteristics of the network, such as the type of cable, connectors, and signaling methods.\n - Examples of physical layer protocols include Ethernet, Token Ring, and Fiber Channel.\n\n\n2. **Data Link Layer:\n - Responsible for transmitting data between network devices over a single network link.\n - Deals with network addressing issues, error detection, and flow control.\n - Protocols such as Ethernet, ATM, and Frame Relay operate at the data link layer.\n\n\n3. **Network Layer:\n - Responsible for routing data packets from one network to another.\n - Determines the path that data packets should take to reach their destination.\n - Protocols such as IP (Internet Protocol), ICMP (Internet Control Message Protocol), and OSPF (Open Shortest Path First) operate at the network layer.\n\n\n4. **Transport Layer:\n - Handles the reliable delivery of data packets between hosts.\n - Provides flow control and error control mechanisms.\n - Protocols such as TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate at the transport layer.\n\n\n5. **Session Layer:\n - Manages the establishment, maintenance, and termination of sessions between application processes.\n - Provides services such as synchronization, authentication, and session recovery.\n - Protocols such as NetBIOS (Network Basic Input/Output System) and RPC (Remote Procedure Call) operate at the session layer.\n\n\n6. **Presentation Layer:\n - Formats data for application processes.\n - Handles data encryption and compression.\n - Protocols such as ASCII (American Standard Code for Information Interchange) and EBCDIC (Extended Binary Coded Decimal Interchange Code) operate at the presentation layer.\n\n\n7. **Application Layer:*\n - Allows application programs to access network services.\n - Provides a variety of network applications, such as email, file transfer, and web browsing.\n - Application layer protocols include HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), and SMTP (Simple Mail Transfer Protocol).\n\n## Use Cases of OSI Model\n\n - Designing and implementing network protocols and applications.\n - Troubleshooting network issues by isolating problems to a specific layer.\n - Understanding how different network devices and applications interact.\n - Comparing different network technologies and architectures.\n - Teaching and learning about computer networks.",
        "imagesUrl": [
                "https://cf-assets.www.cloudflare.com/slt3lc6tev37/6ZH2Etm3LlFHTgmkjLmkxp/59ff240fb3ebdc7794ffaa6e1d69b7c2/osi_model_7_layers.png",
                "https://www.lifewire.com/thmb/v1ELh58tFZVN1RadeZxUO77eayo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OSImodel-8d93f19d50e543348f82110aa11f7a93.jpg"
            ],
        "prerequisites": [
                [
                    "What is the OSI Model? - 7 OSI Layers Explained - AWS",
                    "https://aws.amazon.com/what-is/osi-model/#:~:text=The%20Open%20Systems%20Interconnection%20(OSI,across%20geographical%20and%20political%20boundaries."
                ],
                [
                    "What is the OSI Model?",
                    "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
                ]
            ],
        "additionalResources": []
	});

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

	

	return (
		<DataProvider promptData={promptData}>
			<Header />
			{promptData ? (
				<>
					<div className="not-main">
						<TopicDirection  />
						<Prerequisites  />
					</div>
					<div className="main">
						<ImagesSection  />
						<ChatSection  />
					</div>
					<div className="not-main">
						<AdditionalResources />
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
			<Footer />
		</DataProvider>
	);
}
