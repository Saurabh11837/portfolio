"use client";
import React, { useEffect } from "react";
import { GoTriangleRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Services1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center">
      {/* Product Designing */}
      <div
        className="flex items-center justify-center m-5 gap-3"
        data-aos="fade-right"
      >
        <div className="w-45 h-35 md:w-70 md:h-60 px-5 pt-8 pb-6 rounded-2xl bg-gray-700 flex flex-col justify-around shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div>
            <p className="font-bold text-xl md:text-2xl text-gray-200">
              Product
            </p>
            <p className="font-bold text-xl md:text-2xl text-gray-200">
              Designing
            </p>
          </div>
          <p className="text-sm md:text-2xl text-blue-600 flex cursor-pointer">
            See More
            <GoTriangleRight className="h-5 w-5 md:h-8 md:w-8" />
          </p>
        </div>
      </div>

      {/* UI/UX Designing */}
      <div
        className="flex items-center justify-center m-5 gap-3"
        data-aos="zoom-in-up"
      >
        <div className="w-45 h-35 md:w-70 md:h-60 px-5 pt-8 pb-6 rounded-2xl bg-gray-700 flex flex-col justify-around shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div>
            <p className="font-bold text-xl md:text-2xl text-gray-200">
              UI / UX
            </p>
            <p className="font-bold text-xl md:text-2xl text-gray-200">
              Designing
            </p>
          </div>
          <p className="text-sm md:text-2xl text-blue-600 flex cursor-pointer">
            See More
            <GoTriangleRight className="h-5 w-5 md:h-8 md:w-8" />
          </p>
        </div>
      </div>

      {/* Visual Designing */}
      <div
        className="flex items-center justify-center m-5 gap-3"
        data-aos="fade-left"
      >
        <div className="w-45 h-35 md:w-70 md:h-60 px-5 pt-8 pb-6 rounded-2xl bg-gray-700 flex flex-col justify-around shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div>
            <p className="font-bold text-xl md:text-2xl text-gray-200">
              Visual
            </p>
            <p className="font-bold text-xl md:text-2xl text-gray-200">
              Designing
            </p>
          </div>
          <p className="text-sm md:text-2xl text-blue-600 flex cursor-pointer">
            See More
            <GoTriangleRight className="h-5 w-5 md:h-8 md:w-8" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services1;
