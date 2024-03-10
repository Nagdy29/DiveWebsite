import React from "react";
import top from "../../images/banner-1.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";

import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { GrVirtualMachine } from "react-icons/gr";
import { TbBrandOpenai } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { GiSatelliteCommunication } from "react-icons/gi";

const Skils = () => {
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
            المهارات
          </h1>
          <div className="absolute text-con flex  text-white gap-4 justify-center items-center mt-3">
            <Link>
              {" "}
              <h2> المهارات </h2>
            </Link>{" "}
            <FaLongArrowAltLeft />
            <Link to="/">
              {" "}
              <p>الاساسيه </p>{" "}
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <h1 className="text-white text-[40px] mb-5">مهارتنا</h1>
        </div>
        <div className="">
          <div className="flex justify-center gap-2 pb-4 flex-wrap">
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <SiMicrosoftexcel size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  Microsoft excel
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <SiPowerbi size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  Microsoft power bi
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <SiMysql size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  Microsoft sql server
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <SiPython size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  python
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <TbBrandPython size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  python for data analysis
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <GrVirtualMachine size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  machine learning
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <TbBrandOpenai size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  Model Doplmenyt{" "}
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <FaDatabase size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  data visualization{" "}
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <FcStatistics size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  Advanced statistics
                </span>
              </div>
            </div>
            <div class="cursor-pointer transition-all mx-6 duration-500 hover:translate-y-2 w-64 h-36 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex items-center gap-2">
                <GiSatelliteCommunication size={35} />

                <span class="font-bold text-[20px] text-[#0A0F36]">
                  {" "}
                  communication{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skils;
