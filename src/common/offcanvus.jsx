import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenus from "../layout/headers/mobile-menus";

// images import
import logo from "../../public/assets/img/logo/light-logo-with-text.svg";
import canvus_img_1 from "../../public/assets/img/project/project-inner-4.jpg";
import canvus_img_2 from "../../public/assets/img/project/project-inner-5.jpg";
import canvus_img_3 from "../../public/assets/img/project/project-inner-6.jpg";
import canvus_img_4 from "../../public/assets/img/project/project-inner-7.jpg";

const Offcanvus = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className="tpoffcanvas-area">
        <div
          className={`tpoffcanvas ${sidebarOpen && "opened"}`}
          style={{ backgroundColor: "#000" }}
        >
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo text-center">
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              <Image src={logo} alt="theme-pure" />
            </Link>
          </div>
          <div className="mobile-menu mean-container">
            <MobileMenus />
          </div>
          {/* <div className="tpoffcanvas__instagram text-center">
                    <div className="tpoffcanvas__instagram-title">
                        <h4>instagram</h4>
                    </div>  
                    <Link href="#"><Image src={canvus_img_1}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_2}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_3}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_4}  alt="theme-pure" /></Link>
                    </div> */}
          <div className="tpoffcanvas__info text-center">
            <h4 className="offcanva-title">we are here</h4>
            <Link
              href="https://www.google.com/maps/@23.506657,90.3443647,7z"
              target="_blank"
            >
              3rd floor, Y.S.Rao Towers, <br />
              Madhapur, Hyderabad 530028.
            </Link>
          </div>
          <div className="tpoffcanvas__social">
            <div className="social-icon text-center">
              <Link
                href="https://www.youtube.com/@framespikdotcom"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="https://x.com/framespik" target="_blank">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/framespik/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=919390726366&text=Hi%20Framespik%20Team%2C%20I%E2%80%99m%20interested%20in%20purchasing%20software%E2%80%94could%20you%20share%20details%20about%20your%20offerings%20and%20pricing%3F"
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${sidebarOpen && "apply"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Offcanvus;
