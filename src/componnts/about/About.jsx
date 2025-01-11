import React from "react";
import Footer from "../footer/Footer";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import top from "../../images/banner-1.jpg";
import rab from "../../images/robot-illustration.svg";
import pass from "../../images/passion-innovation.jpg";
import ali from "../../images/team/ali.jpg";
import Yussif from "../../images/team/Yussif Azzam.jpg";
import Ahmed from "../../images/team/Ahmed Saleh.jpg";
import Mohammed from "../../images/team/Mohammed Hedaya.jpg";
import n from "../../images/team/na.jpg";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
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
            معلومات عنا
          </h1>
          <div className="absolute text-con flex  text-white gap-4 justify-center items-center mt-3">
            <Link>
              {" "}
              <h2> معلومات عنا </h2>
            </Link>{" "}
            <FaLongArrowAltLeft />
            <Link to="/">
              {" "}
              <p>الاساسيه </p>{" "}
            </Link>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <h2 className="text-white font-bold text-[40px]">: عن دايف </h2>
        </div>
        <div>
          <div className="my-7 justify-center  lg:justify-between flex flex-col lg:flex-row gap-11  ">
            <div className=" flex items-center justify-center">
              <img
                src={rab}
                alt=""
                className="w-[300px] lg:w-[600px] mx-12  "
              />
            </div>
            <div className="  w-60 md:w-96  flex justify-center mx-16   md:mx-52 bg-[#262F5A] rounded-md  details-about  ">
              <h3 className="  text-white  p-5 font-extralight flex justify-center items-center    ">
                نحن نقدم مجموعة كبيرة من حلولنا الرقمية الجاهزة والمخصصة في
                العديد من المجالات، من خلال نماذج عمل متنوعة ومرنة تتناسب ورغبة
                كل عميل من عملائنا. ونقصد بالحلول الجاهزة، منتجاتنا التي تخدم
                شريحة عريضة من العملاء، ويمكن لهم أن يشتركوا فيها من خلال باقات
                متنوعة تناسب كل عميل واحتياجه. كما نقصد بحلولنا المخصصة المشاريع
                التي نقوم بتقديمها لعملائنا وفق احتياجاتهم الخاصة بهم وفق ما
                يحقق رغباتهم ويحقق طموحاتهم.
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-end mx-40 t my-3">
              <h2 className="font-bold text-[40px] text-[#673A8E]">
                : شغف الابتكار
              </h2>
            </div>
          </div>
          <div className="my-7 justify-center  lg:justify-between flex flex-col lg:flex-row gap-11 md:gap-0 ">
            <div className=" flex items-center justify-center">
              <img
                src={pass}
                alt=""
                className="w-[300px] lg:w-[500px] mx-12  "
              />
            </div>
            <div className="  w-60 md:w-[500px] flex justify-center mx-16   md:mx-52   details-about  ">
              <h3 className="  text-white  p-5 font-extralight flex justify-center items-center    ">
                نتطلع في «دف » عبر أهدافنا الاستراتيجية لبناء مجتمع معرفي يتواكب
                مع متطلبات العصر الرقمي، من أجل تسهيل الخدمات وتحقيق الاحتياجات
                للأفراد والمؤسسات والمجتمع، من خلال تقديم أفضل التقنيات المنافسة
                انطلاقًا من مبدأي: التطور التقني، ومستوى الخدمة الرفيع.
              </h3>
            </div>
          </div>
        </div>
        {/* الاشخاااص */}
        <div>
          <div className="flex justify-center my-3">
            <h2 className="text-white font-bold text-lg  lg:text-4xl ">
              : افراد التيم
            </h2>
          </div>
          <div>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ms-5 my-5 md:my-12">
              <div class="max-w-4xl my-12 md:my-2 flex items-center  flex-wrap mx-auto">
                <div
                  id="profile"
                  class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                >
                  <div class="p-4 md:p-12 text-center lg:text-left">
                    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">ALI RABEE </h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>{" "}
                      Co-Founder - Data Analyst
                    </p>
                    <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                      </svg>{" "}
                      Your Location - Beni Suef
                    </p>

                    <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap gap-2 items-center justify-between">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/ali-rabee-a42943260/"
                      >
                        <button
                          href="#"
                          class="flex overflow-hidden  items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-4 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                        >
                          <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                          <div class="flex items-center gap-1 justify-center">
                            <FaLinkedin size={15} className="text-blue-600" />
                            <span class="ml-1 text-white">
                              Star on Linkedin
                            </span>
                          </div>
                          <div class="ml-2 flex items-center gap-1 text-sm md:flex">
                            <svg
                              class="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                              data-slot="icon"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clip-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="w-full lg:w-3/12">
                  <img
                    src={ali}
                    class="rounded-none lg:rounded-full shadow-2xl hidden lg:block"
                  />
                </div>
              </div>
              <div class="max-w-4xl my-12 md:my-2 flex items-center  flex-wrap mx-auto">
                <div
                  id="profile"
                  class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                >
                  <div class="p-4 md:p-12 text-center lg:text-left">
                    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">
                      Mohammed Hedaya{" "}
                    </h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>{" "}
                      Mobil Application Developer
                    </p>
                    <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                      </svg>{" "}
                      Your Location - Beni Suef
                    </p>

                    <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/mohammedhedaya/"
                      >
                        <button
                          href="#"
                          class="flex overflow-hidden  items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-4 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                        >
                          <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                          <div class="flex items-center gap-1 justify-center">
                            <FaLinkedin size={15} className="text-blue-600" />
                            <span class="ml-1 text-white">
                              Star on Linkedin
                            </span>
                          </div>
                          <div class="ml-2 flex items-center gap-1 text-sm md:flex">
                            <svg
                              class="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                              data-slot="icon"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clip-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="w-full lg:w-3/12">
                  <img
                    src={Mohammed}
                    class="rounded-none lg:rounded-full shadow-2xl hidden lg:block"
                  />
                </div>
              </div>
              <div class="max-w-4xl my-12 md:my-2 flex items-center  flex-wrap mx-auto">
                <div
                  id="profile"
                  class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                >
                  <div class="p-4 md:p-12 text-center lg:text-left">
                    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">
                      Yussif Azzam{" "}
                    </h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>{" "}
                      co-founder & data engeneer
                    </p>
                    <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                      </svg>{" "}
                      Your Location - Beni Suef
                    </p>

                    <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/youssef-azam-%F0%93%82%86-a36816231/"
                      >
                        <button
                          href="#"
                          class="flex overflow-hidden  items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-4 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                        >
                          <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                          <div class="flex items-center gap-1 justify-center">
                            <FaLinkedin size={15} className="text-blue-600" />
                            <span class="ml-1 text-white">
                              Star on Linkedin
                            </span>
                          </div>
                          <div class="ml-2 flex items-center gap-1 text-sm md:flex">
                            <svg
                              class="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                              data-slot="icon"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clip-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="w-full lg:w-3/12">
                  <img
                    src={Yussif}
                    class="rounded-none lg:rounded-full shadow-2xl hidden lg:block"
                  />
                </div>
              </div>
              <div class="max-w-4xl my-12 md:my-2 flex items-center  flex-wrap mx-auto">
                <div
                  id="profile"
                  class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                >
                  <div class="p-4 md:p-12 text-center lg:text-left">
                    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">Ahmed Saleh</h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>{" "}
                      International Marketing & Export consultant and business
                      trainer
                    </p>
                    <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                      </svg>{" "}
                      Your Location - Beni Suef
                    </p>

                    <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/ahmad-qutkata-2a0b0b162/"
                      >
                        <button
                          href="#"
                          class="flex overflow-hidden  items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-4 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                        >
                          <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                          <div class="flex items-center gap-1 justify-center">
                            <FaLinkedin size={15} className="text-blue-600" />
                            <span class="ml-1 text-white">
                              Star on Linkedin
                            </span>
                          </div>
                          <div class="ml-2 flex items-center gap-1 text-sm md:flex">
                            <svg
                              class="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                              data-slot="icon"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clip-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="w-full lg:w-3/12">
                  <img
                    src={Ahmed}
                    class="rounded-none lg:rounded-full shadow-2xl hidden lg:block"
                  />
                </div>

                <div class="absolute top-0 right-0 h-12 w-18 p-4">
                  <button class="js-change-theme focus:outline-none">🌙</button>
                </div>
              </div>
              <div class="max-w-4xl my-12 md:my-2 flex items-center  flex-wrap mx-auto">
                <div
                  id="profile"
                  class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                >
                  <div class="p-4 md:p-12 text-center lg:text-left">
                    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">
                      Mohamed Nagdy
                    </h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>{" "}
                      Mern Stack Developer
                    </p>
                    <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                      </svg>{" "}
                      Your Location - Beni Suef
                    </p>

                    <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                      <a
                        target="_blank"
                        href="ww.linkedin.com/in/mohamed-nagdy-032b63289"
                      >
                        <button
                          href="#"
                          class="flex overflow-hidden  items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-4 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                        >
                          <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                          <div class="flex items-center gap-1 justify-center">
                            <FaLinkedin size={15} className="text-blue-600" />
                            <span class="ml-1 text-white">
                              Star on Linkedin
                            </span>
                          </div>
                          <div class="ml-2 flex items-center gap-1 text-sm md:flex">
                            <svg
                              class="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                              data-slot="icon"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clip-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="w-full lg:w-3/12">
                  <img
                    src={n}
                    class="rounded-none lg:rounded-full shadow-2xl hidden lg:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-44">
          <div className="flex md:justify-center justify-end text-[#673A8E] text-[45px] mx-8">
            <h2>:قيمنا</h2>
          </div>
          <div className="card-about" style={{ direction: "rtl" }}>
            <div className=" flex flex-col md:flex-row  flex-wrap justify-center ">
              <div
                class=" w-auto   md:w-[500px] gap-2 my-3  px-3 "
                style={{ direction: "rtl" }}
              >
                <div class="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
                  <p class="text-white text-2xl my-4">الثقة</p>
                  <p class="text-black text-lg  ">
                    تعزيز الأمانة والنزاهة والانفتاح بين الموظفين والشركاء
                    والعملاء.
                  </p>
                </div>
              </div>
              <div
                class=" w-auto   md:w-[500px] gap-2 my-3  px-3 "
                style={{ direction: "rtl" }}
              >
                <div class="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
                  <p class="text-white text-2xl my-4">المرونة</p>
                  <p class="text-black text-lg  ">
                    إطلاق قدرات الموظفين للاستجابة السريعة بما يُسعد عملاءنا.
                  </p>
                </div>
              </div>
              <div
                class=" w-auto   md:w-[500px] gap-2 my-3  px-3 "
                style={{ direction: "rtl" }}
              >
                <div class="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
                  <p class="text-white text-2xl my-4">إسعاد العميل</p>
                  <p class="text-black text-lg  ">
                    وضع رحلة العميل في صميم كل مُنتج وخدمة.
                  </p>
                </div>
              </div>
              <div
                class=" w-auto   md:w-[500px] gap-2 my-3  px-3 "
                style={{ direction: "rtl" }}
              >
                <div class="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
                  <p class="text-white text-2xl my-4">الابتكار</p>
                  <p class="text-black text-lg  ">
                    المبادرة والتفكير خارج الصندوق بما يُرضي شركاءنا وعملاءنا.
                  </p>
                </div>
              </div>

              <div
                class=" w-auto   md:w-[500px] gap-2 my-3  px-3 "
                style={{ direction: "rtl" }}
              >
                <div class="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
                  <p class="text-white text-2xl my-4">الجدارة</p>
                  <p class="text-black text-lg  ">
                    الالتزام تجاه الموظفين والوفاء بوعودنا للعملاء والشركاء.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
