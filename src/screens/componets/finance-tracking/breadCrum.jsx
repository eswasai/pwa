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
    title: "Finance Tracking & Management",
    featureList: [
      "Payment Tracking",
      "Debt & Credit Management",
      "Staff Salary Monitoring",
    ],
    description: (
      <>
        <ul>
          <li>
            <strong>Comprehensive Payment Tracking:</strong> Photographers and
            event managers can easily monitor all incoming and outgoing
            payments, ensuring they have a complete overview of their financial
            status. Track both paid and outstanding amounts for better cash flow
            management.
          </li>
          <li>
            <strong>Debt and Credit Monitoring:</strong> Keep track of the total
            amount owed by clients (debt) and any credit payments made, helping
            you stay on top of all financial obligations and manage future
            payments effectively.
          </li>
          <li>
            <strong>Streamlined Staff Salary Management:</strong> Effortlessly
            track staff salaries and payments, ensuring that all team members
            are paid on time. The system allows for transparent salary updates,
            ensuring smooth operations.
          </li>
        </ul>
      </>
    ),
    bottomDescription: (
      <>
        <ul>
          <li>
            <strong>Real-Time Financial Insights:</strong> Stay up-to-date with
            your finances by tracking both incoming payments and outstanding
            debts, ensuring that no financial detail is overlooked.
          </li>
          <li>
            <strong>Accurate Debt Tracking:</strong> Keep clients informed about
            any remaining balances and due amounts, ensuring transparency and
            efficient financial management.
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "#f4f4f4",
            boxShadow: "0 0px 4px #600ee4 ",
            textAlign: "center",
            padding: "20px",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <p>
            The{" "}
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Finance Tracking & Management system
            </strong>{" "}
            provides a comprehensive solution for photographers and event
            managers to efficiently monitor their financials. It allows users to
            track all incoming and outgoing payments, giving them a clear view
            of both paid and outstanding amounts for better cash flow
            management.
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
                    Finance Tracking
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
                    shareTitle={` Finance Tracking`}
                    shareText={`Manage payments, debts, and staff salaries with real-time financial insights, ensuring transparency and smooth operations.`}
                    shareUrl={"https://framespik.com/track-and-analyze-finance"}
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
