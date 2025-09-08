"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaMailBulk, FaTwitter } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Semester:", sem);

    // reset after submit
    setName("");
    setSem("");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|org)$/;
  return (
    <>
      <div className="flex flex-wrap items-center justify-between ">
        <div className="w-1/2 flex items-center justify-end ">
          <div className="">
            <h2 className="text-white text-2xl font-bold flex items-center justify-center">
              Talk to me
            </h2>
            <div className="md:w-120 m-5 bg-gray-700 h- w-50 px-3 py-10 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center">
                <FaMailBulk className="text-gray-100 h-8 w-10 " />
                <p className="text-gray-100 font-bold">Email</p>
                <p className=" text-gray-400 text-sm">user@gmail.com</p>
              </div>
              <div className="flex">
                <p className="text-sm text-blue-500">Demo </p>
                <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
              </div>
            </div>
            <div className="md:w-120 m-5 bg-gray-700 h- w-50 px-3 py-10 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center">
                <FaWhatsapp className="text-gray-100 h-8 w-10 " />
                <p className="text-gray-100 font-bold">WhatsApp</p>
                <p className=" text-gray-400 text-sm">user@gmail.com</p>
              </div>
              <div className="flex">
                <p className="text-sm text-blue-500">Demo </p>
                <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
              </div>
            </div>
            <div className="md:w-120 m-5 bg-gray-700 h- w-50 px-3 py-10 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center">
                <FaTwitter className="text-gray-100 h-8 w-10 " />
                <p className="text-gray-100 font-bold">Twitter</p>
                <p className=" text-gray-400 text-sm">user@gmail.com</p>
              </div>
              <div className="flex">
                <p className="text-sm text-blue-500">Demo </p>
                <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Page */}
        <div className="w-1/2 ">
          <div className=" ">
            <h2 className="text-white text-2xl font-bold flex items-center justify-center">
              Write me your Message
            </h2>
            <form
              onSubmit={onSubmit}
              className="w-full max-w-md shadow-lg rounded-2xl  space-y-6"
            >
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-300">Name :</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name} // controlled
                  onChange={(e) => setName(e.target.value)} // correct onChange
                  required
                  minLength={3}
                  className="w-full p-3 rounded-lg border border-gray-500 bg-[#0a0f1a] 
               text-gray-200 placeholder-gray-500 focus:outline-none 
               focus:ring-2 focus:ring-blue-400 resize-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-300">Mail :</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg border border-gray-500 bg-[#0a0f1a] 
               text-gray-200 placeholder-gray-500 focus:outline-none 
               focus:ring-2 focus:ring-blue-400 resize-none"
                />
                {mail && !emailRegex.test(mail) && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email (must end with .com, .in, or
                    .org)
                  </p>
                )}
              </div>
              {/* message box */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  placeholder="Write your Message"
                  rows={8}
                  className="w-full p-3 rounded-lg border border-gray-500 bg-[#0a0f1a] 
               text-gray-200 placeholder-gray-500 focus:outline-none 
               focus:ring-2 focus:ring-blue-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
