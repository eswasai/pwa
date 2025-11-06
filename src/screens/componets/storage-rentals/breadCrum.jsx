import React from "react";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/common/social-links";

import solution_1 from "@/assets/img/project/solution-1.jpg";
import solution_2 from "@/assets/img/project/solution-2.jpg";

import PhotoSelectionImg from "@/assets/img/breadcrumImg/photo-selection.jpg";

import VideoArea from "./videoArea";

import shape_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";

const projectDetailsData = [
  {
    id: 1,
    cls: "overview",
    title: "Rent Cloud Storage",
    description: (
      <>
        <ul>
          <li>
            <strong> Cloud Storage Rental:</strong> Rent cloud storage for
            short-term needs and allocate space to your team members. This
            feature enables efficient collaboration on tasks such as event
            editing, media management, and file sharing.
          </li>
          <li>
            <strong>Flexible Allocation:</strong> Easily distribute your rented
            storage (e.g., 1TB) among your team based on individual needs, such
            as 30GB, 200GB, or more.
          </li>
          <li>
            <strong>Centralized Control:</strong> Managers or owners have full
            oversight over the storage, ensuring seamless coordination and
            secure access for all team members.
          </li>
        </ul>
      </>
    ),
    bottomDescription: (
      <>
        <ul>
          <li>
            <strong>How to Use:</strong> Access the shared cloud storage option
            through the CRM tool, select or create team members, and allocate
            the required storage space.
          </li>
          <li>
            <strong>Enhanced Security:</strong> If any misuse is detected,
            managers or owners can freeze storage access and easily recover the
            data to maintain file security.
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
                    Storage Rentals
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
                <Image src={PhotoSelectionImg} alt="theme-pure" />
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
                    shareTitle={`Storage Rentals`}
                    shareText={`Allocate space to team members as needed, ensuring everyone has what they need to work efficiently.`}
                    shareUrl={"https://framespik.com/cloud-rentals"}
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
