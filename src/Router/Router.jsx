// ** import core package:
import { createBrowserRouter } from "react-router-dom";

// ** import components:
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Appointment from "../Pages/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      
    ],
  },
]);

export default router;
