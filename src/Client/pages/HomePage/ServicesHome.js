import React from "react";

export default function ServicesHome() {
  return (
    <div>
      {/* <!-- Section Hero --> */}
      <div class="bg-pink-100 py-14">
        <h1 class="mt-8 text-center text-5xl text-pink-500 font-bold">
          Our Services.
        </h1>

        {/* <!-- Box --> */}
        <div class="md:flex md:justify-center md:space-x-8 md:px-14">
          {/* <!-- box-1 --> */}
          <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div class="w-sm">
              <img
                class="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                alt=""
              />
              <div class="mt-4 text-pink-500 text-center">
                <h1 class="text-xl font-bold">Add Service Here</h1>
                <p class="mt-4 text-gray-600">
                  Pretium lectus quam id leo in vitae turpis. Mattis
                  pellentesque id nibh tortor id.
                </p>
                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-pink-500 text-white tracking-widest hover:bg-white hover:text-pink-500 hover:border-pink-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* <!-- box-2 --> */}
          <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div class="w-sm">
              <img
                class="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg"
                alt=""
              />
              <div class="mt-4 text-pink-500 text-center">
                <h1 class="text-xl font-bold">Add Service Here</h1>
                <p class="mt-4 text-gray-600">
                  Nunc consequat interdum varius sit amet mattis vulputate enim
                  nulla. Risus feugiat.
                </p>
                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-pink-500 text-white tracking-widest hover:bg-white hover:text-pink-500 hover:border-pink-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* <!-- box-3 --> */}
          <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div class="w-sm">
              <img
                class="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg"
                alt=""
              />
              <div class="mt-4 text-pink-500 text-center">
                <h1 class="text-xl font-bold">Add Service Here</h1>
                <p class="mt-4 text-gray-600">
                  Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel
                  elit scelerisque mauris.
                </p>
                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-pink-500 text-white tracking-widest hover:bg-white hover:text-pink-500 hover:border-pink-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <h4 class="text-center font-thin text-xl mt-14 text-pink-900">
          Tping Efect{" "}
        </h4>
      </div>
    </div>
  );
}
