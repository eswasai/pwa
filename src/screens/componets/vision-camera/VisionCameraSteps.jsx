import React, { useState, useEffect } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};
// journey_data
const journey_data = [
  {
    id: "01",
    title: <>Our Vision For Capturing Moments</>,
    description: (
      <>
        We envision photographers equipped with tools and guidance they need to
        capture stunning images effortlessly and creatively.
      </>
    ),
  },
  {
    id: "02",
    title: <>Smart Pose Suggestions</>,
    description: (
      <>
        Vision Camera suggests poses based on location (e.g., beach, garden) and
        objects (e.g., car, bicycle) to enhance your photography sessions
        greatly.
      </>
    ),
  },
  {
    id: "03",
    title: <>Data-Driven Guidance</>,
    description: (
      <>
        Using past shoot data, Vision Camera effectively guides clients during
        outdoor sessions to achieve optimal results and satisfaction.
      </>
    ),
  },
  {
    id: "04",
    title: <>Enhancing Outdoor Photography</>,
    description: (
      <>
        With Vision Camera, photographers can leverage location-based
        suggestions to elevate their outdoor photography experience
        significantly.
      </>
    ),
  },
  {
    id: "05",
    title: <>Featured In Photography Magazines</>,
    description: (
      <>
        Vision Camera has been recognized for its innovative features that help
        photographers capture stunning images with ease and professionalism.
      </>
    ),
  },
  {
    id: "06",
    title: <>User-Friendly Interface</>,
    description: (
      <>
        The Vision Camera app is designed for ease of use, allowing
        photographers to focus more on their art and less on technical aspects.
      </>
    ),
  },
  {
    id: "07",
    title: <>Community Feedback and Improvements</>,
    description: (
      <>
        We actively seek feedback from photographers to enhance our features and
        ensure that Vision Camera meets their needs and expectations
        continuously.
      </>
    ),
  },
  {
    id: "08",
    title: <>Workshops & Tutorials</>,
    description: (
      <>
        Join our workshops to learn how to make the most of Vision Camera's
        features and improve your photography skills through hands-on practice.
      </>
    ),
  },
  {
    id: "09",
    title: <>Collaborations with Influencers</>,
    description: (
      <>
        Vision Camera collaborates with top photographers to showcase how our
        tools can transform their shooting experience and inspire creativity.
      </>
    ),
  },
  {
    id: "10",
    title: <>Future Updates & Features</>,
    description: (
      <>
        Stay tuned for upcoming features that will further enhance the
        capabilities of Vision Camera for all photographers worldwide and
        beyond.
      </>
    ),
  },
];

const VisionCameraSteps = () => {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };

  return (
    <>
      <div className="journey-area p-relative fix mb-80 pt-50">
        <div className="journey-grey-bg grey-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="journey-section-box">
                <h5 className="inner-section-subtitle pb-10">VISION CAMERA</h5>
                <h3 className="ab-brand-title pb-0 mb-0">What you want</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="journey-slider-wrapper">
                <Swiper
                  {...setting}
                  onSliderMove={handleSlideChange}
                  onTransitionEnd={handleTransitionEnd}
                  modules={[Navigation, Scrollbar]}
                  className={`swiper-container journey-slider-active ${
                    isDragged ? "dragged" : ""
                  }`}
                >
                  {journey_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="journey-slider-item p-relative"
                    >
                      <div className="journey-stroke-text">
                        <h2>{item.id}</h2>
                      </div>
                      <div className="journey-slider-content">
                        <h4 className="journey-slider-title">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionCameraSteps;
