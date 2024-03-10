import React from "react";
import log from "../../images/ogo.jfif";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div>
        <footer
          className="footer p-10 bg-[#070B28]  text-white "
          style={{ direction: "rtl" }}
        >
          <aside>
            <Link to="/">
              {" "}
              <img src={log} alt="" className="w-44" />
            </Link>
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
