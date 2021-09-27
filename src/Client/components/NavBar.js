import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function NavBar({ click }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sitetheme-blue">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/" className="" href="#pablo">
              <img src={logo} className="w-10 h-10 shadow-md" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            ></button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/login"
                  className="px-3 py-2 flex items-center mt-2 text-xs uppercase font-bold leading-snug hover:opacity-75 text-white"
                  href="#pablo"
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="h-14 flex items-center px-4 justify-between bg-sitetheme-blue text-white">
        <Link to="/" className="" href="#pablo">
          <img src={logo} className="w-10 h-10 shadow-md " />
        </Link>{" "}
        <div className="space-x-6  items-center sm:block hidden ">
          <Link to="/cart">
            {" "}
            <i class="fas fa-shopping-cart pr-2"></i>
            Cart
          </Link>
          <Link to="/">
            {" "}
            <i class="fas fa-home pr-2 mt-1"></i>
            Home
          </Link>
          <Link to="/login">
            {" "}
            <i class="fas fa-sign-in-alt pr-2 mt-1 "></i>
            Join
          </Link>
          <Link to="/aboutUs">
            {" "}
            <i class="far fa-address-card pr-2 mt-1"></i>
            About
          </Link>
          <Link to="/contactUs">
            {" "}
            <i class="far fa-id-badge pr-2 mt-1"></i>
            Contact
          </Link>
        </div>
        <button className="sm:hidden block" onClick={click}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </>
  );
}

{
  /* <i className="fas fa-bars"></i> */
}
