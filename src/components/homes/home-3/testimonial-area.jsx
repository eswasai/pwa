import React, { useRef } from "react";
import Slider from "react-slick";

import testimonial_img_1 from "../../../../public/assets/img/testimonial/testi-3-2.png";
import testimonial_img_2 from "../../../../public/assets/img/testimonial/testi-3-3.png";
import testimonial_img_3 from "../../../../public/assets/img/testimonial/testi-3-4.png";
import testimonial_img_4 from "../../../../public/assets/img/testimonial/testi-3-5.png";
import Image from "next/image";

const testimonial_content = {
  bg_img: "/assets/img/testimonial/testi-bg-3-1.png",
  title: (
    <>
      <span>Kind Words</span>
      <br />
      from our Customers
    </>
  ),
};
const { bg_img, title } = testimonial_content;

// slider setting
const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// testimonial data
const testimonial_data = [
  {
    id: 1,
    img: testimonial_img_1,
    name: "Rudra Ghosh",
    job_title: "Photographer",
    description: (
      <>
        I’m absolutely in love with the app’s customizable interface . I can
        easily select the UI design, choose my favorite fonts, and personalize
        the style to make the app feel just right for me.
      </>
    ),
  },
  {
    id: 2,
    img: testimonial_img_2,
    name: "Sebastian Sinclair",
    job_title: "Photographer",
    description: (
      <>
        Vision Camera goes beyond just taking photos—it scans the environment,
        recognizing surrounding props and gives samples poses
      </>
    ),
  },
  {
    id: 3,
    img: testimonial_img_3,
    name: "Stefan Parker",
    job_title: "Customer of Framespik",
    description: (
      <>
        One feature that has really made a difference for me is the ability to
        access all my event photos and videos from anywhere in the app.
      </>
    ),
  },
  {
    id: 4,
    img: testimonial_img_4,
    name: "Julian Cross",
    job_title: "Customer of Framespik",
    description: (
      <>
        With NFC card, I never have to worry about my event photos or videos
        being lost. The NFC card comes with all my data securely stored, so I
        know my memories are always safe and protected.
      </>
    ),
  },
];

const TestimonialArea = () => {
  const sliderRef = useRef(null);
  return (
    <>
      <div className="tp-testimonial-area tp-testimonial-3-mlr pb-110">
        <div
          className="tp-testimonial-3-bg pt-110 fix"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
                  <h3 className="tp-section-title-3 text-white">{title}</h3>
                  <div className="tp-test-arrow d-flex pb-10">
                    <button
                      onClick={() => sliderRef.current?.slickPrev()}
                      type="button"
                      className="slick-prev"
                    >
                      <i className="fal fa-angle-left"></i>
                    </button>
                    <button
                      onClick={() => sliderRef.current?.slickNext()}
                      type="button"
                      className="slick-next"
                    >
                      <i className="fal fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-3-slider-wrapper">
            <div className="container-fluid g-0">
              <div className="row g-0">
                <div className="col-12">
                  <Slider
                    ref={sliderRef}
                    {...settings}
                    className="tp-testimonial-3-slider-active"
                  >
                    {testimonial_data.map((item, i) => (
                      <div key={i} className="tp-testimonial-wrapper">
                        <div className="tp-testimonial-3-item d-flex justify-content-between align-items-center">
                          <div className="tp-testimonial-3-content-box">
                            <div className="tp-testimonial-3-review">
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
                            <p>{item.description}</p>
                            <div className="tp-testimonial-3-author-info d-flex align-items-center">
                              <div className="tp-testimonial-3-sm-thumb d-md-none">
                                <Image src={item.img} alt={item.name} />
                              </div>
                              <div>
                                <h5>{item.name}</h5>
                                <span>{item.job_title}</span>
                              </div>
                            </div>
                          </div>
                          <div className="tp-testimonial-3-thumb d-none d-md-block">
                            <Image src={item.img} alt="theme-pure" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialArea;
