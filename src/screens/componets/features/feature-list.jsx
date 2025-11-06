import Image from "next/image";
import Link from "next/link";
import React from "react";

import service_icon_1 from "@/assets/img/service/sv-icon-3-1.png";
import service_icon_2 from "@/assets/img/service/service-shape-3-1.png";

// features icons
import PhotoSelectionIcon from "@/assets/img/feature/features-tools/photo-selection.svg";
import DataSecure from "@/assets/img/feature/features-tools/data-secure.svg";
import Storage from "@/assets/img/feature/features-tools/storage.svg";
import BrandingApp from "@/assets/img/feature/features-tools/branding-app.png";
import CustomWebsite from "@/assets/img/feature/features-tools/website.svg";
import SharedCloud from "@/assets/img/feature/features-tools/cloud-space.svg";
import RentStorage from "@/assets/img/feature/features-tools/rent.svg";
import VisionCam from "@/assets/img/feature/features-tools/vision-scan.png";
import Event from "@/assets/img/feature/features-tools/event-backup.png";
import AiImage from "@/assets/img/feature/features-tools/image-share.png";
import VideoImage from "@/assets/img/feature/features-tools/4k-video-image.png";
import Album from "@/assets/img/feature/features-tools/3d-image.png";
import ThirdpartyIntegration from "@/assets/img/feature/features-tools/3rd-party.png";







const service_content = {
  bg_img: "/assets/img/service/service-3-bg.png",
  service_title: "Endless Potential",
  service_info: (
    <>
      Transform Your Photos, Manage Data, <br /> and Collaborate Simply
    </>
  ),
};

const { bg_img, service_title, service_info } = service_content;

const features_data = [
  {
    id: 1,
    icon: PhotoSelectionIcon,
    img: PhotoSelectionIcon,
    title: "Photo Selection",
    description: <>Client Interaction & Image Selection Workflow</>,
    path: "./photo-selection",
    delay: ".9s",
  },
  {
    id: 2,
    icon: DataSecure,
    img: DataSecure,
    title: "100% Data Secure",
    description: <>Data Safety & Long-Term File Access</>,
    path: "./data-safe",
    delay: ".9s",
  },
  {
    id: 3,
    icon: Storage,
    img: Storage,
    title: "Storage Info",
    description: <>Storage Trends & it's Effects</>,
    path: "./storage",
    delay: ".9s",
  },
  {
    id: 4,
    icon: BrandingApp,
    img: BrandingApp,
    title: "Own Branding App",
    description: <>Custom UI & Personalized App Design</>,
    path: "./custom-app",
    delay: ".9s",
  },
  {
    id: 5,
    icon: CustomWebsite,
    img: CustomWebsite,
    title: "Branding Website",
    description: <>Design Your Own Experience</>,
    path: "./custom-website",
    delay: ".9s",
  },
  {
    id: 6,
    icon: SharedCloud,
    img: SharedCloud,
    title: "Shared Cloud Space",
    description: <>Shared Storage for Teams: Divide, Manage, and Collaborate</>,
    path: "./shared-cloud",
    delay: ".9s",
  },
  {
    id: 7,
    icon: RentStorage,
    img: RentStorage,
    title: "Storage Rentals",
    description: <>Rent cloud storage for short-term needs</>,
    path: "./cloud-rentals",
    delay: ".9s",
  },
  {
    id: 8,
    icon: VisionCam,
    img: VisionCam,
    title: "Vision Camera",
    description: <>Experience the Smart Photography!</>,
    path: "./vision-camera",
    delay: ".9s",
  },
  {
    id: 9,
    icon: Event,
    img: Event,
    title: "Event Backup",
    description: <>Data Backup & Long-Term File Security</>,
    path: "./data-backup",
    delay: ".9s",
  },
  {
    id: 10,
    icon: AiImage,
    img: AiImage,
    title: "Ai-Image Share",
    description: <>Simplify photo access through AI-powered face recognition</>,
    path: "./ai-image-delivery ",
    delay: ".9s",
  },
  {
    id: 11,
    icon: VideoImage,
    img: VideoImage,
    title: " 4k Videos & Photos  ",
    description: <>upload high-quality 4K photos and videos without    limit </>,
    path: "./unlimited-album-videos ",
    delay: ".9s",
  },
  {
    id: 12,
    icon: Album,
    img: Album,
    title: " 3D Albums  ",
    description: <>Transform your photos into an engaging 3D album.</>,
    path: "./3d-album",
    delay: ".9s",
  },
  {
    id: 13,
    icon: ThirdpartyIntegration,
    img: ThirdpartyIntegration,
    title: " 3rd Party Integration  ",
    description: <>Easily integrate with other cloud services</>,
    path: "./3rd-party-integration",
    delay: ".9s",
  },
  
];

const FeaturesList = () => {
  return (
    <>
      <div className="tp-service-area pb-120 z-index" id="featuresList">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                <h3 className="tp-section-title tp-title-anim">
                  Accounting Software <br /> That Handles it All.
                </h3>
                <Link
                  className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                  href="./get-started"
                >
                  <span>Get Started</span>
                  <b></b>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-8 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className="tp-service-3-item mb-30 p-relative z-index"
                style={{ backgroundImage: `url(${bg_img})` }}
              >
                <div className="tp-service-3-icon">
                  <Image src={service_icon_1} alt="theme-pure" />
                </div>
                <div className="tp-service-3-content">
                  <span>{service_title}</span>
                  <h4 className="tp-service-3-title-sm">
                    <Link href="/service-details">{service_info}</Link>
                  </h4>
                </div>
                <div className="tp-service-3-btn">
                  <Link className="tp-btn-white-solid" href="./download">
                    Download
                  </Link>
                </div>
                <div className="tp-service-3-shape">
                  <Image src={service_icon_2} alt="theme-pure" />
                </div>
              </div>
            </div>

            {features_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                  <div className="tp-service-sm-icon">
                    <Image
                      style={{ width: "3.5rem" }}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <div className="tp-service-sm-content">
                    <span>{item.title}</span>
                    <h3 className="tp-service-sm-title">
                      <Link href={item.path}>{item.description}</Link>
                    </h3>
                    <div className="tp-service-sm-link">
                      <Link href={item.path}>
                        Learn More <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesList;
