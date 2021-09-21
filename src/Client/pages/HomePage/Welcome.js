import React from "react";
import ViewMoreButton from "../../components/ViewMoreButton";
import background from "../../images/home/cover.jpg";
import DropDownButoon from "../../components/buttons/DropDownButoon";
import Typed from "react-typed";

export default function Welcome() {
  return (
    <div
      className="md:flex md:h-screen space-x-16 md:mr-0 mr-10 w-full "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="md:flex items-center pl-16 ">
        <div className="">
          <h1 className="lg:text-5xl text-sitetheme-blue  font-bold leading-tight text-3xl">
            eCrew Digital Lanka{" "}
          </h1>
          <p className="mt-4 text-lg font-normal text-sitetheme-blue">
            <Typed
              strings={[
                "Hello, we’re the eCrew, and we’re ready to serve you!",
              ]}
              typeSpeed={70}
            />
          </p>
          <div className="container flex mx-auto mt-4">
            <div className="flex border-2 rounded-full">
              <div className="w-full bg-transparent relative inline-flex">
                <DropDownButoon color="white" />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* <!-- Box right --> */}
    </div>
  );
}
