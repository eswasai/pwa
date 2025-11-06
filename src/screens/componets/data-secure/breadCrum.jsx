import React from "react";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/common/social-links";

import solution_1 from "@/assets/img/project/solution-1.jpg";
import solution_2 from "@/assets/img/project/solution-2.jpg";

import DataSafeThumb from "@/assets/img/breadcrumImg/data-safe.jpg";

import VideoArea from "./videoArea";

import shape_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";

const projectDetailsData = [
  {
    id: 1,
    cls: "overview",
    title: "Data Safety & Long-Term File Access",
    featureList: ["Gallery Access", "Data Locker", "Secure Sharing"],
    description: (
      <>
        <ul>
          <li>
            <strong>Secure Storage:</strong> Store client data in a "Data
            Locker" after events for long-term safekeeping.
          </li>
          <li>
            <strong>Easy Access:</strong> Clients can access their files after
            months or years, paying a minimal fee for downloads.
          </li>
          <li>
            <strong>Data Integrity:</strong> Ensure data remains safe, intact,
            and accessible over time.
          </li>
        </ul>
      </>
    ),
    bottomDescription: (
      <>
        <ul>
          <li>
            <strong>Effortless Retrieval:</strong> Clients can download
            high-quality or raw files anytime, with minimal cost.
          </li>
          <li>
            <strong>Long-Term Protection:</strong> Secure storage guarantees
            access even after extended periods.
          </li>
        </ul>
      </>
    ),
  },
];
const FeatureDetails = () => {
  React.useEffect(() => {
    const gsap = require("gsap");
    const ScrollTrigger = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".social-box-pin",
      start: "top 10%",
      end: "bottom 60%",
      pin: ".social-box-pin",
      pinSpacing: false,
    });
  }, []);

  return null;
};

const BreadCrum = () => {
  const { animeRef } = useBreadcrumbTitleAnime();

  return (
    <>
      <div className="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="breadcrumb__content-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="breadcrumb__content z-index-3 mb-60">
                  <div
                    className="breadcrumb__text wow tpfadeIn"
                    data-wow-duration=".9s"
                    data-wow-delay=".6s"
                  >
                    <span>Features & Tools</span>
                  </div>
                  <h3 ref={animeRef} className="breadcrumb__title anime_text">
                    Data Secure
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd-thumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pd-thumb">
                <Image src={DataSafeThumb} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd-details-area pt-100 pb-0">
        <div className="container">
          <div className="row g-0">
            <div className="col-xl-2 col-lg-2 social-box-pin">
              <div className="pd-details-social-box text-lg-center text-start p-relative">
                <div className="pd-details-social-title">
                  <span>
                    Share This <br />
                    Feature
                  </span>
                </div>
                <div className="pd-details-social">
                <SocialLinks
                    shareTitle={`Data Secure`}
                    shareText={`Data Secure: Your Files Are Always Safe."`}
                    shareUrl={'https://framespik.com/data-safe'}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10">
              <div className="pd-details-wrapper">
                {projectDetailsData.map((item) => (
                  <div
                    key={item.id}
                    className={`pd-details-${item.cls}`}
                    style={{ padding: "0%" }}
                  >
                    <h4 className="pd-details-title pb-3">{item.title}</h4>
                    <div className="ml-25">{item.description}</div>
                  </div>
                ))}

                <div className="pd-details-solution">
                  <VideoArea />
                  <div className="pd-details-solution-img-box d-flex align-items-center">
                    <div className="pd-details-solution-img mr-30">
                      <Image src={solution_1} alt="theme-pure" />
                    </div>
                    <div className="pd-details-solution-img">
                      <Image src={solution_2} alt="theme-pure" />
                    </div>
                  </div>
                  {projectDetailsData.map((item) => (
                    <div
                      key={item.id}
                      className={`pd-details-${item.cls}`}
                      style={{ padding: "0%" }}
                    >
                      <div className="ml-25">{item.bottomDescription}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrum;
