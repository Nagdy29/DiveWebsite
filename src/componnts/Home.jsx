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
import { FaPeopleGroup } from "react-icons/fa6";
import { GiHistogram } from "react-icons/gi";
import CountUp from "react-countup";
import Footer from "./footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

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
      <div className="relative">
        <div className="Home-page min-h-screen">
          <div>
            <NavTop />
            <NavBar />
          </div>
          <div
            style={{ direction: "rtl" }}
            className="mt-7  flex-col flex xl:flex-row items-center justify-center md:justify-between  gap-10 "
          >
            <div className=" mt-8 flex flex-col text-white max-w-96 mx-20  ">
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
              className=""
            >
              <img
                src={home}
                alt=""
                className="w-[200px] md:w-[500px] md:mx-36  "
              />
            </div>
          </div>
        </div>
        <div className="about">
          <div
            style={{ direction: "rtl" }}
            className="sect-about  flex-col flex xl:flex-row items-center justify-center xl:justify-between  gap-10 "
          >
            <div className=" mt-28 flex flex-col text-white max-w-96 mx-24">
              <h2 className="font-bold my-3 text-[20px]">معلومات عنا : </h2>
              <p className="font-serif text-[25px] md:w-[500px] w-[300px]   ">
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
              <Link to="/contact" className="w-full">
                <button className="btn btn-primary my-4 w-full ">
                  اتصل بنا
                </button>
              </Link>
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
            <p className="my-4 text-[40px]  ">استكشف خدمات البيانات لدينا</p>
          </div>
          <div className="flex justify-center  flex-wrap flex-row">
            <div className=" flex flex-row justify-center  flex-wrap">
              <div class="service-card mx-3 my-4 w-[300px] md:w-[400px] flex justify-center items-center  h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  نماذج تعلم الآلة
                </p>
                <p class="text-gray-400 text-sm">
                  - بناء استراتيجيات تجزئة العملاء وتحليل دورات حياة العملاء
                  لتحسين العروض وتعزيز مشاركة العملاء.- تطوير نماذج تنبؤية
                  لتسهيل اتخاذ القرارات المستنيرة.
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[300px] md:w-[400px] flex justify-center items-center  h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  تحليلات البيانات
                </p>
                <p class="text-gray-400 text-sm">
                  أطلق العنان للإمكانات الكاملة لبيانات الشركة من خلال التصميم
                  الشامل وتطوير لوحات المعلومات والتقارير وبوابات المعلومات
                  التحليلية وحلول الخدمة الذاتية.
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[300px] md:w-[400px] flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col items-star gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  تطبيقات الطاقة
                </p>
                <p class="text-gray-400 text-sm">
                  واجهة سهلة الاستخدام: يعمل Power Apps على تبسيط عملية إنشاء
                  تطبيقات مخصصة، وتمكين الشركات الصغيرة من ابتكار البيانات
                  وتحليلها دون الحاجة إلى معرفة واسعة بالبرمجة.
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[300px] md:w-[400px] flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  مراقبة البيانات
                </p>
                <p class="text-gray-400 text-sm">
                  ضمان الامتثال لمتطلبات NDMO من خلال حلولنا القوية.{" "}
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[300px] md:w-[400px] flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  الاستشارات التقنية
                </p>
                <p class="text-gray-400 text-sm">
                  يقدم مستشارونا معرفتهم الواسعة لتحليل التحديات التي يواجهها
                  عملائنا والتوصية بحلول مخصصة تلبي المتطلبات المحددة لكل شركة
                  وصناعة.
                </p>{" "}
              </div>
              <div class="service-card mx-3 my-4 w-[300px] md:w-[400px] flex justify-center items-center h-[250px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  flex-col  gap-3 transition-all duration-300 group hover:bg-[#202127]">
                <div>
                  <AiFillDatabase size={40} />
                </div>
                <p class="font-bold text-3xl group-hover:text-white text-black/80">
                  انشاء المواقع والتطبيقات
                </p>
                <p class="text-gray-400 text-sm">
                  يقدم مستشارونا معرفتهم الواسعه لي انشاء المواقع والتطبيقات{" "}
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="why-chose" style={{ direction: "rtl" }}>
            <div className="mt-11 text-white mx-20">
              <h2 className="text-[40px]">لماذا أخترتنا :</h2>
            </div>
            <div className="card-chose flex mt-9 pb-5 justify-center flex-wrap gap-8 lg:gap-1">
              <div className="flex justify-center items-center flex-wrap gap-4 mx-8">
                <div class="group flex flex-col justify-start items-start gap-2 w-72 md:w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                  <div class="">
                    <div className="flex justify-center items-center gap-3 my-3">
                      {" "}
                      <h2 class="text-2xl font-bold mb-2 text-gray-800">
                        الخبرات
                      </h2>
                      <FaPeopleGroup size={30} />
                    </div>
                    <p class="text-black  line-clamp-5">
                      يتمتع فريقنا من المحترفين المتمرسين بالمعرفة والخبرة
                      الواسعة في الصناعة، مما يضمن أننا نقدم حلولًا من الدرجة
                      الأولى تلبي احتياجات عملك المحددة.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-wrap gap-4 mx-8">
                <div class="group flex flex-col justify-start items-start gap-2 w-72 md:w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                  <div class="">
                    <div className="flex justify-center items-center gap-3 my-3">
                      {" "}
                      <h2 class="text-2xl font-bold mb-2 text-gray-800">
                        سجل حافل
                      </h2>
                      <GiHistogram size={30} />
                    </div>
                    <p class="text-black  line-clamp-5">
                      بفضل سجلنا الحافل بالمشاريع الناجحة والعملاء الراضين،
                      أثبتنا باستمرار قدرتنا على تحقيق نتائج استثنائية وتجاوز
                      التوقعات.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-wrap gap-4 mx-8">
                <div class="group flex flex-col justify-start items-start gap-2 w-72 md:w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                  <div class="">
                    <div className="flex justify-center items-center gap-3 my-3">
                      {" "}
                      <h2 class="text-2xl font-bold mb-2 text-gray-800">
                        تتمحور حول العميل
                      </h2>
                      <FaPeopleGroup size={30} />
                    </div>
                    <p class="text-black  line-clamp-5">
                      نحن نعطي الأولوية لفهم أهدافك وتحدياتك الفريدة، ونعمل معك
                      بشكل وثيق لتطوير استراتيجيات وحلول مخصصة تدفع عملك إلى
                      الأمام.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#070B28] flex justify-center  py-5 ">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-white text-[40px]">إحصائيات الشركة</h2>
            <p className="text-white text-[20px]">اعرف المزيد عنا بالأرقام</p>
          </div>
        </div>
        <div className="se-count bg-[#070B28] flex justify-center ">
          <div className="flex justify-between  flex-col md:flex-row  mx-20 center-count w-full mb-7 rounded-full ">
            <div className="flex flex-col items-center my-3 text-white ">
              <h3>
                <CountUp end={30} className="text-[45px]" />{" "}
                <span className="text-[35px]">+</span>
              </h3>
              <p className="text-[25px]">المشاريع المنجزة</p>
            </div>
            <div className="flex flex-col items-center my-3 text-white ">
              <h3>
                <CountUp end={20} className="text-[45px]" />{" "}
                <span className="text-[35px]">+</span>
              </h3>
              <p className="text-[25px]"> Clients</p>
            </div>
            <div className="flex flex-col items-center my-3 text-white ">
              <h3>
                <CountUp end={100} className="text-[45px]" />{" "}
                <span className="text-[35px]">%</span>
              </h3>
              <p className="text-[25px]"> زبائن يشعرون بالرضى</p>
            </div>
          </div>
        </div>
        <div className=" fixed z-50 lg:right-4 md:bottom-8  left-5 bottom-28  ">
          <a
            href="https://wa.me/01066070489"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaWhatsapp size={45} className="text-green-600 img-about" />
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
