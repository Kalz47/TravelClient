import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ServiceCard from "../components/Card/ServiceCard";
import Footer from "./HomePage/Footer";
import Typed from "react-typed";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices, getService } from "../../actions/service";

export default function ServiceDetails() {
  const dispatch = useDispatch();
  const [ispoup, setIspopup] = useState(false);

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  return (
    <div className="">
      <NavBar />
      <div
        className=" relative text-center w-full object-cover h-80 block mx-auto  sm:block sm:w-full"
        style={{
          backgroundImage: `url("https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/01/1452119085-woman-getting-hair-cut.jpg")`,
        }}
      >
        <div className=" content-center flex h-full">
          <div className=" m-auto">
            {" "}
            <h1 className="text-4xl text-white font-bold ">Our Services </h1>
            <h1 className="text-2xl text-white  ">
              {" "}
              <Typed
                strings={[
                  "Here you can find anything",
                  "Here you can find anything",
                  "Here you can find anything",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <ServiceCard />
        {/* <!--Card 2--> */}
        <ServiceCard />
        {/* <!--Card 3--> */}
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <Footer />
    </div>
  );
}
