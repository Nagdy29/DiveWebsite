import React from "react";
import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import top from "../../images/banner-1.jpg";
import { Link } from "react-router-dom";
import { FaEye, FaLongArrowAltLeft } from "react-icons/fa";
import Footer from "../footer/Footer";
import pr1 from "../../images/port-3.jpg";

const projectDetails = () => {
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
            المشاريع
          </h1>
          <div className="absolute text-con flex  text-white gap-4 justify-center items-center mt-3">
            <Link>
              {" "}
              <h2> المشاريع </h2>
            </Link>{" "}
            <FaLongArrowAltLeft />
            <Link to="/">
              {" "}
              <p>الاساسيه </p>{" "}
            </Link>
          </div>
        </div>
        <div className=" flex justify-center gap-4 items-center flex-row flex-wrap my-12 ">
          <div class="relative  card flex w-96 flex-col   bg-[##2C55AC] bg-clip-border text-gray-700 shadow-lg">
            <div>
              <img
                src={pr1}
                alt=""
                className="w-full flex justify-center items-center rounded-sm "
              />
            </div>
            <div class="p-6 text-white ">
              <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  تحليل بيانات
                </button>
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="overlay">
              <button className="btn-pr">
                <Link to="/projectDetails">
                  {" "}
                  <FaEye className="" />
                </Link>
              </button>
            </div>
          </div>
          <div class="relative  card flex w-96 flex-col   bg-[##2C55AC] bg-clip-border text-gray-700 shadow-lg">
            <div>
              <img
                src={pr1}
                alt=""
                className="w-full flex justify-center items-center rounded-sm "
              />
            </div>
            <div class="p-6 text-white ">
              <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  تحليل بيانات
                </button>
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="overlay">
              <button className="btn-pr">
                <Link to="/projectDetails">
                  {" "}
                  <FaEye className="" />
                </Link>
              </button>
            </div>
          </div>
          <div class="relative  card flex w-96 flex-col   bg-[##2C55AC] bg-clip-border text-gray-700 shadow-lg">
            <div>
              <img
                src={pr1}
                alt=""
                className="w-full flex justify-center items-center rounded-sm "
              />
            </div>
            <div class="p-6 text-white ">
              <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  تحليل بيانات
                </button>
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="overlay">
              <button className="btn-pr">
                <Link to="/projectDetails">
                  {" "}
                  <FaEye className="" />
                </Link>
              </button>
            </div>
          </div>
          <div class="relative  card flex w-96 flex-col   bg-[##2C55AC] bg-clip-border text-gray-700 shadow-lg">
            <div>
              <img
                src={pr1}
                alt=""
                className="w-full flex justify-center items-center rounded-sm "
              />
            </div>
            <div class="p-6 text-white ">
              <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  تحليل بيانات
                </button>
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="overlay">
              <button className="btn-pr">
                <Link to="/projectDetails">
                  {" "}
                  <FaEye className="" />
                </Link>
              </button>
            </div>
          </div>
          <div class="relative  card flex w-96 flex-col   bg-[##2C55AC] bg-clip-border text-gray-700 shadow-lg">
            <div>
              <img
                src={pr1}
                alt=""
                className="w-full flex justify-center items-center rounded-sm "
              />
            </div>
            <div class="p-6 text-white ">
              <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  تحليل بيانات
                </button>
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="overlay">
              <button className="btn-pr">
                <Link to="/projectDetails">
                  {" "}
                  <FaEye className="" />
                </Link>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default projectDetails;
