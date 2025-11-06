import Image from "next/image";
import React from "react";

import icon_1 from "@/assets/img/contact/contact-icon-sm-1.png";
import icon_2 from "@/assets/img/contact/contact-icon-sm-2.png";
import icon_3 from "@/assets/img/contact/contact-icon-sm-3.png";

const contactData = [
  {
    id: 1,
    icon: icon_1,
    title: "contact@softuch.com",
    link: "mailto:contact@softuch.com",
  },
  {
    id: 2,
    icon: icon_2,
    title: "+1-202-555-0144",
    link: "tel:+1-202-555-0144",
  },
  {
    id: 3,
    icon: icon_3,
    title: "35 Park Avenue, UK",
    link: "https://www.google.com.bd/maps/@23.7806365,90.4193257,12z",
  },
];

const ContactInner = () => {
  return (
    <div className="contact-inner-area pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-inner-title-sm-wrap text-center mb-50">
              <h4 className="contact-inner-title-sm">Book a Demo!</h4>
              <p>We will contact again after receiving your request in 24h</p>
            </div>
          </div>
        </div>
        <div className="contact-inner-wrapper">
          <div className="row gx-0">
            {contactData.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4">
                <div className="contact-inner-item d-flex align-items-center justify-content-center">
                  <div className="contact-inner-img">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="contact-inner-img"
                    />
                  </div>
                  <div className="contact-inner-link">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInner;
