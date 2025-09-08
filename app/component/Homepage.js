"use client";
import React, { useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import Image from "next/image";
import img1 from "../component/asset/saurabh3.png";

// For animation
import "aos/dist/aos.css";
import AOS from "aos";

// For typed tedt

import { ReactTyped } from "react-typed";
import { TypedText } from "./TypedText";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 120,
      once: false, // har scroll pe chale
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" flex flex-wrap items-center justify-between mx-auto  px-10 py-10">
      {/* Left side */}
      <div className="flex items-center w-2/3 ">
        <div
          data-aos="fade-right "
          className="flex flex-col items-center justify-center w-full"
        >
          <div className=" flex flex-col items-center justify-center gap-4  ">
            <p className="font-bold text-gray-200">Hello, I'm</p>
            <p className="font-bold text-5xl text-blue-400">Aryan Patel</p>
          </div>
          <div className="">
            {/* <TypedText /> */}

            <span className="text-purple-600 text-2xl md:text-5xl">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Web Developer",
                  "UI-UX Designer",
                  "Backend Developer",
                  "Coder",
                ]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1000}
                loop
              />
            </span>
          </div>

          {/* <p className="text-gray-200">Frontend Developer</p> */}

          <div className="p-4 space-x-2 h-full">
            <button className="px-3 py-2 border rounded-2xl border-blue-400 bg-blue-950 text-blue-400">
              Download CV
            </button>
            <button className="px-3 py-2 bg-blue-400 border rounded-2xl">
              About
            </button>
            <div className="flex  gap-2 mt-5">
              <a href="#">
                <FaLinkedinIn className="w-8 h-8 bg-gray-900 text-blue-400 rounded-sm p-1" />
              </a>
              <a href="#">
                <FaGithub className="w-8 h-8 bg-gray-900 text-blue-400 rounded-sm p-1" />
              </a>
              <a href="#">
                <FaDribbble className="w-8 h-8 bg-gray-900 text-blue-400 rounded-sm p-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div>
        <div
          data-aos="fade-left"
          className="h-[520px] w-[400px] bg-gradient-to-b from-blue-400 to-purple-1000 rounded-t-full rounded-b-2xl overflow-hidden"
        >
          <Image
            src={img1}
            alt="profile"
            className="object-cover object-top h-full w-full rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
