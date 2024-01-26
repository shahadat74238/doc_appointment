// ** import core package:
import { createBrowserRouter } from "react-router-dom";

// ** import components:
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Appointment from "../Pages/Appointment";
import PrivetRouter from "./PrivetRouter";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
        element: (
          <PrivetRouter>
            <Dashboard />
          </PrivetRouter>
        ),
      },
    ],
  },
]);

export default router;
