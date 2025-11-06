import BlurStart from "@/svg/blur-start";
import React from "react";
import Image from "next/image";

import author_img_1 from "../../../../public/assets/img/rate/rate-logo-1.png";
import author_img_2 from "../../../../public/assets/img/rate/rate-logo-2.png";
import author_img_3 from "../../../../public/assets/img/rate/rate-logo-3.png";

import img_1 from "../../../../public/assets/img/rate/rate-shape-1.png";
import img_2 from "../../../../public/assets/img/rate/rate-shape-2.png";
import author_big_img from "../../../../public/assets/img/rate/rated-img.png";
import Link from "next/link";

const rated_content = {
  author: [
    {
      id: 1,
      title: <>easy and intuitive drag-and-drop setup</>,
      img: author_img_1,
    },
    {
      id: 2,
      title: <>customizable for perfect branding</>,
      img: author_img_2,
    },
    {
      id: 3,
      title: <>professional presentation for every event</>,
      img: author_img_3,
    },
  ],

  bg_img: "/assets/img/rate/rated-bg.jpg",

  title: (
    <>
      Customers have <span>Consistently</span>
      <br /> <span>Rated</span> Softec<span> 4.9/5</span>
    </>
  ),
};

const { author, bg_img, title } = rated_content;

const MemoryHeroArea = () => {
  return (
    <>
      <div className="tp-rated-area fix p-relative mb-100 mt-80">
        <div
          className="tp-rated-bg pt-120"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="tp-rated-shape-1 d-none d-lg-block">
            <Image src={img_1} alt="theme-pure" />
          </div>
          <div className="tp-rated-shape-2 d-none d-sm-block">
            <Image src={img_2} alt="theme-pure" />
          </div>
          <div className="container z-index-6">
            <div className="author-rated-wrapper">
              <div className="row">
                {author.map((item, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                    <div className="author-rated text-center">
                      <div className="author-rated-icon">
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="author-rated-big-img">
              <Image src={author_big_img} alt="theme-pure" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoryHeroArea;
