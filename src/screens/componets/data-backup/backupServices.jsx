import VideoPopup from "@/modals/video-popup";
import React, { useState } from "react";

const company_content = {
  sub_title: "DATA BACKUP & SECURITY",
  title: (
    <>
      Data Backup & <br />
      Long-Term File Security
    </>
  ),
  info_1:
    "Effortless Data Backup: Framespik ensures long-term file security, storing client images and raw footage safely for up to 15 years.",
  info_2:
    "Seamless Access Anywhere: Clients can view, share, and edit their backed-up files via your branded app, Framespik’s platform, or compatible devices.",
  info_3:
    "Robust Data Protection: Eliminate concerns about device crashes or data loss with Framespik’s reliable storage solutions.",
  theme: "theme-pure",
};

const { sub_title, title, info_1, info_2, info_3 } = company_content;

const BackupServices = () => {
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
                        100K<em>+</em>
                      </h4>
                      <p>Backups</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>STORAGE</span>
                      <h4>
                        500<em>+</em>
                      </h4>
                      <p>TB Stored</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>LIKED</span>
                      <h4>
                        100K<em>+</em>
                      </h4>
                      <p>EVENTS</p>
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

export default BackupServices;
