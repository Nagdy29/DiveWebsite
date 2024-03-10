import React from "react";
import Footer from "../footer/Footer";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import top from "../../images/banner-1.jpg";
import rab from "../../images/robot-illustration.svg";
import pass from "../../images/passion-innovation.jpg";

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
