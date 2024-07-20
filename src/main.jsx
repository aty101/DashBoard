import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SideBar from "./T3DashBoard/NavBar.jsx";
import StudentsData from "./T3DashBoard/StudentsGrouping.jsx";
import SchoolsData from "./T3DashBoard/SchoolsData.jsx";

import App from "./App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <SideBar></SideBar>,
  },
  {
    path: "groups",
    element: <StudentsData></StudentsData>,
  },

  {
    path: "schools",
    element: <SchoolsData></SchoolsData>,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
