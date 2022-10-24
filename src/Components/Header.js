import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assist/logo.png";
import logos from "../assist/logo1.png";
import guru from "../assist/travel.png"
import { AuthContext } from "../Firebase/AuthProvider";


const Header = () => {
  const location = useLocation();
  const [toggle, setToggle] =useState(false)
  const { user, userLogOut } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        // Sign-out successful.
        toast.success("logout Successfully");
        navigate("login");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.massage);
      });
  };

  return (
    <header
      aria-label="Site Header"
      className={
        location.pathname === "/" ||
        location.pathname === "/place/1" ||
        location.pathname === "/place/2" ||
        location.pathname === "/place/3" ||
        location.pathname === "/place/4" ||
        location.pathname === "/place/5" ||
        location.pathname === "/place/6"
          ? "md:bg-transparent bg-[#F9A51A]    md:fixed z-50 w-[100vw] p-4 md:p-0 text-black  md:text-white "
          : "md:bg-transparent bg-[#F9A51A]   md:fixed z-50 w-[100vw] text-black p-4 md:p-0"
      }
    >
      <div className="mx-auto  px-4 sm:px-6 lg:px-40">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block " to="/">
              <span className="sr-only">Home</span>
              <img
                className="w-[120px] h-[56px]"
                src={
                  location.pathname === "/" ||
                  location.pathname === "/place/1" ||
                  location.pathname === "/place/2" ||
                  location.pathname === "/place/3" ||
                  location.pathname === "/place/4" ||
                  location.pathname === "/place/5" ||
                  location.pathname === "/place/6"
                    ? `${logos}`
                    : `${logo}`
                }
                alt=""
              />
            </Link>
            <form className="mb-0 hidden lg:flex">
              <div className="relative">
                <input
                  className="h-10 rounded-lg border border-black text-black pl-2 pr-10 text-sm placeholder-gray-300 focus:z-10"
                  placeholder="Search..."
                  type="text"
                />

                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 "
                >
                  <span className="sr-only">Submit Search</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className=" transition hover:border-b-4 hover:border-[#F9A51A] ]" to="/">
                    News
                  </Link>
                </li>

                <li>
                  <Link className=" transition hover:border-b-4 hover:border-[#F9A51A] " to="/">
                    Destination
                  </Link>
                </li>

                <li>
                  <Link className=" transition hover:border-b-4 hover:border-[#F9A51A]" to="blog">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link className=" transition hover:border-b-4 hover:border-[#F9A51A]  " to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {user?.email && user?.uid ? (
                <div className="sm:flex sm:gap-4">
                  <p
                    onClick={handleLogOut}
                    className="rounded-md bg-white md:bg-[#F9A51A] px-5 py-2.5 text-sm font-medium text-black md:text-white shadow hover:border hover:border-[#F9A51A] hover:bg-white hover:text-black  "
                  >
                    logout
                  </p>
                  <h1 className="mt-2 md:text-md text-lg hidden md:block ">{user?.displayName}</h1>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-white text-[#F9A51A] md:bg-[#F9A51A] px-5 py-2.5 text-sm font-medium md:text-white shadow hover:border hover:border-[#F9A51A] hover:bg-white hover:text-black"
                    to="login"
                  >
                    login
                  </Link>
                </div>
              )}

              <div className="block md:hidden">
                <button
                onClick={()=>setToggle(!toggle)}
                 className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      {
        toggle && <nav aria-label="Site Nav" className="md:hidden block mt-3 text-black">
        <ul className="text-center gap-6 text-lg ">
          <li>
            <Link className=" transition " to="/">
              News
            </Link>
          </li>

          <li>
            <Link className=" transition " to="/">
              Destination
            </Link>
          </li>

          <li>
            <Link className=" transition " to="blog">
              Blog
            </Link>
          </li>

          <li>
            <Link className=" transition " to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      }
     
    </header>
  );
};

export default Header;
