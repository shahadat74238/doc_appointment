/* eslint-disable react/prop-types */

// ** import third party libraries:
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivetRouter;
