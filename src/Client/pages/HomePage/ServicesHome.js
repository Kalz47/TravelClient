import React from "react";
import "flip-card-wc";
import "./style.css";
import ServiceList from "../../components/ServiceList";
import { Scrollbars } from "react-custom-scrollbars";

export default function ServicesHome() {
  return (
    <div>
      {/* <!-- Section Hero --> */}
      <div className="bg-blue-50 py-14">
        <h1 className="mt-8 text-center text-5xl text-sitetheme-blue font-bold">
          Our Services
        </h1>

        {/* <!-- Box --> */}
        <div className="md:flex md:justify-center md:space-x-8 md:px-14">
          {/* <!-- box-1 --> */}
          <div className="mt-16 w-72  mx-auto md:mx-0 ">
            <flip-card variant="hover">
              <div slot="front">
                <div className="rounded-xl shadow-lg hover:shadow-xl h-screen p-4">
                  <img
                    className="w-64"
                    src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                    alt=""
                  />
                  <div className="mt-4 text-sitetheme-blue text-center">
                    <h1 className="text-xl font-bold">Add Service Here</h1>
                    <p className="mt-4 text-gray-600">
                      Pretium lectus quam id leo in vitae turpis. Mattis
                      pellentesque id nibh tortor id.
                    </p>
                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sitetheme-blue text-white tracking-widest hover:bg-white border-2 hover:text-sitetheme-blue hover:border-sitetheme-blue transition duration-200">
                      MORE
                    </button>
                  </div>
                </div>{" "}
              </div>
              <div slot="back">
                <h6 className="flex justify-center text-sitetheme-blue py-2 text-xl font-sans font-semibold">
                  Hair Services
                </h6>
                <div className="space-y-4 p-4">
                  <Scrollbars style={{ width: 250, height: 500 }}>
                    <ServiceList index="1." Topic="Topic" />{" "}
                    <ServiceList index="2." Topic="Topic" />{" "}
                    <ServiceList index="3." Topic="Topic" />{" "}
                    <ServiceList index="3." Topic="Topic" />{" "}
                    <ServiceList index="4." Topic="Topic" />{" "}
                    <ServiceList index="5." Topic="Topic" />{" "}
                    <ServiceList index="1." Topic="Topic" />{" "}
                    <ServiceList index="2." Topic="Topic" />{" "}
                    <ServiceList index="3." Topic="Topic" />{" "}
                    <ServiceList index="3." Topic="Topic" />{" "}
                    <ServiceList index="4." Topic="Topic" />{" "}
                    <ServiceList index="5." Topic="Topic" />{" "}
                    <ServiceList index="1." Topic="Topic" />{" "}
                    <ServiceList index="2." Topic="Topic" />{" "}
                    <ServiceList index="3." Topic="Topic" />{" "}
                    <ServiceList index="3." Topic="Topic" />{" "}
                    <ServiceList index="4." Topic="Topic" />{" "}
                    <ServiceList index="5." Topic="Topic" />{" "}
                  </Scrollbars>
                </div>
              </div>
            </flip-card>
          </div>

          {/* <!-- box-2 --> */}
          <div className="mt-16 w-72  mx-auto md:mx-0 ">
            <flip-card variant="hover">
              <div slot="front">
                <div className="rounded-xl shadow-lg hover:shadow-xl h-screen p-4">
                  <img
                    className="w-64"
                    src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                    alt=""
                  />
                  <div className="mt-4 text-sitetheme-blue text-center">
                    <h1 className="text-xl font-bold">Add Service Here</h1>
                    <p className="mt-4 text-gray-600">
                      Pretium lectus quam id leo in vitae turpis. Mattis
                      pellentesque id nibh tortor id.
                    </p>
                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sitetheme-blue text-white tracking-widest hover:bg-white border-2 hover:text-sitetheme-blue hover:border-sitetheme-blue transition duration-200">
                      MORE
                    </button>
                  </div>
                </div>{" "}
              </div>
              <div slot="back">
                <div className="rounded-xl shadow-lg hover:shadow-xl h-screen p-4">
                  <img
                    className="w-64"
                    src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                    alt=""
                  />
                  <div className="mt-4 text-sitetheme-blue text-center">
                    <h1 className="text-xl font-bold">Add Service Here</h1>
                    <p className="mt-4 text-gray-600">
                      Pretium lectus quam id leo in vitae turpis. Mattis
                      pellentesque id nibh tortor id.
                    </p>
                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sitetheme-blue text-white tracking-widest hover:bg-white border-2 hover:text-sitetheme-blue hover:border-sitetheme-blue transition duration-200">
                      MORE
                    </button>
                  </div>
                </div>{" "}
              </div>
            </flip-card>
          </div>

          {/* <!-- box-3 --> */}
          {/* <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div class="w-sm">
              <img
                class="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg"
                alt=""
              />
              <div class="mt-4 text-sitetheme-blue text-center">
                <h1 class="text-xl font-bold">Add Service Here</h1>
                <p class="mt-4 text-gray-600">
                  Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel
                  elit scelerisque mauris.
                </p>
                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-sitetheme-blue text-white tracking-widest hover:bg-white border-2 hover:text-sitetheme-blue hover:border-sitetheme-blue transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div> */}
          <div className="mt-16 w-72  mx-auto md:mx-0 ">
            <flip-card variant="hover">
              <div slot="front">
                <div className="rounded-xl shadow-lg hover:shadow-xl h-screen p-4">
                  <img
                    className="w-64"
                    src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                    alt=""
                  />
                  <div className="mt-4 text-sitetheme-blue text-center">
                    <h1 className="text-xl font-bold">Add Service Here</h1>
                    <p className="mt-4 text-gray-600">
                      Pretium lectus quam id leo in vitae turpis. Mattis
                      pellentesque id nibh tortor id.
                    </p>
                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sitetheme-blue text-white tracking-widest hover:bg-white border-2 hover:text-sitetheme-blue hover:border-sitetheme-blue transition duration-200">
                      MORE
                    </button>
                  </div>
                </div>{" "}
              </div>
              <div slot="back">
                <div className="rounded-xl shadow-lg hover:shadow-xl h-screen p-4">
                  <img
                    className="w-64"
                    src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                    alt=""
                  />
                  <div className="mt-4 text-sitetheme-blue text-center">
                    <h1 className="text-xl font-bold">Add Service Here</h1>
                    <p className="mt-4 text-gray-600">
                      Pretium lectus quam id leo in vitae turpis. Mattis
                      pellentesque id nibh tortor id.
                    </p>
                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sitetheme-blue text-white tracking-widest hover:bg-white border-2 hover:text-sitetheme-blue hover:border-sitetheme-blue transition duration-200">
                      MORE
                    </button>
                  </div>
                </div>{" "}
              </div>
            </flip-card>
          </div>
        </div>
        <h4 className="text-center font-thin text-xl mt-14 text-blue-900">
          Tping Efect{" "}
        </h4>
      </div>
    </div>
  );
}
