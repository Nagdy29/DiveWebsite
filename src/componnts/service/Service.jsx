import React from "react";
import top from "../../images/banner-1.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";

import NavTop from "../nav/NavTop";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import { AiFillDatabase } from "react-icons/ai";
import Footer from "../footer/Footer";

const Service = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0A0F36]">
        <div>
          <NavTop />
          <NavBar />
        </div>
        <div className="mt-5 mx-4 flex justify-center relative">
          <img src={top} alt="" className=" top-image   " />
      
          <div className="absolute text-con flex  text-white gap-4 justify-center items-center mt-3">
            {" "}
            <h2> الخدمات </h2>
            <FaLongArrowAltLeft />
            <Link to="/">
              {" "}
              <p>الاساسيه</p>{" "}
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-7">
          <h1 className="text-white text-[20px] mb-3"> كيف يمكننا المساعدة</h1>
          <p className="text-white text-[40px] my-3">حلولنا المذهلة</p>
          <p className="text-white text-[15px] my-3">
            استمتع بتجربة مجموعة شاملة من الحلول المبتكرة المصممة لمواجهة
            التحديات الفريدة التي تواجهك وتحقيق نتائج تحويلية لأعمالك.
          </p>
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
                لتحسين العروض وتعزيز مشاركة العملاء.- تطوير نماذج تنبؤية لتسهيل
                اتخاذ القرارات المستنيرة.
              </p>{" "}
            </div>
            <Link to="/works">
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
            </Link>
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
      </div>
      <Footer />
    </>
  );
};

export default Service;
