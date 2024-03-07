import React, { useState } from "react";
import NavTop from "./nav/NavTop";
import NavBar from "./nav/NavBar";
import home from "../images/home.png";
import about from "../images/about.png";
import { FaGooglePlay } from "react-icons/fa";
import video from "../images/video_2024-03-05_22-38-20.mp4";
import { AiFillDatabase } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pr1 from "../images/port-3.jpg";
import { Link } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Home = () => {
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
        <div className="Home-page min-h-screen">
          <div>
            <NavTop />
            <NavBar />
          </div>
          <div
            style={{ direction: "rtl" }}
            className="mt-7  flex-col flex xl:flex-row items-center justify-center xl:justify-between  gap-10 "
          >
            <div className=" mt-8 flex flex-col text-white max-w-96 mx-44">
              <h2 className="font-bold my-3 text-[45px]">
                علوم البيانات والتحليلات
              </h2>
              <p className="font-serif text-[20px] ">
                علوم البيانات والتحليلات هي مجال دراسة وتطبيق يرتكز على استخراج
                الأفكار والمعلومات القيمة من البيانات. يتضمن هذا المجال استخدام
                الأدوات والتقنيات الحاسوبية لتجميع وتنظيف وتحليل البيانات بهدف
                اكتشاف الأنماط والتقارير والتوصيات القائمة على البيانات.
              </p>
              <div className="my-3 flex items-center gap-7">
                <Link to="/about">
                  {" "}
                  <button className="btn btn-primary">معلومات عنا</button>
                </Link>
                <div className="App">
                  <button
                    onClick={playVideo}
                    className="btn-play flex items-center justify-center"
                  >
                    <FaGooglePlay className="icons" />
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
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={home}
                alt=""
                className="w-[300px] md:w-[500px] md:mx-36  "
              />
            </div>
          </div>
        </div>
        <div className="about">
          <div
            style={{ direction: "rtl" }}
            className="sect-about  flex-col flex xl:flex-row items-center justify-center xl:justify-between  gap-10 "
          >
            <div className=" mt-28 flex flex-col text-white max-w-96 mx-44">
              <h2 className="font-bold my-3 text-[20px]">معلومات عنا : </h2>
              <p className="font-serif text-[25px] w-[500px]  ">
                نساعدك في تحليل البيانات وتحويلها الي تقارير مفيده ونوفر لك
                مجموعه من الكورسات المميزه ف مجال تحليل البيانات ونحن نقدم
                مجموعة كبيرة من حلولنا الرقمية الجاهزة والمخصصة في العديد من
                المجالات، من خلال نماذج عمل متنوعة ومرنة تتناسب ورغبة كل عميل من
                عملائنا. ونقصد بالحلول الجاهزة، منتجاتنا التي تخدم شريحة عريضة
                من العملاء، ويمكن لهم أن يشتركوا فيها من خلال باقات متنوعة تناسب
                كل عميل واحتياجه. كما نقصد بحلولنا المخصصة المشاريع التي نقوم
                بتقديمها لعملائنا وفق احتياجاتهم الخاصة بهم وفق ما يحقق رغباتهم
                ويحقق طموحاتهم.
              </p>
              <button className="btn btn-primary my-4 ">اتصل بنا</button>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="my-20"
            >
              <img
                src={about}
                alt=""
                className="w-[300px] md:w-[500px] md:mx-36 img-about "
              />
            </div>
          </div>
        </div>
        <div className="  service bg-[#0a0f36]">
          <div className=" flex items-center justify-center flex-col   text-white">
            <h2 className="mt-24 text-[25px]">الخدمات</h2>
            <p className="my-4 text-[40px]">استكشف خدمات البيانات لدينا</p>
          </div>
          <div className="flex justify-center  flex-wrap flex-row">
            <div className=" flex flex-row justify-center  flex-wrap">
              <div class="service-card mx-3 my-4 w-[400px] flex justify-center items-center  h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  البيانات الكبيرة
                </p>
                <p class="text-gray-400 text-sm">
                  لشركة نفسها هي شركة ناجحة جدا
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[400px]  flex justify-center items-center  h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  تحليلات البيانات
                </p>
                <p class="text-gray-400 text-sm">
                  لشركة نفسها هي شركة ناجحة جدا
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[400px]  flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col items-star gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  التحليلات المدارة
                </p>
                <p class="text-gray-400 text-sm">
                  لشركة نفسها هي شركة ناجحة جدا
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[400px]  flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  علم البيانات
                </p>
                <p class="text-gray-400 text-sm">
                  لشركة نفسها هي شركة ناجحة جدا
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[400px]  flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  إدارة البيانات
                </p>
                <p class="text-gray-400 text-sm">
                  لشركة نفسها هي شركة ناجحة جدا
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[400px]  flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  انشاء مشروعات
                </p>
                <p class="text-gray-400 text-sm">
                  لشركة نفسها هي شركة ناجحة جدا
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#070B28]">
          <div className="flex flex-col justify-center items-center gap-2 text-white">
            <h1 className="mt-12 font-bold text-[20px] ">المشاريع</h1>
            <p className="my-1 font-mono text-[40px]">أعمالنا الناجحة</p>
          </div>
          <div className="">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              className="w-full"
            >
              <div className="">
                <div className="mx-36 my-7 ">
                  <div class="relative  card flex w-96 flex-col rounded-full bg-[##2C55AC] bg-clip-border text-gray-700 shadow-lg">
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
                          Data Analysis
                        </button>
                      </h5>
                      <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc felis ligula.
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
              </div>
            </Carousel>
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
