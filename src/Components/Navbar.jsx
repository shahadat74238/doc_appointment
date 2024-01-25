// ** import core package:
import { NavLink } from "react-router-dom";
// ** import logo:
import logo from "../assets/logo.svg";
//  ** import third party libraries:
import {
  SignedOut,
  SignedIn,
  SignInButton,
  useUser,
  useClerk,
} from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  console.log(user);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  return (
    <div className="py-3 px-10 flex justify-between bg-themeColor">
      <div className="flex gap-4 items-center">
        <img className="h-10" src={logo} alt="loading Logo" />
        <p className="text-2xl font-semibold text-white">
          <span className="text-primary">Doc</span> House
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 item-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-white hover:text-primary duration-500"
            }
          >
            <div>Home</div>
          </NavLink>
          <div>
            {user ? (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-white hover:text-primary duration-500 "
                }
              >
                <div>Dashboard</div>
              </NavLink>
            ) : (
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-white hover:text-primary duration-500 "
                }
              >
                <div>Appointment</div>
              </NavLink>
            )}
          </div>
        </div>
        {user && (
          <div>
            <div>
              <img className="h-10 rounded-full" src={user?.imageUrl} alt="" />
            </div>
          </div>
        )}
        <div className="btn-primary">
          <SignedOut>
            <SignInButton className="" />
          </SignedOut>
          <SignedIn>
            <button className="" onClick={handleSignOut}>
              Sign Out
            </button>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
