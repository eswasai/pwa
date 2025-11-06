import VideoPopup from "@/modals/video-popup";
import React, { useState } from "react";

const company_content = {
  sub_title: "ABOUT THE APP",
  title: (
    <>
      Personalized Apps for <br />
      Your Unique Brand.
    </>
  ),
  info_1:
    "Framespik empowers creators by providing a seamless and intuitive platform to design and brand their own apps. Whether you're an individual creator or a growing business, Framespik makes it easy to personalize your app with your unique style and identity.",
  info_2:
    "Framespik offers a fully branded app solution with a seamless and user-friendly experience.Gain complete control over your app's look and feel, backed by a reliable and scalable platform designed to grow with your needs.",
  info_3:
    "Framespik says, building your own branded app has never been easier. Say goodbye to complexity and focus on what matters most—creating content and engaging your audience.",
};
const { sub_title, title, info_1, info_2, info_3 } = company_content;

const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="ab-company-area pt-105 pb-100">
        <div className="container">
          <div className="row ab-company-section-space">
            <div className="col-xl-6">
              <div className="ab-company-section-box">
                <h4 className="inner-section-subtitle">{sub_title}</h4>
                <h3 className="tp-section-title">{title}</h3>
              </div>
            </div>
            <div
              className="col-xl-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="ab-company-right">
                <div className="ab-company-section-text">
                  <p className="pb-10">{info_1}</p>
                  <p className="pb-10">{info_2}</p>
                  <p>
                    <span>{info_3}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="ab-company-video">
                <a className="popup-video" onClick={() => setIsVideoOpen(true)}>
                  <i className="fas fa-play"></i>
                </a>
                <span>Watch Demo</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                    <div className="ab-company-fun-fact">
                      <span>USED BY</span>
                      <h4>
                        10K<em>+</em>
                      </h4>
                      <p>Photography Brands</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>DESIGNS</span>
                      <h4>
                        500<em>+</em>
                      </h4>
                      <p>App designs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>IN</span>
                      <h4>
                        500<em>+</em>
                      </h4>
                      <p>Cities using</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"HsRtw4Jrluo"}
      />
      {/* video modal end */}
    </>
  );
};

export default CompanyArea;
