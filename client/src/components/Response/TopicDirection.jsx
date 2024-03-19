/* eslint-disable no-mixed-spaces-and-tabs */
import { useDataContext } from "./DataContext";

export default function TopicDirection() {
  const promptData=useDataContext();
  const topicName = promptData ? promptData.topicName : "";
  console.log(promptData);
	return (
		<>
			<h2 className="topic-title">
        		<span>{topicName}</span>
			</h2>
		</>
	);
}
