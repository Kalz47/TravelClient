import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import SingleService from "../../pages/SingleService";
import "./style.css";
import placeholderimage from "../../images/logo.png";

export default function ServiceCard({ service }) {
  const [image, setImage] = useState();
  // const handleImage = async () => {
  //   const res = await axios.get(
  //     `http://localhost:8000/api/servicesImage/${service._id}`
  //   );
  //   console.log("IMage ==> ", res);
  // };

  useEffect(() => {
    setImage(`http://localhost:8000/api/servicesImage/${service._id}`);
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center ">
        <div className="container">
          <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
            <div className="flex flex-col ">
              <div className="">
                <div className="relative h-62 w-full mb-3">
                  <div className="absolute flex flex-col top-0 right-0 p-3"></div>
                  {image ? (
                    <img
                      src={image}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  ) : (
                    <img
                      src={placeholderimage}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  )}
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <span className="text-sitetheme-blue font-bold whitespace-nowrap mr-3 border-r pr-4 border-sitetheme-blue">
                        {service.name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-sitetheme-blue mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sitetheme-blue font-bold whitespace-nowrap mr-3">
                        4.60
                        {/* {service.name} */}
                      </span>
                      <span className="mr-2 text-gray-400">45.6K Ratings</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg mr-2 text-gray-400">
                        {service.price} LKR
                      </h2>
                      {/* <h2 className="text-lg mr-auto text-gray-400 line-through">
                        2500 LKR
                      </h2> */}
                      <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        INSTOCK
                      </div>
                      {/* <div className="flex items-center bg-red-500 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        OUT OF STOCK
                      </div> */}
                    </div>
                  </div>

                  <div className="lg:flex py-2 text-sm text-gray-600">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <ul class="list-disc">
                        <li>{service.features}</li>
                        {/* <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </li> */}
                      </ul>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-3"></div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-between pt-2">
                    <Popup
                      trigger={
                        <div className="flex flex-between">
                          <button className="no-underline text-sitetheme-blue">
                            {" "}
                            Vivew More{" "}
                          </button>

                          <svg
                            className="w-5 h-5 mt-4 cursor-pointer text-sitetheme-blue ml-1 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <SingleService close={close} service={service} />
                        </div>
                      )}
                    </Popup>

                    <button className="mt-2 transition ease-in duration-300 inline-flex items-center text-sm font-medium md:mb-0 bg-sitetheme-blue px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:text-sitetheme-blue hover:bg-white border hover:border-sitetheme-blue">
                      <span>Add Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
