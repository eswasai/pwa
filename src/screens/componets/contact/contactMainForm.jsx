import ContactUsForm from "@/forms/contact-us-form";
import SendIcon from "@/svg/send-icon";
import Link from "next/link";
import React from "react";

import img from "@/assets/img/contact/contact-icon-sm-4.png";
import Image from "next/image";

const contact_content = {
  sub_title: "CONTACT US",
  tilte: (
    <>
      We'd love to <br /> hear From{" "}
      <span>
        {" "}
        <SendIcon />{" "}
      </span>{" "}
      you.
    </>
  ),
  info: (
    <>
      While we're good with smoke signals, there <br /> are easier ways to get
      in touch.
    </>
  ),
};
const { sub_title, tilte, info } = contact_content;

const ContactFormArea = () => {
  return (
    <>
      <div className="contact-form-area pb-120 mt-150">
        <div className="container">
          <div className="row gx-0">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-form-left">
                <div className="contact-form-section-box pb-80">
                  <h5 className="inner-section-subtitle">{sub_title}</h5>
                  <h4 className="tp-section-title pb-10">{tilte}</h4>
                  <p>{info}</p>
                </div>
                <div className="contact-form-social-box p-relative">
                  <div className="contact-form-social-item">
                    <Link
                      href="https://www.youtube.com/@framespikdotcom"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <Link
                      href="https://x.com/framespik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/framespik/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/framespik/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                      href="https://api.whatsapp.com/send?phone=919390726366&text=Hi%20Framespik%20Team%2C%20I%E2%80%99m%20interested%20in%20purchasing%20software%E2%80%94could%20you%20share%20details%20about%20your%20offerings%20and%20pricing%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </Link>
                  </div>

                  <div className="contact-form-section-img">
                    <Image src={img} alt="theme-pure" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="contact-form-right-warp">
                <div className="postbox__comment-form">
                  <ContactUsForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormArea;
