import React from "react";
import contact from "../../images/contact.png";
import top from "../../images/banner-1.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";

import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0A0F36]">
        <div>
          <NavTop />
          <NavBar />
        </div>
        <div className="mt-5 mx-4 flex justify-center relative">
          <img src={top} alt="" className=" top-image   " />
          <h1 className="absolute top-28 justify-center items-center text-white text-[45px]  ">
            اتصل بنا
          </h1>
          <div className="absolute text-con flex  text-white gap-4 justify-center items-center mt-3">
            <Link>
              {" "}
              <h2> اتصل بنا </h2>
            </Link>{" "}
            <FaLongArrowAltLeft />
            <Link to="/">
              {" "}
              <p>الاساسيه </p>{" "}
            </Link>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-between mx-36 items-center">
          <div className="mt-5">
            <img src={contact} alt="" className="img-contact w-[500px]" />
          </div>
          <div className="">
            <div class="flex flex-col items-center justify-center h-screen dark">
              <div class="w-full max-w-md rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold text-gray-200 mb-4">اتصل بنا </h2>

                <form class="flex flex-wrap w-full   ">
                  <input
                    type="text"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Email"
                  />
                  <input
                    type="number"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Company Name"
                  />
                  <input
                    type="text"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Job Title"
                  />
                  <input
                    type="date"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Date of Birth"
                  />
                  <textarea
                    name="message"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                    placeholder="Message"
                  ></textarea>

                  <button
                    type="submit"
                    class="  bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
