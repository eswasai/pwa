// import {gsap} from 'gsap';
import Link from "next/link";
import React from "react";

import integration_img_1 from "../../../../public/assets/img/crm/crm-service/work-updates.png";
import integration_img_2 from "../../../../public/assets/img/crm/crm-testimonials/crm-4.png";
import integration_img_3 from "../../../../public/assets/img/crm/crm-testimonials/crm-5.png";
import integration_img_4 from "../../../../public/assets/img/crm/crm-service/nfc-card.png";
import integration_img_5 from "../../../../public/assets/img/crm/crm-service/schedule.png";
import integration_img_6 from "../../../../public/assets/img/crm/crm-testimonials/crm-2.png";
import integration_img_7 from "../../../../public/assets/img/crm/crm-testimonials/crm-1.png";
import integration_img_8 from "../../../../public/assets/img/crm/crm-testimonials/crm-3.png";
import integration_img_9 from "../../../../public/assets/img/crm/crm-testimonials/crm-7.png";
import integration_img_10 from "../../../../public/assets/img/crm/crm-testimonials/crm-6.png";
import integration_img_11 from "../../../../public/assets/img/feature/fea-circle-5-11.png";
import integration_img_12 from "../../../../public/assets/img/feature/fea-circle-5-12.png";
import integration_img_13 from "../../../../public/assets/img/feature/fea-circle-5-13.png";
import integration_img_14 from "../../../../public/assets/img/feature/fea-circle-5-14.png";
import Image from "next/image";

const integration_content = {
  title: (
    <>
      <span>Features</span> <br /> That simplify everything
    </>
  ),
  des: (
    <>
      Features - Simplifying photography business management <br /> and growth
      with Framespik's CRM tool.
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
const FeatureArea = () => {
  return (
    <>
      <div
        className="tp-intigration-area tp-intigration-five-space fix "
        style={{ paddingTop: "2%" }}
      >
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
                      href="/crm-tools"
                    >
                      CRM Tools
                    </Link>
                  </div>
                </div>
                {integration_img.map((item, i) => (
                  <div
                    key={i}
                    className={`tp-intigration-five-circle-img-${item.cls} tp-zoom-thumb`}
                  >
                    <Image style={{width:'3.5rem'}} src={item.img} alt="theme-pure" />
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

export default FeatureArea;
