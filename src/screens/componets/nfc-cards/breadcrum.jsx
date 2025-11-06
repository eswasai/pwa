import React from "react";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/common/social-links";

import solution_1 from "@/assets/img/breadcrumImg/nfc-cards-square-one.jpg";
import solution_2 from "@/assets/img/breadcrumImg/nfc-cards-square-two.jpg";

import NfcCards from "@/assets/img/breadcrumImg/nfc-cards.jpg";

import VideoArea from "./videoArea";

import shape_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";

const projectDetailsData = [
  {
    id: 1,
    cls: "overview",
    title: "NFC (Near Field Communication) Card",
    featureList: ["Gallery Access", "Selection", "Sharing"],
    description: (
      <>
        <ul>
          <li>
            <strong>Client Trust:</strong> Share cloud-stored data securely with
            NFC cards. Clients tap the card on their smartphone to access data
            easily.
          </li>
          <li>
            <strong>Secure Access:</strong> Clients set a password or 4-digit
            key after tapping the card, ensuring their data stays private.
          </li>
          <li>
            <strong>Branding Opportunity:</strong> NFC cards showcase your
            professionalism and build trust through secure, modern solutions.
          </li>
        </ul>
      </>
    ),
    bottomDescription: (
      <>
        <ul>
          <li>
            <strong>Data Security:</strong> Password-protected access gives
            clients control and peace of mind.
          </li>
          <li>
            <strong>Brand Impact:</strong> NFC cards enhance your brand with a
            tangible, secure, and innovative solution.
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "#f4f4f4",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2) ",
            textAlign: "center",
            padding: "20px",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <p>
            The <strong> NFC card </strong> is not only a symbol of secure and
            modern data access but is also <strong>waterproof</strong> and{" "}
            <strong>fireproof</strong> , designed to withstand the elements and
            keep your information safe, no matter what life throws at it!
          </p>
          <p>
            Built for endurance and style, it's the perfect combination of
            technology and durability.{" "}
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
                    <span>Features & Tools</span>
                  </div>
                  <h3 ref={animeRef} className="breadcrumb__title anime_text">
                    NFC Card
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
                <Image src={NfcCards} alt="theme-pure" />
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
                    shareTitle={`NFC Card`}
                    shareText={`The NFC card is waterproof and fireproof, ensuring your data is protected even in extreme conditions.`}
                    shareUrl={"https://framespik.com/nfc-cards"}
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
