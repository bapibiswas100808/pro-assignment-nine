import { Link, NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { IoIosBulb } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink className="flex items-center" to="/">
          <span>
            <MdHome className="me-1" />
          </span>
          <span className="font-poppins">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center" to="/about">
          <span>
            <IoIosBulb className="me-1" />
          </span>
          <span className="font-poppins">About</span>
        </NavLink>
      </li>

      <li>
        <NavLink className="flex items-center" to="/update">
          <span>
            <AiFillProfile className="me-1" />
          </span>
          <span className="font-poppins">Update Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center" to="/contact">
          <span>
            <AiFillProfile className="me-1" />
          </span>
          <span className="font-poppins">Contact Us</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#0d1e50]">
      <div className="navbar max-w-[1170px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost lg:hidden bg-white me-2 rounded-lg p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow text-white w-52 text-lg bg-[#0d1e50]"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-white text-xl lg:text-2xl font-roboto cursor-pointer"
          >
            E-Estate
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1 text-white text-lg">{navLinks}</ul>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        ></div>
        <div className="navbar-end">
          {user ? (
            <div className="flex">
              <div
                className="w-10 mr-3 tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                  className="rounded-full min-h-[40px]"
                />
              </div>
              <button
                onClick={handleSignOut}
                className="px-3 py-1 text-white bg-[#ff3e55] rounded-lg font-roboto cursor-pointer"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 text-white bg-[#ff3e55] rounded-lg font-roboto cursor-pointer"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
