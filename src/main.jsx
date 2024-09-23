import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './View/Pages/Home';
import Login from './View/Pages/Login'
import App from './View/Pages/App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  },
  {
    path: "/login",
    element: < Login /> ,
  },
  {
    path: "/app",
    element: < App />
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);