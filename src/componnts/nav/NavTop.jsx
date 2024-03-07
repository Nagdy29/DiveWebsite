import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Link } from "react-router-dom";
const NavTop = () => {
  return (
    <>
      <div>
        <div className="navbar sm:gap-5    flex  flex-col justify-between md:flex-row ">
          <div className="mx-9 flex items-center  gap-4">
            <div className="flex items-center gap-3">
              <BiLogoGmail className="text-[#4C42C5] " size={25} />
              <Link className="text-white" to="rabeeali500@gmail.com">
                rabeeali500@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <BsFillTelephoneFill className="text-[#4C42C5] " size={25} />
              <p className="text-white">01281022796</p>
            </div>
          </div>
          <div className="flex-none flex items-center mx-11 gap-3">
            <div className="flex items-center gap-3 cursor-pointer icons-top">
              <a href="" className="flex items-center justify-center">
                {" "}
                <FaFacebookF />
              </a>
              <a href="" className="flex items-center justify-center">
                {" "}
                <IoLogoLinkedin />
              </a>
              <a href="" className="flex items-center justify-center">
                {" "}
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTop;
