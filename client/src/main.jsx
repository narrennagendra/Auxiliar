import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './css/App.css'
import './css/index.css'
import MainSearch from './components/Search/MainSearch.jsx';
import Main from './components/Response/Main.jsx';
import Container from './components/Form/Container.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/search",
    element: <MainSearch />
  },
  {
    path: "/form",
    element: <Container /> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
