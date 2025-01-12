import React from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import top from "../../images/banner-1.jpg";
import w1 from "../../images/project/w1.jpg";
import w12 from "../../images/project/12.jpg";
import w13 from "../../images/project/13.jpg";
import w2 from "../../images/project/w2.jpg";
import w21 from "../../images/project/21.jpg";
import w23 from "../../images/project/23.jpg";

export const Work = () => {
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

              <div class="grid gap-6 text-center md:grid-cols-3 mx-4">
                <div>
                  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                    <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                    <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                      <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                    </div>
                    <div class="p-6">
                      <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                      <hr />
                      <p class="mt-4">
                        <span class="inline-block pe-2 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                          >
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                          </svg>
                        </span>
                        Lorem ipsum dolor sit amet eos adipisci, consectetur
                        adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                    <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                    <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                      <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                    </div>
                    <div class="p-6">
                      <h4 class="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                      <hr />
                      <p class="mt-4">
                        <span class="inline-block pe-2 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                          >
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                          </svg>
                        </span>
                        Neque cupiditate assumenda in maiores repudi mollitia
                        architecto.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                    <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                    <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                      <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                    </div>
                    <div class="p-6">
                      <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
                      <hr />
                      <p class="mt-4">
                        <span class="inline-block pe-2 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                          >
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                          </svg>
                        </span>
                        Delectus impedit saepe officiis ab aliquam repellat rem
                        unde ducimus.
                      </p>
                    </div>
                  </div>
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
