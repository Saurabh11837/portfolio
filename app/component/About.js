"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <section className="w-full h-full scroll-mt-9" id="About">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="font-bold text-4xl text-blue-500">About Me</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-15">
        
        {/* Image */}
        <div className="flex items-center justify-center" data-aos="fade-right">
          <div className="hidden md:block rounded-2xl">
            <Image
              src="/images/saurabhProfile2.png"
              alt="Saurabh Kumar"
              className="rounded-2xl"
              width={350}
              height={350}
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 px-5 md:px-0"
          data-aos="fade-left"
        >
          <p className="text-lg text-gray-300 leading-relaxed text-justify md:text-left">

            I’m a <span className="text-blue-400 font-semibold">Full Stack</span> and  
            <span className="text-blue-400 font-semibold"> MERN Stack Developer</span>, currently working as a 
            <span className="text-blue-400 font-semibold"> Frontend Intern at Nybex Pvt. Ltd.</span>  
            where I build modern, scalable, and responsive web applications using  
            <span className="text-blue-400 font-semibold"> React.js, Next.js, Node.js, Express.js, and MongoDB.</span>
            <br /><br />

            I focus on writing clean code, solving complex problems, integrating APIs, 
            and building secure backend services.  
            <br /><br />

            I am skilled in authentication (JWT, Cookies, Sessions), role-based access control (Admin/User), 
            file uploads using Multer/Cloudinary, API security (Rate limiting, Helmet, CORS),  
            error-handling architecture, MVC pattern, and advanced middlewares.
            <br /><br />

            I also actively use GitHub, Postman, Thunder Client, and deploy applications on Vercel.  
            My goal is to build real-world impactful applications and grow as a strong Full Stack Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
