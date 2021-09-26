import React from "react";

export default function BookingDetails() {
  return (
    <div className="relative flex flex-col mt-12 ml-8 break-words w-full shadow-lg rounded">
      <div className="flex justify-between">
        {" "}
        <div className="pt-2 pl-2 font-light text-gray-600 text-sm">
          {" "}
          <i className="fas fa-user pr-1 -mt-1 "></i>
          User Details
        </div>
        <div className="pt-2 pr-2">
          <button class="text-gray-600 border border-solid py-2 px-4 rounded-full font-normal text-xs inline-flex items-center">
            <span>View More</span>
            <i class="fas fa-chevron-down pl-1"></i>
          </button>
        </div>
      </div>

      <div className="px-6 py-4 flex justify-between border-b border-solid">
        <div>Full Name</div>
        <div>Email</div>
        <div>City</div>
        <div>Province</div>
        <div>Phone Number</div>
        <div>Location</div>
        <div>Price</div>
      </div>
      <div className="pt-2 pl-2 font-light text-gray-600 text-sm">
        {" "}
        <i class="fas fa-paperclip pr-1"></i>
        Service Details
      </div>
      {/* Service Details  Start*/}
      <div className="px-6 py-4 flex justify-between">
        <div className="border border-solid w-36 h-auto">Image Input here </div>
        <div>Order Category</div>
        <div>City</div>
        <div>Time</div>
        <div>Price</div>
        <div>Location</div>
      </div>
      {/* Service Details end */}
      <div className="p-6 flex justify-center">
        <div className="px-2">
          <button class="bg-sitetheme-blue hover:bg-white hover:text-sitetheme-blue border border-sitetheme-blue text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        </div>
        <div className="px-2">
          <button class="bg-sitetheme-blue hover:bg-white hover:text-sitetheme-blue border border-sitetheme-blue text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        </div>
        <div className="px-2">
          <button class="bg-red-700 hover:bg-white hover:text-red-700 border border-red-700 text-white font-bold py-2 px-4 rounded-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
