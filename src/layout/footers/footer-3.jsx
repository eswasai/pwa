import Brwoser from "@/common/brwoser";
import { CopyRight } from "@/common/social-links";
import EmailIcon from "@/svg/email";
import EmailTwo from "@/svg/email-2";
import PhoneTwo from "@/svg/phone-2";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import qr_code from "@/assets/img/footer/dwnld-1.png";
import i_phone from "@/assets/img/footer/dwnld-2.png";
import google_ply from "@/assets/img/footer/dwnld-3.png";

import logo from "@/assets/img/logo/logo-with-text.svg";

const footer_content = {
  bg_img: "/assets/img/footer/overly.png",
  title: (
    <>
      Get Started with Framespik Today.{" "}
      <span>Streamline Your Business & Achieve More.</span>
    </>
  ),
  btn_text: "Try it on Now",
  phone: "9390726366",
  email: "team@framespik.com",
  address: <>Madhapur, Hyderabad, India.</>,

  footer_lisks: [
    {
      id: 1,
      cls_1: "col-xl-3 col-lg-3",
      cls_2: "footer-col-3-2",
      title: "Info",
      delay: ".7s",
      links: [
        { name: "FAQ", link: "/faq" },
        { name: "Career", link: "/career" },
        { name: "About Framespik", link: "/about" },
        { name: "Learning School", link: "/learning-school" },
        { name: "Terms & Conditions", link: "/terms-and-conditions" },
        { name: "Privacy Policy", link: "/privacy-policy" },
      ],
    },
    {
      id: 2,
      cls_1: "col-xl-2 col-lg-2",
      cls_2: "footer-col-3-3",
      title: "Services",
      delay: ".9s",
      links: [
        { name: "Blogs", link: "/blogs" },
        { name: "CRM", link: "/crm-tools" },
        { name: "Storage", link: "/storage" },
        { name: "Ai Share", link: "/ai-image-delivery" },
        { name: "Branding App", link: "/custom-app" },
        { name: "Branding Website", link: "/custom-website" },
      ],
    },
  ],

  social_links: [
    {
      link: "https://www.youtube.com/@framespikdotcom",
      target: "_blank",
      icon: "fab fa-youtube",
    },
    {
      link: "https://x.com/framespik",
      target: "_blank",
      icon: "fab fa-twitter",
    },
    {
      link: "https://www.linkedin.com/company/framespik/",
      target: "_blank",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "https://www.instagram.com/framespik/",
      target: "_blank",
      icon: "fab fa-instagram",
    },
    {
      link: "https://api.whatsapp.com/send?phone=919390726366&text=Hi%20Framespik%20Team%2C%20I%E2%80%99m%20interested%20in%20purchasing%20software%E2%80%94could%20you%20share%20details%20about%20your%20offerings%20and%20pricing%3F",
      target: "_blank",
      icon: "fab fa-whatsapp",
    },
  ],
};
const {
  bg_img,
  title,
  btn_text,
  footer_lisks,
  social_links,
  phone,
  email,
  address,
} = footer_content;

// footer slider data
const footer_slider_data = [
  "Photo-selection",
  "Unlimited Storage",
  "All-in-one CRM",
  "Team management",
  "Scheduling",
  "Ai Share",
  "Data Backup",
  "Vision Camera",
  "Work updates",
  "Payment Remainders",
  "Own Branding App",
  "Own Branding Website",
];
// slider setting
const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {},
    },
    {
      breakpoint: 992,
      settings: {},
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const FooterThree = () => {
  return (
    <>
      <div
        className="footer-bottom-content tp-browser-bg-shape"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="tp-browser-details-area pt-110 pb-30 p-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-9">
                <div className="tp-browser-section-box d-flex justify-content-between align-items-center mb-30">
                  <h3 className="tp-section-title-3">{title}</h3>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="tp-browser-btn text-lg-end text-start mb-40">
                  <Link className="tp-btn-blue-lg tp-btn-hover" href="./get-started">
                    <span>{btn_text}</span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center">
                  <Brwoser textClass="text-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="tp-footer-slide pb-80">
            <div className="container-fluid g-0">
              <div className="row g-0 justify-content-center">
                <Slider {...setting} className="footer-slide-active">
                  {footer_slider_data.map((item, i) => (
                    <div key={i} className="footer-slide-wrapper">
                      <div className="footer-slide-item">
                        <i className="fal fa-check"></i>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="tp-footer__pl-pr">
            <div className="tp-footer__area tp-footer__tp-border-bottom">
              <div className="container">
                <div className="row">
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-footer__widget footer-widget-3 footer-col-3-1">
                      <div className="tp-footer__logo mb-25">
                        <Link href="/">
                          <Image style={{ width: "50%" }} src={logo} alt="" />
                        </Link>
                      </div>
                      <div className="tp-footer__contact-info">
                        <p>{address}</p>
                        <ul>
                          <li>
                            <span>
                              <PhoneTwo />
                            </span>
                            <Link className="first-child" href={`tel:${phone}`}>
                              {phone}
                            </Link>
                          </li>
                          <li>
                            <span>
                              <EmailTwo />
                            </span>
                            <Link href={`mailto:${email}`}>{email}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {footer_lisks.map((item, i) => (
                    <div
                      key={i}
                      className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`}
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <div
                        className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}
                      >
                        <h4 className="tp-footer__widget-title">
                          {item.title}
                        </h4>
                        <div className="tp-footer__content">
                          <ul>
                            {item.links.map((link, i) => (
                              <li key={i}>
                                <Link href={link.link}>{link.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div
                    className="col-xl-4 col-lg-4 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                  >
                    <div className="tp-footer__widget footer-widget-3 footer-col-3-4">
                      <h4 className="tp-footer__widget-title">Download</h4>
                      <div className="tp-footer__input mb-35 p-relative">
                        <div className="tp-footer__download-box d-flex align-items-center">
                          <div
                            className="tp-footer__qrcode mr-15"
                            style={{ maxWidth: "25%" }}
                          >
                            <Link href="/download">
                              {" "}
                              <Image src={qr_code} alt="qr-code" />
                            </Link>
                          </div>
                          <div className="tp-footer__app">
                            <Link href="#">
                              <Image
                                className="mb-15"
                                src={i_phone}
                                alt="them-pure"
                              />
                            </Link>
                            <Link href="#">
                              <Image src={google_ply} alt="them-pure" />
                            </Link>
                          </div>
                        </div>
                        {/* <form onSubmit={(e) => e.preventDefault()}>
                          <input
                            type="text"
                            placeholder="Business email adress"
                          />
                          <span>
                            <EmailIcon />
                          </span>
                          <button>
                            <RightArrow />
                          </button>
                        </form> */}
                      </div>
                      <div className="tp-footer__social-3">
                        <h4>Social media</h4>
                        {social_links.map((l, i) => (
                          <Link
                            key={i}
                            href={l.link}
                            target={l.target ? l.target : ""}
                          >
                            <i className={l.icon}></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterThree;
