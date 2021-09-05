import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="footer-1 text-white py-8 sm:py-12"
      style={{
        backgroundImage: `url("https://familycars.lk/static/media/background_footer1.57bfa518.jpg")`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 ">
            <h5 className="text-xl font-bold mb-6">Contact</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Address{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Tel{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Email{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4  mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Information</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  About US
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  FAQ{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Privecy Policy{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Terms & Conditions{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4  mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Social</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  FaceBook
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Instergram
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Linkedin{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4  mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">My Account</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="no-underline hover:text-pink-500">
                  Register{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className=" no-underline  hover:text-pink-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
