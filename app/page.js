"use client";

import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar1 from "./component/Navbar1";
import Homepage from "./component/Homepage";
import About from "./component/About";
import Contact from "./component/Contact";
import Skill1 from "./component/Skill1";
import Services1 from "./component/Services1";
import RecentProject from "./component/RecentProject1";
import Footer from "./component/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-[#0a0f1a] overflow-x-hidden">
        <Navbar1 />

        <Homepage />
        <About />
        <Skill1 />
        <Services1 />
        <RecentProject />
        <Contact />
        <Footer />
      </div>
      {/* <Login /> */}
    </>
  );
}

// bg-[#0a0f1a]
