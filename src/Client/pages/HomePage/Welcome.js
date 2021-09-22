import React from "react";
import Typed from "react-typed";
import image1 from "../../images/services/SingleService/productLogos/4ever.jpg";
import image2 from "../../images/services/SingleService/productLogos/dreamron.jpg";
import LocationDropDownButton from "../../components/buttons/LocationDropDownButton";
import Slider from "../../components/slider/Slider";

export default function Welcome({ Location, setlocation }) {
  return (
    <div className="md:flex md:h-screen  md:mr-0 mr-10 w-full h-60">
      <div className="md:flex items-center md:pl-16 pl-4 space-x-16">
        <div className="mt-12">
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
            <div className="flex ">
              <div className="w-full bg-transparent relative inline-flex">
                <LocationDropDownButton
                  Location={Location}
                  setlocation={setlocation}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* <!-- Box right --> */}
      <div className=" w-screen my-4">
        <Slider />
      </div>
    </div>
  );
}
