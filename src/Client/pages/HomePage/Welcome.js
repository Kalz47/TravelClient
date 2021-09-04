import React from "react";

export default function Welcome() {
  return (
    <div
      className="md:flex h-screen space-x-16 md:mr-0 mr-10"
      style={{
        backgroundImage: `url("https://www.teahub.io/photos/full/70-706101_american-nail-bar-in-arlington-tx-nails-treatment.jpg")`,
      }}
    >
      <div className="md:flex items-center pl-16 ">
        <div className="">
          <h1 className="lg:text-5xl  font-bold leading-tight text-3xl">
            Add Salon Name here
          </h1>
          <p className="mt-4 text-lg font-normal ">
            Add salon description here, <br /> see more.
          </p>
          <div className="flex  mt-10 w-40 justify-center py-3 px-6 bg-pink-500 text-white rounded-full animate-pulse">
            <button className="text-lg text-md ">Our Services</button>
          </div>
        </div>
      </div>
      {/* <!-- Box right --> */}
    </div>
  );
}
