import React from "react";
import { Link } from "react-router-dom";

export default function ServiceList({ index, Topic, navi }) {
  return (
    <div>
      <span className="block">
        <div className="h-6 bg-white flex items-center border-b border-blue-100 py-4">
          <h1 className="text-sitetheme-blue">{index}</h1>
          <Link
            to={`/serviceDetails/#${navi}`}
            className="ml-4 text-sitetheme-blue text-lg"
          >
            {Topic}
          </Link>
        </div>
      </span>
    </div>
  );
}
