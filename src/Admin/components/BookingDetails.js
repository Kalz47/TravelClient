import React from "react";

export default function BookingDetails() {
  const nameData = [
    {
      name: "sirisena",
    },
    {
      name: "ndfksjdfnlksdf",
    },
    {
      name: "sirisena",
    },
  ];
  return (
    <div className="p-12">
      <table class="table-fixed">
        <thead>
          <tr>
            <th className="px-12  border-b border-r border-solid">Title</th>
            <th className="px-12  border-b border-r border-solid">Title</th>
            <th className="px-12  border-b border-r border-solid">Title</th>
            <th className="px-12  border-b border-r border-solid">Title</th>
            <th className="px-12  border-b border-solid">Title</th>
          </tr>
        </thead>
        <tbody>
          {nameData.map((n, index) => (
            <tr
              className={`${
                index % 2 === 0
                  ? "bg-sitetheme-blue text-white"
                  : "bg-white text-sitetheme-blue"
              }`}
            >
              <td className="py-3 px-4 ">{n.name} </td>
              <td className="py-3 px-4 ">{n.name}</td>
              <td className="py-3 px-4 ">{n.name}</td>
              <td className="py-3 px-4 ">{n.name}</td>
              <td className="py-3 px-4 ">{n.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
