import React from "react";

export default function ServiceCardTopic({ Topic }) {
  return (
    <section id={`${Topic}`}>
      <div className="container">
        <div className="max-w-md w-full text-white shadow-lg rounded-full font-medium text-3xl text-center py-3 bg-sitetheme-blue ">
          {Topic}
        </div>
      </div>
    </section>
  );
}
