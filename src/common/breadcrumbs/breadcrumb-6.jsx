import React from "react";
import Image from "next/image";
import SocialLinks from "../social-links";

import img_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import img_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";
import img_3 from "@/assets/img/blog/blog-avata-1.png";

const breadcrumb_content = {
  sub_title: "Resources",
  title: "Developing Privacy User Centric Apps",
  author_name: "Rudra Ghosh",
  author_info: "CEO Dulalix  •   April 24, 2022",
};
const { sub_title, title, author_name, author_info } = breadcrumb_content;

const BreadcrumbSix = ({ title }) => {
  return (
    <>
      <div className="breadcrumb__area breadcrumb-ptb-4 p-relative blue-bg-2">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="blog-details-banner z-index-2">
                <div className="blog-details-title-box">
                  <h3 className="blog-details-banner-title">{title}</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="blog-details-social-box z-index-3 text-md-end text-start">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbSix;
