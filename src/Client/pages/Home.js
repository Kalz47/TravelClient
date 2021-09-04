import React from "react";
import NavBar from "../components/NavBar";
import ServicesHome from "./HomePage/ServicesHome";
import Welcome from "./HomePage/Welcome";
import Footer from "./HomePage/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <ServicesHome />
      <Footer />
    </div>
  );
}
