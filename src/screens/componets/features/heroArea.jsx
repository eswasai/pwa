// import {gsap} from 'gsap';
import Link from "next/link";
import React from "react";

import integration_img_1 from "@/assets/img/feature/features-tools/new-10.png";
import integration_img_2 from "@/assets/img/feature/features-tools/data-secure.svg";
import integration_img_3 from "@/assets/img/feature/features-tools/storage.svg";
import integration_img_4 from "@/assets/img/feature/features-tools/new-11.png";
import integration_img_5 from "@/assets/img/feature/features-tools/new-9.png";
import integration_img_6 from "@/assets/img/feature/features-tools/new-7.png";
import integration_img_7 from "@/assets/img/feature/features-tools/new-8.png";
import integration_img_8 from "@/assets/img/feature/features-tools/event-backup.png";
import integration_img_9 from "@/assets/img/feature/features-tools/new-5.png";
import integration_img_10 from "@/assets/img/feature/features-tools/new-6.png";
import integration_img_11 from "../../../../public/assets/img/feature/fea-circle-5-11.png";
import integration_img_12 from "../../../../public/assets/img/feature/fea-circle-5-12.png";
import integration_img_13 from "../../../../public/assets/img/feature/fea-circle-5-13.png";
import integration_img_14 from "../../../../public/assets/img/feature/fea-circle-5-14.png";
import Image from "next/image";

const integration_content = {
  title: (
    <>
      <span>Featured</span> <br /> In all Over the World
    </>
  ),
  des: (
    <>
      Discover our innovative features designed to simplify your <br /> experience and deliver exceptional results."
    </>
  ),

  integration_img: [
    { id: 1, img: integration_img_1, cls: "1 d-none d-lg-block" },
    { id: 2, img: integration_img_2, cls: "2 d-none d-lg-block" },
    { id: 3, img: integration_img_3, cls: "3 d-none d-lg-block" },
    { id: 4, img: integration_img_4, cls: "4 d-none d-lg-block" },
    { id: 5, img: integration_img_5, cls: "5 d-none d-lg-block" },
    { id: 6, img: integration_img_6, cls: "6 d-none d-lg-block" },
    { id: 7, img: integration_img_7, cls: "7 d-none d-lg-block" },
    { id: 8, img: integration_img_8, cls: "8 d-none d-lg-block" },
    { id: 9, img: integration_img_9, cls: "9 d-none d-lg-block" },
    { id: 10, img: integration_img_10, cls: "10 d-none d-lg-block" },
    { id: 11, img: integration_img_11, cls: "11" },
    { id: 12, img: integration_img_12, cls: "12" },
    { id: 13, img: integration_img_13, cls: "13" },
    { id: 14, img: integration_img_14, cls: "14" },
  ],
};
const { title, des, integration_img } = integration_content;
const HeroArea = () => {
  return (
    <>
      <div className="tp-intigration-area tp-intigration-five-space fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-intigration-five-wrapper p-relative">
                <div className="tp-intigration-five-section-box text-center">
                  <h3 className="tp-section-title-5 pb-10 text-black">
                    {title}
                  </h3>
                  <p>{des}</p>
                  <div className="tp-intigration-five-btn">
                    <Link
                      className="tp-btn-blue-lg purple-bg circle-effect-black"
                      href="#featuresList"
                    >
                      Explore All
                    </Link>
                  </div>
                </div>
                {integration_img.map((item, i) => (
                  <div
                    key={i}
                    className={`tp-intigration-five-circle-img-${item.cls} tp-zoom-thumb`}
                  >
                    <Image style={{width:'4rem'}} src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
