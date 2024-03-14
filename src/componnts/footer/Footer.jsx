import React from "react";
import log from "../../images/ogo.jfif";
import { Link } from "react-router-dom";
import { BsFillClipboardDataFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div>
        <footer
          className="footer p-10 bg-[#070B28]  text-white "
          style={{ direction: "rtl" }}
        >
          <aside>
            <div className="mx-8 ">
              <Link to="/" className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center gap-5">
                  <h2 className="text-[40px] font-bold text-[#4C42C5]">
                    Dive{" "}
                  </h2>
                  <p className="text-[20px] font-mono">
                    For Analytics Services
                  </p>
                </div>
                <div>
                  <BsFillClipboardDataFill
                    size={45}
                    className="text-[#4C42C5]"
                  />
                </div>
              </Link>
            </div>
          </aside>
          <nav className="text-yellow-50">
            <h6 className="footer-title">خدمات</h6>
            <a className="link link-hover">تحليل بيانات</a>
            <a className="link link-hover">التعلم الالي</a>
            <a className="link link-hover">بايثون</a>
            <a className="link link-hover">خادم مايكروسوفت SQL</a>
          </nav>
          <nav className="text-yellow-50">
            <h6 className="footer-title">الشركه</h6>
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
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
