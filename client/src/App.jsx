import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/App.css";
import "./css/index.css";
import Main from "./components/Response/Main.jsx";
import Container from "./components/Form/Container.jsx";
// import ExampleCase from "./components/Response/ExampleCase.jsx";

const router = createBrowserRouter([
	{
		//Testing purpose
		path: "/",
		element: <Main /> 
	},
	{
		path: "/prompt/:promptId",
		element: <Main />,
	},
	{
		path: "/form",
		element: <Container />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
