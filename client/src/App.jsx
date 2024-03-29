import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/App.css";
import "./css/index.css";
import Main from "./components/Response/Main.jsx";
import Container from "./components/Form/Container.jsx";
import SubjectDetails from "./components/SubjectDetails/SubjectDetails.jsx";
import Search from "./components/Search/Search.jsx";

const router = createBrowserRouter([
	{
		path: "/prompt/:promptId",
		element: <Main />,
	},
	{
		path: "/form",
		element: <Container />,
	},
	{
		path: "/subject/:subjectId",
		element: <SubjectDetails/>,
	},
	{
		path: "/",
		element: <Search/>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
