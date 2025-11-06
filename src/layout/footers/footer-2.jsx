import EmailTwo from "@/svg/email-2";
import PhoneTwo from "@/svg/phone-2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// img import
import logo from "@/assets/img/logo/logo-with-text.svg";
import qr_code from "@/assets/img/footer/dwnld-1.png";
import i_phone from "@/assets/img/footer/dwnld-2.png";
import google_ply from "@/assets/img/footer/dwnld-3.png";

const footer_content = {
  address: <>Madhapur, Hyderabad, India.</>,
  phone: "9390726366",
  email: "team@framespik.com",
  download: "Download App",
  footer_lisks: [
    {
      id: 1,
      cls: "footer-col-2-2",
      title: "Info",
      delay: ".5s",
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
      cls: "footer-col-2-3",
      title: "Services",
      delay: ".7s",
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
const { address, phone, email, footer_lisks, download, social_links } =
  footer_content;

const FooterTwo = () => {
  const [isOppen, setIsOppen] = useState(false);
  const oppenLan = () => {
    setIsOppen(!isOppen);
  };
  return (
    <>
      <footer>
        <div className="tp-footer__pl-pr grey-bg-2">
          <div className="tp-footer__area pt-90 tp-footer__tp-border-bottom">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                    <div className="tp-footer__logo mb-25">
                      <Link href="/">
                        <Image className="w-50" src={logo} alt="them-pure" />
                      </Link>
                    </div>
                    <div className="tp-footer__contact-info">
                      <Link
                        style={{ color: "#000" }}
                        href=" https://maps.app.goo.gl/wAr5FcsvnVgKDLS39"
                        target="_blank"
                      >
                        {address}
                      </Link>
                      <ul style={{ paddingLeft: "0%" }}>
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
                    className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay={item.delay}
                  >
                    <div
                      className={`tp-footer__widget footer-widget-2 ${item.cls}`}
                    >
                      <h4 className="tp-footer__widget-title">{item.title}</h4>
                      <div className="tp-footer__content">
                        <ul style={{ paddingLeft: "0%" }}>
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
                  className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-4">
                    <h4 className="tp-footer__widget-title">{download}</h4>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright__area pt-20 pb-20">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__social">
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
      </footer>
    </>
  );
};

export default FooterTwo;
