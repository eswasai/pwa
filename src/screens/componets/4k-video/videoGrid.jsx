import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// author img import here
import author_img_1 from "@/assets/img/blog/blog-avata-3.png";
import author_img_2 from "@/assets/img/blog/blog-avata-2.png";
import author_img_3 from "@/assets/img/blog/blog-avata-1.png";
import author_img_4 from "@/assets/img/blog/blog-avata-3.png";
import author_img_5 from "@/assets/img/blog/blog-avata-2.png";
import author_img_6 from "@/assets/img/blog/blog-avata-1.png";

const setting = {
  slidesPerView: 1,
  effect: "fade",
  // arrows:false,
  breakpoints: {
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".grid-next",
    prevEl: ".grid-prev",
  },
};

const blog_grid_content = {
  grid_slider_data: [
    {
      id: 1,
      bg_img: "/assets/img/blog/inner-blog-1.png",
    },
    {
      id: 2,
      bg_img: "/assets/img/blog/inner-blog-2.png",
    },
    {
      id: 3,
      bg_img: "/assets/img/blog/inner-blog-3.png",
    },
    {
      id: 4,
      bg_img: "/assets/img/blog/inner-blog-1.png",
    },
    {
      id: 5,
      bg_img: "/assets/img/blog/inner-blog-2.png",
    },
    {
      id: 6,
      bg_img: "/assets/img/blog/inner-blog-3.png",
    },
  ],
};
const { grid_slider_data } = blog_grid_content;
const VideoGrid = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="blog-grid-area pt-100 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-grid-arrow p-relative">
                <div className="grid-next d-none d-sm-block">
                  <button>
                    <i className="far fa-angle-left"></i>
                    <svg
                      width="36"
                      height="100"
                      viewBox="0 0 36 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99999 14C0 7.5 0.5 3.5 0 0L-0.000484467 99.5C-0.000415802 96.7234 1.00003 88 23 71.5C44.9999 55 32.5 37.1667 24 30.5C19.8333 27.1667 9.48375 19.8289 4.99999 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid-prev d-none d-sm-block">
                  <button>
                    <i className="far fa-angle-right"></i>
                    <svg
                      width="36"
                      height="100"
                      viewBox="0 0 36 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.3164 14C35.3164 7.5 34.8164 3.5 35.3164 0L35.3169 99.5C35.3168 96.7234 34.3164 88 12.3164 71.5C-9.68354 55 2.81642 37.1667 11.3164 30.5C15.4831 27.1667 25.8327 19.8289 30.3164 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <Swiper
                  {...setting}
                  loop={isLoop}
                  modules={[Navigation, EffectFade]}
                  className="swiper-container blog-grid-slider-active"
                >
                  {grid_slider_data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="blog-grid-slider blog-grid-slider-bg d-flex align-items-center blog-grid-slider-height"
                        style={{ backgroundImage: `url(${item.bg_img})` }}
                      ></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGrid;
