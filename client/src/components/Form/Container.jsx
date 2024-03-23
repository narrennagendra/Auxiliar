import Footer from "../partials/Footer";
import Header from "../partials/Header";
import MainForm from "./MainForm";
import "../../css/form.css";

export default function Container() {
	return (
		<div>
			<Header />
			<div className="container">
				<MainForm />
				{/* <GenerateBox />
				<ResultBox /> */}
			</div>
			<Footer />
		</div>
	);
}
