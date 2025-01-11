import React from "react";
import logo from "../../images/ogo.jfif";
import { Link } from "react-router-dom";

import { BsFillClipboardDataFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <div className="Naavbar">
        <div
          className="navbar bg-[#0A0F36] text-white "
          style={{ direction: "rtl" }}
        >
          <div className="navbar-start">
            <div className="dropdown bg-black">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-info lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm  bg-[#0A0F36] dropdown-content mt-8 z-[1] p-2 shadow  rounded-box w-52"
              >
                <li>
                  <div className=" flex gap-6 links-nav flex-col">
                    <Link className="text-[18px] links " to="/about">
                      عن دايف
                    </Link>

                    <Link to="/service" className="text-[18px] links  ">
                      الخدمات
                    </Link>
                    <Link to="/contact" className="text-[18px] links ">
                      اتصل بنا
                    </Link>
                    <Link to="/skils" className="text-[18px] links ">
                      مهارتنا
                    </Link>
                    <Link to="/works" className="text-[18px] links ">
                      أعمالنا
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mx-8 flex md:justify-start justify-center  ">
              <Link to="/" className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center">
                  <h2 className="text-[30px] font-bold text-[#4C42C5]">
                    Dive{" "}
                  </h2>
                  <p>For Analytics Services</p>
                </div>
                <div>
                  <BsFillClipboardDataFill
                    size={35}
                    className="text-[#4C42C5]"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className=" flex gap-6 links-nav">
              <Link className="text-[18px] links " to="/about">
                عن دايف
              </Link>

              <Link to="/service" className="text-[18px] links  ">
                الخدمات
              </Link>
              <Link to="/contact" className="text-[18px] links ">
                اتصل بنا
              </Link>
              <Link to="/skils" className="text-[18px] links ">
                مهارتنا
              </Link>
              <Link to="/works" className="text-[18px] links ">
                أعمالنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
