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
    title: "Anywhere To View",
    featureList: [
      "Seamless Access",
      "Branding Customization",
      "Secure Client Selection",
    ],
    description: (
      <>
        <ul>
          <li>
            <strong>Seamless Access:</strong> Photographers can view client
            photos from any device or platform, whether it's a TV, their branded
            app, website, Framespik app, or even a browser.
          </li>
          <li>
            <strong>Branding Customization:</strong> View your photos through
            your own branding, whether on a personal app or website, ensuring a
            professional and tailored experience.
          </li>
          <li>
            <strong>Secure Client Selection:</strong> Clients can access their
            photos securely by setting a unique PIN, giving them full control
            over which images they want to view or share.
          </li>
        </ul>
      </>
    ),
    bottomDescription: (
      <>
        <ul>
          <li>
            <strong>Easy Access Anywhere:</strong> Clients can view their photos
            anytime and from anywhere, whether at home, on the go, or at a
            viewing session.
          </li>
          <li>
            <strong>Personalized Experience:</strong> Enhance the viewing
            experience with your own custom branding across different platforms,
            making it unique and aligned with your style.
          </li>
        </ul>
        <div>
          <p>
            This Feature{" "}
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Anywhere to View
            </strong>{" "}
            functionality ensures both photographers and clients experience
            seamless and secure access to photos across multiple platforms.
            Photographers can showcase their work on various devices, including
            TVs, websites, or apps, making it easy to share content. With
            branding customization, clients enjoy a personalized viewing
            experience, ensuring a professional and cohesive brand identity.
            This feature ensures that both clients and photographers can access
            and enjoy photos anytime and anywhere.
          </p>
          <p>
            The added layer of{" "}
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              secure client selection
            </strong>{" "}
            , through unique PINs, gives clients full control over which images
            they wish to view, download, or share, creating a more secure and
            tailored experience for everyone involved.
          </p>
        </div>
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
                    <span>CRM & Tools</span>
                  </div>
                  <h3 ref={animeRef} className="breadcrumb__title anime_text">
                    Anywhere to view
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
                    shareTitle={`Anywhere to view`}
                    shareText={`: Keep track of all your transactions to avoid delays and missed payments.`}
                    shareUrl={"https://framespik.com/any-where-view"}
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
