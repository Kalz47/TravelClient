import React from "react";

export default function ServicesHome() {
  return (
    <div className="md:grid md:grid-cols-3 gap-4  bg-gray-100">
      <div className="md:col-start-1 col-span-2 p-4 flex h-full">
        <div className="text-gray-600 bg-white rounded-md p-4 shadow-lg md:text-2xl m-auto">
          <span className="text-3xl">L</span>orem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
        </div>
      </div>

      <div className="col-start-3 col-end-3 p-4">
        {/* <!-- Create By Joker Banny --> */}
        <div className="flex items-center justify-center h-full">
          <div className="m-auto">
            <div
              style={{
                backgroundImage: `url("https://www.illumiatherapeutics.com/hs-fs/hubfs/facial-treatment-5.png?width=800&name=facial-treatment-5.png")`,
              }}
              className="w-80 h-80  bg-white text-transparent	 hover:text-white rounded-lg  shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer"
            >
              <div className=" content-center flex h-full">
                <div className=" m-auto">
                  {" "}
                  <h1 className="text-xl font-bold ">Facial Treatment </h1>
                </div>
              </div>
              {/* <img
                src="https://www.illumiatherapeutics.com/hs-fs/hubfs/facial-treatment-5.png?width=800&name=facial-treatment-5.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
