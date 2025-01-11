import React from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import top from "../../images/banner-1.jpg";

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
            <div className=" mx-5 ">
              <div className="carousel w-full rounded-2xl my-6 ">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                    className="w-full"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">
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
                <h3 class="mb-6 text-3xl font-bold text-white">Testimonials</h3>
                <p class="mb-6 pb-2 md:mb-12 md:pb-0  text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  veniam.
                </p>
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
