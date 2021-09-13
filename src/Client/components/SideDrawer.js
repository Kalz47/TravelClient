import React from "react";

export default function SideDrawer({ show }) {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return show && <div className={sideDrawerClass.join(" ")}></div>;
}
