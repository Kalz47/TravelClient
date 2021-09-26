import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../actions/cart";

export default function BookingDetails({ index, c }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    if (!isOpen) setIsOpen(true);
    else setIsOpen(false);
  };
  return (
    <>
      <div
        className={`relative flex flex-col mt-12 ml-8 break-words w-full shadow-lg rounded ${
          index % 2 == 0 ? "bg-blue-100" : "bg-red-100"
        }`}
      >
        <div className="flex justify-between">
          {" "}
          <div className="pt-2 pl-2 font-light text-gray-600 text-sm">
            {" "}
            <i className="fas fa-user pr-1 -mt-1 "></i>
            User Details
          </div>
          <div className="pt-2 pr-2">
            <button
              onClick={handleChange}
              className="text-gray-600 border border-solid hover:border-sitetheme-blue hover:text-sitetheme-blue py-2 px-4 rounded-full font-normal text-xs inline-flex items-center"
            >
              <span>{isOpen ? "View less" : "View more"}</span>
              {isOpen ? (
                <i className="fas fa-chevron-up pl-1"></i>
              ) : (
                <i className="fas fa-chevron-down pl-1"></i>
              )}
            </button>
          </div>
        </div>

        <div className="px-6 py-4 flex justify-between">
          <div>Full Name:</div>
          <div>City:</div>
          <div>Phone Number: </div>
          <div>Location: </div>
        </div>
        <div className="px-6 py-4 flex justify-between ">
          <div>Email: </div>
          <div>Province: </div>
          <div>Price: </div>
        </div>
        {isOpen && (
          <>
            <div className="pt-2 pl-2 font-light text-gray-600 text-sm border-t border-solid">
              {" "}
              <i class="fas fa-paperclip pr-1"></i>
              Service Details
            </div>

            {c.cartItems.map((i) => (
              <div className="px-6 py-4 flex justify-between">
                <div className="border border-solid w-24 h-auto">
                  Image Input here{" "}
                </div>
                <div>Order Category</div>
                <div>City</div>
                <div>Time</div>
                <div>Price</div>
                <div>Location</div>
              </div>
            ))}
          </>
        )}

        <div className="p-6 flex justify-center">
          <div className="px-2">
            <button class="bg-sitetheme-blue hover:bg-white hover:text-sitetheme-blue border border-sitetheme-blue text-white py-2 px-4 rounded-full">
              Button
            </button>
          </div>
          <div className="px-2">
            <button class="bg-sitetheme-blue hover:bg-white hover:text-sitetheme-blue border border-sitetheme-blue text-white py-2 px-4 rounded-full">
              Button
            </button>
          </div>
          <div className="px-2">
            <button class="bg-red-700 hover:bg-white hover:text-red-700 border border-red-700 text-white py-2 px-4 rounded-full">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
