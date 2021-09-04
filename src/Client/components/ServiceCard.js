import React from "react";
import ViewMoreButton from "./ViewMoreButton";

export default function ServiceCard() {
  return (
    <div className="rounded overflow-hidden shadow-lg transition duration-500 transform hover:scale-105 cursor-pointer">
      {/* <img className="w-full" src="/mountain.jpg" alt="Mountain" /> */}
      <img
        className="w-full"
        src={`https://d39l2hkdp2esp1.cloudfront.net/img/photo/130102/130102_00_2x.jpg`}
        alt="logo"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Service Topic</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        {" "}
        <div className="flex  w-40 justify-center mb-4 py-2 px-2 bg-pink-500 text-white rounded-full">
          <button className="text-lg text-md ">View More</button>
        </div>{" "}
      </div>
    </div>
  );
}
