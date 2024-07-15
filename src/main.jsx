import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./log-in-page/LogInPage.jsx";
import SideBar from "./dashBoard/SideBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage></LogInPage>,
  },
  {
    path: "home",
    element: <SideBar></SideBar>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
