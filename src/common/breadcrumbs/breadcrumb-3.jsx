import React from "react";
import Image from "next/image";
import SocialLinks from "../social-links";

import img_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import img_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";
import img_3 from "@/assets/img/blog/blog-avata-1.png";

const BreadcrumbSix = ({
  sub_title,
  title,
  author_name,
  author_info,
  show_social_links = true,
}) => {
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
                  {sub_title && <span>{sub_title}</span>}
                  {title && (
                    <h3 className="blog-details-banner-title">{title}</h3>
                  )}
                </div>
                {(author_name || author_info) && (
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-avata">
                      <Image src={img_3} alt="theme-pure" />
                    </div>
                    <div className="tp-blog-author-info">
                      {author_name && <h5>{author_name}</h5>}
                      {author_info && <span>{author_info}</span>}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {show_social_links && (
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="blog-details-social-box z-index-3 text-md-end text-start">
                  <SocialLinks />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbSix;
