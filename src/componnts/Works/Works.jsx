import React, { useState } from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaLongArrowAltLeft } from "react-icons/fa";
import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import top from "../../images/banner-1.jpg";
import w1 from "../../images/project/w1.jpg";
import w12 from "../../images/project/12.jpg";
import w13 from "../../images/project/13.jpg";
import w2 from "../../images/project/w2.jpg";
import w21 from "../../images/project/21.jpg";
import w23 from "../../images/project/23.jpg";
import video from "../../images/v1.mp4";
import { MdOutlineVideoLibrary } from "react-icons/md";

export const Work = () => {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };
  return (
    <>
      <div>
        <div className="min-h-screen bg-[#0A0F36]">
          <div>
            <NavTop />
            <NavBar />
          </div>
          <div className="mt-5 mx-4 flex justify-center relative">
            <img src={top} alt="" className=" top-image   " />
            <h1 className="absolute top-28 justify-center items-center text-white text-[45px]  ">
              أعمالنا
            </h1>
            <div className="absolute text-con flex  text-white gap-4 justify-center items-center mt-3">
              <Link>
                {" "}
                <h2>أعمالنا </h2>
              </Link>{" "}
              <FaLongArrowAltLeft />
              <Link to="/">
                {" "}
                <p>الاساسيه </p>{" "}
              </Link>
            </div>
          </div>
          {/* الاعمال */}
          <div>
            <div className="flex justify-center md:justify-end mx-4 my-8 lg:my-5 ">
              <h2 className="text-white font-bold text-[40px]">
                {" "}
                : بعض الاعمال{" "}
              </h2>
            </div>
            {/* work */}
            <div className=" mx-16 my-12 ">
              <div className="carousel w-full rounded-2xl my-6 ">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src={w1} className="w-full" />
                  <div className="absolute z-40 bottom-5    left-[50%]">
                    <button
                      className="btn font-bold"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      المشروع كامل
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg text-slate-800">
                          المشروع الاول !
                        </h3>
                        <div
                          id="slide1"
                          className="carousel-item relative w-full"
                        >
                          <img src={w1} className="w-full" />
                        </div>
                        <div
                          id="slide"
                          className="carousel-item relative w-full"
                        >
                          <img src={w12} className="w-full" />
                        </div>
                        <div
                          id="slide"
                          className="carousel-item relative w-full"
                        >
                          <img src={w13} className="w-full" />
                        </div>
                      </div>
                    </dialog>
                  </div>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img src={w2} className="w-full" />
                  <div className="absolute z-40 bottom-6 left-[50%]">
                    <label htmlFor="my_modal_7" className="btn">
                      المشروع كامل
                    </label>

                    <input
                      type="checkbox"
                      id="my_modal_7"
                      className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <h3 className="text-lg font-bold text-slate-700">
                          المشروع الثاني !
                        </h3>
                        <div
                          id="slide1"
                          className="carousel-item relative w-full"
                        >
                          <img src={w2} className="w-full" />
                        </div>
                        <div
                          id="slide1"
                          className="carousel-item relative w-full"
                        >
                          <img src={w21} className="w-full" />
                        </div>
                        <div
                          id="slide1"
                          className="carousel-item relative w-full"
                        >
                          <img src={w23} className="w-full" />
                        </div>
                      </div>
                      <label className="modal-backdrop" htmlFor="my_modal_7">
                        Close
                      </label>
                    </div>
                  </div>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* test  */}
          <div>
            <section class="text-black ">
              <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3 class="mb-6 text-3xl font-bold text-white">
                  {" "}
                  : آراء العمال{" "}
                </h3>
              </div>

              <div class="flex justify-center items-center ">
                <div className="App my-5">
                  <button
                    onClick={playVideo}
                    className="btn-play flex items-center justify-center"
                  >
                    <MdOutlineVideoLibrary className="icons hover:translate-x-1 duration-500 " />
                  </button>
                  {showVideo && (
                    <div className="video-overlay">
                      <video controls autoPlay>
                        <source src={video} type="video/mp4" pl />
                        Your browser does not support the video tag.
                      </video>
                      <div className="close-button" onClick={closeVideo}>
                        &times;
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
