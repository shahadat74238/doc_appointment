// ** import core package:
import { Outlet } from "react-router-dom";

// ** import component:
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto px-5 min-h-screen">
      <Navbar />
      
      <Outlet />
    </div>
  );
};

export default MainLayout;
