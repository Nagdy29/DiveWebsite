import React from "react";
import log from "../../images/ogo.jfif";
const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer p-10 bg-[#070B28] text-base-content text-white ">
          <aside>
            <img src={log} alt="" className="w-44" />
          </aside>
          <nav className="text-yellow-50">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="text-yellow-50">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
