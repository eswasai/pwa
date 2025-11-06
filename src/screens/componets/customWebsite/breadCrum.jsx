import React from "react";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/common/social-links";

import solution_1 from "@/assets/img/project/solution-1.jpg";
import solution_2 from "@/assets/img/project/solution-2.jpg";

import webDesign from "@/assets/img/breadcrumImg/web-design.jpg";

import VideoArea from "./videoArea";

import shape_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";

const projectDetailsData = [
  {
    id: 1,
    cls: "overview",
    title: "  Design Your Own Experience",
    featureList: ["Styling", "Customization"],
    description: (
      <>
        <ul>
          <li>
            <strong>Font Customization:</strong> Font Customization: Choose from
            a variety of fonts or even upload your own. Adjust the font weight,
            size, and style to match your brand or personal taste. Whether you
            prefer serif fonts for a classic look or sans-serif for a more
            modern feel, you’re in charge. .
          </li>
          <li>
            <strong>Color Scheme:</strong> Create your perfect visual
            environment by selecting your preferred color palette. With the
            ability to adjust everything from background color to text color and
            button accents, the possibilities for a personalized theme are
            endless. Say goodbye to default color schemes and hello to a site
            that feels uniquely yours.
          </li>
          <li>
            <strong>Advanced Layout Adjustments:</strong> If you're a fan of
            fine-tuning, we offer advanced layout controls that allow you to
            manipulate the grid system, column widths, and more. You don’t have
            to settle for the cookie-cutter layout options you usually find.
            Now, you can position elements exactly where you want them,
            optimizing both functionality and aesthetics. seamlessly.
          </li>
        </ul>
      </>
    ),
    bottomDescription: (
      <>
        <h4> WhyCustomizing Matters </h4>
        <p>
          {" "}
          <br />
          The real power of customization lies in creating an experience that
          truly resonates with you or your audience. Whether you’re building a
          personal website, blog, or business page, a custom-designed site:
        </p>
        <ul>
          <li>
            <strong>Enhances User Experience (UX):</strong> When users feel that
            they can easily navigate and engage with the design, the overall
            experience improves. Customization lets you prioritize what’s most
            important to you, ensuring the site is tailored to your needs.
            effortlessly.
          </li>
          <li>
            <strong>Reflects Personality and Style:</strong> For individuals,
            the ability to create a personalized space on the web helps express
            unique style and creativity. Whether it’s through the use of bold
            fonts or a subtle color palette, your website becomes an extension
            of your personality.
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
                    Website Builder
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
                <Image src={webDesign} alt="theme-pure" />
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
                    shareTitle={`Custom Website`}
                    shareText={`Design Your Own Experience: The Power of Customizing Every Detail of Your Website."`}
                    shareUrl={"https://framespik.com/custom-website "}
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
