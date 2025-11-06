import React from "react";
import Image from "next/image";

import img_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import img_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";

const Blogbreadcum = ({ sub_title, title }) => {
  return (
    <>
      <div className="breadcrumb__area breadcrumb-ptb-4 p-relative blue-bg-2">
        <div className="breadcrumb__shape-1">
          <Image src={img_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={img_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="blog-details-banner z-index-2">
                <div className="blog-details-title-box">
                  <span>{sub_title}</span>
                  <h3 className="blog-details-banner-title">{title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogbreadcum;
