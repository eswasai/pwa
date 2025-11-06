import React from "react";

import mumbai from "@/assets/img/contact/contact-icon-mumbai.png";
import hyderabad from "@/assets/img/contact/contact-icon-hyderabad.png";
import delhi from "@/assets/img/contact/contact-icon-delhi.png";
import chennai from "@/assets/img/contact/contact-icon-chennai.png";
import bangalore from "@/assets/img/contact/contact-icon-bangalore.png";

import Image from "next/image";
import Link from "next/link";

// office location data
const office_data = [
  {
    id: 1,
    cls: "p-relative",
    img: bangalore,
    location: "Bangalore, India",
    address: <>team@framespik.com</>,
  },
  {
    id: 2,
    cls: "p-relative",
    img: hyderabad,
    badge: "Main Office",
    location: "Hyderabad, India",
    address: <>Madhapur</>,
  },
  {
    id: 3,
    cls: "p-relative",
    img: chennai,
    location: "Chennai, India",
    address: <>team@framespik.com</>,
  },
  {
    id: 4,
    cls: "p-relative",
    img: delhi,
    location: "Delhi, India",
    address: <>team@framespik.com</>,
  },
  {
    id: 5,
    cls: "p-relative",
    img: mumbai,
    location: "Mumbai, India",
    address: <>team@framespik.com</>,
  },
];

const OfficeLocation = () => {
  return (
    <>
      <div className="contact-info-area pb-90">
        <div className="container">
          <div className="row d-flex flex-row align-items-center justify-content-center">
            {office_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 mb-30">
                <div className={`contact-info-item ${item.cls}`}>
                  {item.badge && (
                    <div className="contact-info-badge">
                      <span>{item.badge}</span>
                    </div>
                  )}
                  <div className="contact-info-img">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="contact-info-title-box">
                    <h5 className="contact-info-title-sm">
                      <Link href="#">{item.location}</Link>
                    </h5>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeLocation;
