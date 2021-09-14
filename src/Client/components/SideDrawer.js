import React from "react";
import { Link } from "react-router-dom";

export default function SideDrawer({ show, click }) {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <div className="bg-sitetheme-blue flex flex-col h-full justify-around items-center">
          <Link
            to="/"
            onClick={click}
            className="text-white font-bold text-2xl flex flex-row "
          >
            <i class="fas fa-home pr-2 mt-1"></i>
            Home{" "}
          </Link>{" "}
          <Link
            to="/login"
            onClick={click}
            className="text-white  font-bold text-2xl flex flex-row"
          >
            <i class="fas fa-sign-in-alt pr-2 mt-1 "></i>
            Join{" "}
          </Link>{" "}
          <Link
            to="/aboutUs"
            onClick={click}
            className="text-white  font-bold text-2xl flex flex-row"
          >
            <i class="far fa-address-card pr-2 mt-1"></i>
            about Us
          </Link>
          <Link
            to="/contactUs"
            onClick={click}
            className="text-white font-bold text-2xl flex flex-row"
          >
            <i class="far fa-id-badge pr-2 mt-1"></i>
            contact{" "}
          </Link>
        </div>
      </div>
    )
  );
}
