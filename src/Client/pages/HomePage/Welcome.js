import React from "react";
import Typed from "react-typed";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from "../../images/services/SingleService/productLogos/4ever.jpg";
import image2 from "../../images/services/SingleService/productLogos/dreamron.jpg";
import LocationDropDownButton from "../../components/buttons/LocationDropDownButton";

export default function Welcome() {
  return (
    <div className="md:flex md:h-screen space-x-16 md:mr-0 mr-10 w-full h-60">
      <div className="md:flex items-center md:pl-16 pl-4">
        <div className="mt-12">
          <h1 className="lg:text-5xl text-sitetheme-blue  font-bold leading-tight text-3xl">
            ECrew Digital Lanka{" "}
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
                <LocationDropDownButton />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* <!-- Box right --> */}
      <div className=" w-full h-12 flex justify-center ">
        <div className="hidden sm:block">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={true}
          >
            <div>
              <img src={image1} className="h-1/2" />
            </div>
            <div>
              <img src={image2} className="h-1/2" />
            </div>
            <div>
              <img src={image1} className="h-1/2" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
