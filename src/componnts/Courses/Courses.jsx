import React from "react";
import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import top from "../../images/banner-1.jpg";
import cor from "../../images/corses.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Courses = () => {
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
            الكورسات
          </h1>
          <div className="absolute text-con flex  text-white gap-4 justify-center items-center mt-3">
            <Link>
              {" "}
              <h2> الكورسات </h2>
            </Link>{" "}
            <FaLongArrowAltLeft />
            <Link to="/">
              {" "}
              <p>الاساسيه </p>{" "}
            </Link>
          </div>
        </div>
        <div className="courses mx-4 ">
          <div className="text-[40px] text-white font-bold justify-center flex mt-5">
            <h2> : الكورسات المتاحه</h2>
          </div>
          <div className="pt-24 pb-32 flex  gap-4 justify-center items-center flex-wrap">
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
              <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={cor} alt="" />
              </div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal  text-[#0A0F36] antialiased">
                  كورس تحليل بيانات
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
            </div>
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
              <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={cor} alt="" />
              </div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal  text-[#0A0F36] antialiased">
                  كورس تحليل بيانات
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
            </div>
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
              <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={cor} alt="" />
              </div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal  text-[#0A0F36] antialiased">
                  كورس تحليل بيانات
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Courses;
