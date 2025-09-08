"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import img1 from "../component/asset/saurabh2.png";
import { PiCertificate } from "react-icons/pi";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       offset: 120,
  //       //   once: true, // animation ek hi bar chale
  //     });
  //   }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,
    });
    AOS.refresh(); // 🔥 force refresh
  }, []);

  return (
    <div data-aos="fade-up" className="flex flex-wrap ml-40 mr-40 gap-15">
      {/* Left Side */}
      <div className="w-1/3">
        <div className="h-80 w-80 bg-gradient-to-b from-gray-100 to-purple-800 rounded-2xl">
          <Image
            src={img1}
            alt="#"
            className="object-cover object-top h-80 w-80 rounded-2xl"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-around gap-8">
        <div className="flex gap-10">
          <div
            data-aos="fade-right"
            className="w-1/2 h-30 flex flex-col items-center justify-center gap-2 rounded-2xl p-2 bg-blue-700"
          >
            <PiCertificate className="text-3xl" />
            <p className="font-bold text-gray-200">Experience</p>
            <p className="text-sm">8 years Working</p>
          </div>

          <div
            data-aos="zoom-in"
            className="w-1/2 h-30 flex flex-col items-center justify-center gap-2 rounded-2xl p-2 bg-blue-700"
          >
            <PiCertificate className="text-3xl" />
            <p className="font-bold text-gray-200">Projects</p>
            <p className="text-sm">50+ Completed</p>
          </div>

          <div
            data-aos="fade-left"
            className="w-1/2 h-30 flex flex-col items-center justify-center gap-2 rounded-2xl p-2 bg-blue-700"
          >
            <PiCertificate className="text-3xl" />
            <p className="font-bold text-gray-200">Clients</p>
            <p className="text-sm">20+ Happy Clients</p>
          </div>
        </div>

        <div data-aos="fade-up">
          <p className="text-gray-300">
            Frontend Developer. I create web pages with UI / UX user <br />
            interfaces, I have years of experience and many clients are happy
            <br />
            with the work I did.
          </p>
        </div>

        <div data-aos="flip-up">
          <button className="px-3 py-2 bg-blue-400 border rounded-2xl">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
