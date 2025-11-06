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
    date: "FEB 2022",
    title: "Platform Development",
    description:
      "Framespik begins developing a user-friendly platform for photographers and event organizers.",
  },
  {
    id: "02",
    date: "MAR 2022",
    title: "Client Feedback Integration",
    description:
      "The platform evolves by integrating client feedback to improve event management and storage.",
  },
  {
    id: "03",
    date: "JUN 2022",
    title: "Cloud Storage & Backup",
    description:
      "Framespik integrates cloud storage and backups to ensure data security against failures.",
  },
  {
    id: "04",
    date: "AUG 2022",
    title: "Photo Selection Tools",
    description:
      "Framespik introduces tools to enhance client engagement and simplify photo selection management.",
  },
  {
    id: "05",
    date: "NOV 2022",
    title: "Event Scheduling Features",
    description:
      "Comprehensive scheduling tools streamline event coordination for photographers and their teams.",
  },
  {
    id: "06",
    date: "FEB 2023",
    title: "Payment Automation Remainders",
    description:
      "Automated reminders and invoicing systems streamline financial tracking and management.",
  },
  {
    id: "07",
    date: "JUN 2023",
    title: "Custom Photographer Websites",
    description:
      "Photographers create branded websites to showcase portfolios, attract clients, and expand reach.",
  },
  {
    id: "08",
    date: "SEP 2023",
    title: "Complete Branding Solutions",
    description:
      "End-to-end branding tools are introduced, including logos, apps, and custom designs.",
  },
  {
    id: "09",
    date: "FEB 2024",
    title: "AI Image Management & selection",
    description:
      "AI-driven tools categorize, tag, and retrieve images efficiently for photographers.",
  },
  {
    id: "10",
    date: "MAY 2024",
    title: "Global Expansion with collaboration",
    description:
      "Framespik expands globally with multi-language support and localized features for global accessibility.",
  },
];

const AboutOurJourney = () => {
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
                <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                <h3 className="ab-brand-title pb-0 mb-0">
                  Journey Was Started
                </h3>
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
                      <div className="journey-slider-meta">
                        <span>{item.date}</span>
                      </div>
                      <div className="journey-slider-content">
                        <h4 className="journey-slider-title z-index-5">
                          {item.title}
                        </h4>
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

export default AboutOurJourney;
