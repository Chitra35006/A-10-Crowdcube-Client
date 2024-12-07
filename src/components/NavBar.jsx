import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ButterFly.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../context/ThemeContext";
import { AuthContext } from '../context/AuthProvider';


const NavBar = () => {
 
  const { theme, toggleTheme } = useTheme();

  const{user,logOut} = useContext(AuthContext)
 
  

  // console.log(theme);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
      `${
        isActive
          ? theme === "dark"
            ? "active-link font-bold border-b-4 border-rose-200"
            : "active-link  font-bold border-b-4 border-violet-900"
          : "inactive-link"
      } ${theme === "dark" ? "text-rose-200" : "text-violet-900"}`
    }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
      `${
        isActive
          ? theme === "dark"
            ? "active-link font-bold border-b-4 border-rose-200"
            : "active-link  font-bold border-b-4 border-violet-900"
          : "inactive-link"
      } ${theme === "dark" ? "text-rose-200" : "text-violet-900"}`
    }
          to="/allCampaign"
        >
          All Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
      `${
        isActive
          ? theme === "dark"
            ? "active-link font-bold border-b-4 border-rose-200"
            : "active-link  font-bold border-b-4 border-violet-900"
          : "inactive-link"
      } ${theme === "dark" ? "text-rose-200" : "text-violet-900"}`
    }
          to="/addAnewCampaign"
        >
          Add New Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
      `${
        isActive
          ? theme === "dark"
            ? "active-link font-bold border-b-4 border-rose-200"
            : "active-link  font-bold border-b-4 border-violet-900"
          : "inactive-link"
      } ${theme === "dark" ? "text-rose-200" : "text-violet-900"}`
    }
          to="/myCampaign"
        >
          My Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
      `${
        isActive
          ? theme === "dark"
            ? "active-link font-bold border-b-4 border-rose-200"
            : "active-link  font-bold border-b-4 border-violet-900"
          : "inactive-link"
      } ${theme === "dark" ? "text-rose-200" : "text-violet-900"}`
    }
          to="/myDonations"
        >
          My Donations
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed  top-0 left-0 w-full bg-rose-200 shadow-md z-50">
      <div className={`navbar px-4 ${
        theme === "dark" ? "bg-slate-700" : "bg-gradient-to-r from-violet-200 via-rose-200 to-violet-200"
      }`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-10 hidden lg:block" src={logo} />
            <span className={`${theme === "dark" ? "text-rose-200" : "text-blue-800"} text-2xl`}>Crowd
            </span>
            <span className={`${theme === "dark" ? "text-blue-300" : "text-red-400"} text-2xl`}>
            <Typewriter
          words={["Cube"]}
          loop={true} // Loops infinitely
          cursor
          cursorStyle="_"
          typeSpeed={100} // Typing speed (ms)
          deleteSpeed={50} // Deleting speed (ms)
          delaySpeed={1000} // Delay between words (ms)
        />
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
        <button onClick={toggleTheme} className="btn btn-ghost rounded-full">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        <div>
          {
            user && user?.email? <button onClick={logOut} className='btn border-none bg-gradient-to-r from-red-300 to-rose-400 text-indigo-900 hover:text-rose-500  font-bold'>Log Out</button> : <Link to="/signin">
            <button className="border-none btn bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 ">Login</button>
            </Link>
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
