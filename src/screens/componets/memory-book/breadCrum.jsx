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
import MemoryPageVideo from "./memoryPageVideo";

const projectDetailsData = [
  {
    id: 1,
    cls: "overview",
    title: "Memory Page & Event Content Management",
    featureList: ["Event Details", "Albums", "Additional Content", "Sharing"],
    description: (
      <>
        <ol style={{ margin: "0", padding: "0" }}>
          <li>
            <strong style={{ fontSize: "25px", color: "black" }}>
              Event Details:
            </strong>
            <ul style={{ margin: "0.5em 0", padding: "0" }}>
              <li>
                {" "}
                <strong>Customized Digital Space:</strong>
                <p>
                  Each event has its own dedicated page, designed to capture the
                  theme and essence of the event.
                </p>
              </li>
              <li>
                {" "}
                <strong> Key Information at a Glance:</strong>
                <ul>
                  <li>Venue location (with map integration)</li>
                  <li>
                    Event dates and schedules Personalized narrative or
                    description
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong style={{ fontSize: "25px", color: "black" }}>
              Albums:
            </strong>
            <ul style={{ margin: "0.5em 0", padding: "0" }}>
              <li>
                {" "}
                <strong>Organised by Event</strong>
                <p>
                  All photos and videos from an event are neatly grouped under
                  dedicated albums, ensuring a seamless browsing experience.
                </p>
              </li>
              <li>
                {" "}
                <strong> Privacy Controls:</strong>
                <ul>
                  <li>
                    Users can set access permissions for each album, image, or
                    video.
                  </li>
                  <li>
                    Options include public, invite-only, or restricted to
                    specific users.
                  </li>
                </ul>
              </li>
              <li style={{ marginTop: "-25px" }}>
                {" "}
                <strong> Interactive Features:</strong>
                <ul>
                  <li>
                    Commenting, liking, and sharing options to engage with
                    family and friends.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong style={{ fontSize: "25px", color: "black" }}>
              Additional Content:
            </strong>
            <ul style={{ margin: "0.5em 0", padding: "0" }}>
              <li>
                {" "}
                <strong>Invitation Cards:</strong>
                <ul>
                  <li>
                    Digital versions of the event invitation, making it easy to
                    share or save.
                  </li>
                  <li>Options for animated or interactive invitations.</li>
                </ul>
              </li>
              <li style={{ marginTop: "-20px" }}>
                {" "}
                <strong> Reels:</strong>
                <p>Short video compilations or highlights from the event.</p>
                <ul>
                  <li>
                    Perfect for sharing on social media or sending as a sneak
                    peek to guests.
                  </li>
                  <li>
                    Event dates and schedules Personalized narrative or
                    description
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong style={{ fontSize: "25px", color: "black" }}>
              Sharing:
            </strong>
            <ul style={{ margin: "0.5em 0", padding: "0" }}>
              <li>
                {" "}
                <strong>Seamless Sharing:</strong>
                <ul>
                  <li>
                    Share the event page via email, social media, or a unique
                    URL.
                  </li>
                  <li>
                    Includes customizable invitation messages for recipients.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </>
    ),
    bottomDescription: (
      <>
        <ul></ul>
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
                    Memory Page
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
                {/* <Image src={PhotoSelectionImg} alt="theme-pure" /> */}
                <MemoryPageVideo />
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
                    shareTitle={` Memory Page`}
                    shareText={`A personalized, organized, and private digital space for capturing, sharing, and preserving your event memories.`}
                    shareUrl={"https://framespik.com/memory-page"}
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
