import VideoPopup from "@/modals/video-popup";
import React, { useState } from "react";

const company_content = {
  sub_title: "PAYMENT REMINDERS FOR CLIENTS",
  title: (
    <>
      Never miss a payment <br />
      with our automated reminders.
    </>
  ),
  info_1: (
    <>
      Our payment reminders ensure that you never forget an upcoming payment.
      Timely notifications keep everything on track, allowing for smooth
      transactions without the stress.
    </>
  ),
  info_2: (
    <>
      Automated alerts are sent to clients via email or SMS, ensuring that
      payments are made on time. Stay organized and in control of your cash
      flow.
    </>
  ),
  info_3: (
    <>
      Our system makes it simple to track payment statuses, set due dates, and
      maintain clear communication with clients. Stay on top of all your
      payments effortlessly.
    </>
  ),
};
const { sub_title, title, info_1, info_2, info_3 } = company_content;

const PaymentService = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="ab-company-area pt-50 pb-100">
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
                        20,000<em>+</em>
                      </h4>
                      <p>Receiving Reminders</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>VALUE</span>
                      <h4>
                        70<em>%</em>
                      </h4>
                      <p>On-Time Payments</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>IN</span>
                      <h4>
                        120<em>+</em>
                      </h4>
                      <p>Payment Reminders</p>
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

export default PaymentService;
