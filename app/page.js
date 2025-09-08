"use client";

import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar1 from "./component/Navbar1";
import Navbar2 from "./component/Navbar2";
import Homepage from "./component/Homepage";
import About from "./component/About";
import { Login } from "./component/Login";
import Skills from "./component/Skills";
import Services from "./component/Services";
import RcentProject from "./component/RcentProject";
import Contact from "./component/Contact";
import Skill1 from "./component/Skill1";
import Services1 from "./component/Services1";
import RecentProject from "./component/RecentProject1";
import Footer from "./component/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1 second animation
  }, []);
  const router = useRouter();
  return (
    <>
      <div
        className="w-full   border-gray-500 bg-[#0a0f1a] 
               text-gray-200 placeholder-gray-500 focus:outline-none 
               focus:ring-2 focus:ring-blue-400 resize-none "
      >
        <Navbar1 className="fixed px-35 " />

        {/* Home page */}
        <div className="py-5">
          <Homepage />
        </div>

        {/* About page */}
        <div>
          <div className="flex flex-col justify-center items-center p-10 ">
            <p className=" text-gray-400">My intro</p>
            <h1 className=" font-bold text-4xl text-blue-500 ">About Me</h1>
          </div>

          <About />
        </div>
        {/* Skill page */}
        <div>
          <div className="flex flex-col justify-center items-center p-10 ">
            <p className=" text-gray-400">My Abilities</p>
            <h1 className=" font-bold text-4xl text-blue-500 ">
              My Experience
            </h1>
          </div>
          {/* <Skills /> */}
          {/* For animation pricatice file Skill1.js page uses */}
          <Skill1 />
        </div>
        {/* Service page */}
        <div>
          <div className="flex flex-col justify-center items-center p-10 ">
            <p className=" text-gray-400">My Services</p>
            <h1 className=" font-bold text-4xl text-blue-500 ">What I Offer</h1>
          </div>
          {/* <Services /> */}
          <Services1 />
        </div>
        {/* RecenteProject page */}
        <div>
          <div className="flex flex-col justify-center items-center p-10 ">
            <p className=" text-gray-400">My Project</p>
            <h1 className=" font-bold text-4xl text-blue-500 ">Recent Work</h1>
          </div>
          {/* <RcentProject /> */}
          <RecentProject />
        </div>
        {/* Contact page */}
        <div>
          <div className="flex flex-col justify-center items-center p-10 ">
            <p className=" text-gray-400">Get in touch</p>
            <h1 className=" font-bold text-4xl text-blue-500 ">Contact Me</h1>
          </div>
          <Contact />
        </div>
        {/* Footer page */}
        <div>
          {/* <div className="flex flex-col justify-center items-center p-10 ">
            <p className=" text-gray-400">Get in touch</p>
            <h1 className=" font-bold text-4xl text-blue-500 ">Contact Me</h1>
          </div> */}
          <Footer />
        </div>
      </div>
      {/* <Login /> */}
    </>
  );
}
