import React from "react";
import NavBar from "../components/NavBar";
import ServiceCard from "../components/Card/ServiceCard";
import Footer from "./HomePage/Footer";

export default function ServiceDetails() {
  return (
    <div>
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
            <h1 className="text-2xl text-white  ">Add decription here </h1>
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
