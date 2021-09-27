import React from "react";
import Popup from "reactjs-popup";

export default function SingleServiceCard() {
  return (
    <div className="border border-solid h-full mx-2">
      <div className="flex flex-col p-2">
        <div className="h-20 w-24 border border-solid">jhfu</div>
        <div className="flex justify-between mt-1">
          <div className="text-xs">Price</div>
          <div>Instock</div>
        </div>
        <div className="flex justify-between">
          <div>View More</div>
          <div>add To cart</div>
        </div>{" "}
      </div>
    </div>
  );
}
