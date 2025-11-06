import ClockIcon from "@/svg/clock-icon";
import LocationIconThree from "@/svg/location-icon-3";
import Link from "next/link";
import React from "react";

const job_data = {
  sub_title: "Upcoming Features",
  title: (
    <>
      Join our Growing Research <br /> of Framespik.
    </>
  ),
  carrer_title: "Open Positions",
  carrer_info: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque
      tristique <br />
      Et amet risus enim accumsan sit purus sit.
    </>
  ),
  job_info: [
    {
      id: 1,
      title: "AI-Powered Album Creation",
      related_to: "AI Technology, Photography",
      timeline: "July 2025",
      link: "blogs/how-to-purchase-framespik-software-plan-quick-guide",
    },
    {
      id: 2,
      title: "Real-Time Collaboration",
      related_to: "Teamwork, Collaboration Tools",
      timeline: "July 2025",
      link: "blogs/team-collaboration-with-framespik-shared-cloud-storage",
    },
    {
      id: 3,
      title: "Advanced Video Editing Tools",
      related_to: "Video Editing, Post-Production",
      timeline: "Sep 2025",
      link: "blogs/how-to-use-vision-camera-guide",
    },
  ],
};

const { sub_title, carrer_info, title, carrer_title, job_info } = job_data;

const UpcomingFeatures = ({ style_carrer }) => {
  return (
    <>
      <div className="job-area pt-120 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="job-section-box text-center mb-40">
                {style_carrer ? (
                  <>
                    <h3 className="tp-section-title">{carrer_title}</h3>
                    <p>{carrer_info}</p>
                  </>
                ) : (
                  <>
                    <h4 className="inner-section-subtitle">{sub_title}</h4>
                    <h3 className="tp-section-title">{title}</h3>
                  </>
                )}
              </div>
            </div>
          </div>
          {job_info.map((item, i) => (
            <div key={item.id} className="job-post-box">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-4">
                  <div
                    className="job-post-info"
                    style={{
                      maxWidth: "250px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <h5
                      className="job-post-title"
                      style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: "1.3",
                        width: "100%",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </h5>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-location d-flex align-items-center col-lg-8">
                      <LocationIconThree />
                      <span>{item.related_to}</span>
                    </div>
                    <div className="job-post-time d-flex align-items-center col-lg-4 mr-0 ml-5">
                      <ClockIcon />
                      <span>{item.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href={item.link}
                    >
                      <span>Learn More</span>
                      <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingFeatures;
