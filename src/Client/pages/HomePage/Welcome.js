import React from "react";
import ViewMoreButton from "../../components/ViewMoreButton";
import background from "../../images/home/cover.jpg";

export default function Welcome() {
  return (
    <div
      className="md:flex h-screen space-x-16 md:mr-0 mr-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="md:flex items-center pl-16 ">
        <div className="">
          <h1 className="lg:text-5xl text-sitetheme-blue  font-bold leading-tight text-3xl">
            Ecrew Digital Lanka{" "}
          </h1>
          <p className="mt-4 text-lg font-normal text-sitetheme-blue">
            Hello, we’re the eCrew, and we’re ready to serve you! <br /> see
            more.
          </p>
          <div className="container flex mx-auto mt-4">
            <div className="flex border-2 rounded-full">
              <div className="flex items-center justify-center px-4 border-r">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
              <div className="w-full bg-transparent relative inline-flex">
                <svg
                  class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
                  />
                </svg>
                <select class=" rounded-full text-black h-10 pl-5 pr-10 bg-transparent  focus:outline-none appearance-none">
                  <option>Choose a color</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Yellow</option>
                </select>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* <!-- Box right --> */}
    </div>
  );
}
