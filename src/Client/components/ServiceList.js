import React from "react";
import { HashLink } from "react-router-hash-link";

export default function ServiceList({ index, Topic }) {
  return (
    <div>
      <span className="block">
        <div className="h-6 bg-white flex items-center border-b border-blue-100 py-4">
          <h1 className="text-sitetheme-blue">{index}</h1>
          <p className="ml-4 text-sitetheme-blue text-lg">
            <HashLink smooth to={`/serviceDetails#${Topic}`}>
              {Topic}{" "}
            </HashLink>
          </p>
        </div>
      </span>
    </div>
  );
}
