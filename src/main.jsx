import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import NavBar from "./T3DashBoard/components/NavBar.jsx";
import StudentsGrouping from "./T3DashBoard/components/StudentsGrouping.jsx";
import SchoolsData from "./T3DashBoard/components/SchoolsData.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <NavBar></NavBar>,
  },
  {
    path: "groups",
    element: <StudentsGrouping></StudentsGrouping>,
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
