import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./log-in-page/LogInPage.jsx";
import SideBar from "./T3DashBoard/NavBar.jsx";
import StudentsData from "./T3DashBoard/StudentsGrouping.jsx";
import SchoolsData from "./T3DashBoard/SchoolsData.jsx";
import AddSchooleWindow from "./T3DashBoard/AddSchooleWindow.jsx";
import App from "./App.jsx";
import Try from "./T3DashBoard/try.jsx";
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
    path: "requests",
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
