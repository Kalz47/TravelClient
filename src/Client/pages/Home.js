import React from "react";
import NavBar from "../components/NavBar";
import ServicesHome from "./HomePage/ServicesHome";
import Welcome from "./HomePage/Welcome";
import Footer from "./HomePage/Footer";
import OurTeam from "./HomePage/OurTeam";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <ServicesHome />
      <OurTeam />
      <Footer />
    </div>
  );
}
