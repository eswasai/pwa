import useTitleAnimation from "@/hooks/useTitleAnimation";
import service_data from "@/data/service-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const service_content = {
  title: "Explore Our Data Safety",
  sub_title: <>More than 15K+ Photographers trust and choose data safety.</>,

  bg_img: "/assets/img/service/sv-bg.jpg",
};
const { title, sub_title } = service_content;

const DataServiceArea = () => {
  let titleRef = useRef(null);

  useTitleAnimation(titleRef);
  return (
    <>
      <div className="tp-service__area p-relative fix pt-60">
        <div className="tp-service__grey-shape"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                ref={titleRef}
                className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim"
              >
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.slice(0, 5).map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div className="tp-service__item mb-30">
                  <div className="tp-service__icon">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="tp-service__content">
                    <h3 className="tp-service__title-sm tp-yellow-color">
                      <Link href="/get-started">{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="tp-service__link">
                    <Link href="/blogs">
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1s"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataServiceArea;
