import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/assets/css/Pricingcss/planSelectBox.css";
import Reload from "@/assets/img/plansandpricing/reload.svg";
import Check from "@/assets/img/plansandpricing/check.svg";
import Question from "@/assets/img/plansandpricing/questionMark.svg";
import RightArrow from "@/assets/img/plansandpricing/rightArrow.svg";
import RightArrowWhite from "@/assets/img/plansandpricing/rightArrowWhite.svg";
import CheckWhite from "@/assets/img/plansandpricing/checkWhite.svg";
import VideoPopup from "@/modals/video-popup";

const PlanSelectionBox = () => {
  const [snackBoxVideo, setSnackBoxVideo] = useState(false);
  

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [value, setValue] = useState(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="container-fluid px-0 py-5" style={{ color: "white" }}>
        <div className="container p-0">
          <div className="row mt-3 ">
            {/* Left Container */}
            <div className="col-lg-8 ">
              {/* Block with Dropdown and Badge */}
              <div
                className="card mb-4"
                style={{ backgroundColor: "white", borderRadius: "12px" }}
              >
                <div className="  card-body d-flex justify-content-between align-items-center">
                  <select
                    className="tenureDropdown"
                    defaultValue="1"
                    style={{
                      appearance: "none",
                      backgroundColor: "#f2f0fb",
                      color: "black",
                      borderColor: "rgb(224 224 224)",
                      fontSize: "1rem",
                      padding: "7px 20px",
                      borderRadius: "8px",
                      width: "30%",
                      outline: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backgroundImage:
                        'url(\'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23000"%3E%3Cpath d="M1.5 5.5a.5.5 0 0 1 .7-.7L8 10.6l5.8-5.8a.5.5 0 0 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-6-6z"/%3E%3C/svg%3E\')',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 20px center",
                      backgroundSize: "16px 16px",
                    }}
                  >
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                  </select>

                  <span
                    style={{
                      backgroundColor: "#000",
                      color: "#fff",
                      fontSize: "12px",
                      padding: "6px 15px",
                      borderRadius: "35px",
                    }}
                  >
                    Missed{" "}
                    <span style={{ fontWeight: 700, fontSize: "0.8rem" }}>
                      28%
                    </span>
                  </span>
                </div>
              </div>

              {/* Storage Capacity Block */}
              <div
                className="card  "
                style={{ backgroundColor: "#f8f9fa", borderRadius: "12px" }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#f2f0fb",
                    color: "#5d5e64",
                  }}
                >
                  Storage Capacity
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span style={{ color: "#000", fontSize: "1.5rem" }}>
                      1 TB
                    </span>
                    <span style={{ color: "#767676" }}>₹2/GB</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      padding: "02px 0",
                    }}
                  >
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={handleChange}
                      style={{
                        WebkitAppearance: "none",
                        appearance: "none",
                        width: "100%",
                        height: "10px",
                        background: "#600ee4",
                        borderRadius: "16px",
                        outline: "none",
                        transition: "opacity .2s",
                        boxShadow: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: `calc(${value}% - 30px)`,
                        top: "-40px",
                        padding: "5px 10px",
                        background: "#4441cf",
                        color: "white",
                        borderRadius: "4px",
                        fontSize: "12px",
                        opacity: "0",
                        transition: "opacity 0.3s, transform 0.3s",
                        transform: "translateY(10px)",
                        pointerEvents: "none",
                      }}
                      className="tooltip"
                    >
                      {value}
                    </div>
                    <style jsx>{`
                      input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 20px;
                        height: 20px;
                        border: 3px solid #9c9afb;
                        background: white;
                        cursor: pointer;
                        border-radius: 50%;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                      }
                      input[type="range"]::-moz-range-thumb {
                        width: 25px;
                        height: 25px;
                        background: #4441cf;
                        cursor: pointer;
                        border-radius: 50%;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                      }
                      input[type="range"]:hover + .tooltip {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    `}</style>
                  </div>
                  <div
                    className=" p-2 d-flex align-items-center justify-content-center"
                    style={{
                      position: "absolute",
                      top: "2%",
                      right: "1.5%",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      width: "2rem",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Image
                      style={{
                        width: "1rem",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      src={Reload}
                      alt="Reload"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Container */}
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div
                className="card h-100"
                style={{
                  backgroundColor: "#000",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                <div className="card-body p-4 ">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="card-title">Snack Box</h3>
                    <span
                      style={{
                        backgroundColor: "rgb(75 75 75 / 50%)",
                        color: "#fff",
                        borderRadius: "50%",
                        height: "2rem",
                        width: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        style={{
                          width: "1.2rem",
                          height: "auto",
                          cursor: "pointer",
                        }}
                        onClick={() => setSnackBoxVideo(true)}
                        src={Question}
                        alt="Question"
                      />
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control custom-placeholder"
                        placeholder="Max File Size"
                        style={{
                          backgroundColor: "transparent",
                          border: "3px solid rgb(75 75 75 / 50%)",
                          color: "white",
                          boxShadow: "none",
                        }}
                      />

                      <style>
                        {`
    .custom-placeholder::placeholder {
      color: #9d9d9d; /* Change this to your desired color */
    }
  `}
                      </style>
                      <span
                        className="input-group-text "
                        style={{
                          backgroundColor: "rgb(75 75 75 / 50%)",
                          color: "white",
                          padding: "10px",
                          border: "3px solid rgb(75 75 75 / 50%)",
                        }}
                      >
                        &nbsp;&nbsp; GB &nbsp;&nbsp;
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="input-group mt-4">
                      <input
                        type="text"
                        className="form-control custom-placeholder"
                        placeholder="Max Openings Events"
                        style={{
                          backgroundColor: "transparent",
                          border: "3px solid rgb(75 75 75 / 50%)",
                          color: "#fff",
                          padding: "10px",
                          borderRadius: "5px",
                          boxShadow: "none",
                        }}
                      />

                      <style>
                        {`
    .custom-placeholder::placeholder {
      color: #9d9d9d; /* Change this to your desired color */
      opacity: 1; /* Optional: Makes the placeholder fully visible */
    }
  `}
                      </style>

                      {/* <span
                      className="input-group-text"
                      style={{
                        backgroundColor: "rgb(75 75 75 / 50%)",
                        color: "white",
                        padding: "10px",
                        border:"3px solid rgb(75 75 75 / 50%)",
                        borderColor:"rgb(75 75 75 / 50%) "
                      }}
                    >
                      Events
                    </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="row mt-4 ">
            {["Base", "Pro", "Premium"].map((plan, index) => (
              <div key={index} className="col-xl-4 col-md-6 mb-4 ">
                <div
                  className="card h-100 pb-5"
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                  }}
                >
                  {index > 0 && (
                    <div
                      className="card-header"
                      style={{
                        backgroundColor: "#9c9afb",
                        color: "#000",
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "15px",
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                      }}
                    >
                      Save ₹12,000
                    </div>
                  )}
                  <div className="card-body">
                    <h2
                      className="card-title"
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        color:
                          plan === "Base"
                            ? "black"
                            : plan === "Pro"
                            ? "#000"
                            : "#000",
                      }}
                    >
                      {plan}
                    </h2>
                    <p
                      style={{
                        width: "280px",
                        color: "grey",
                        fontWeight: "lighter",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur amet{" "}
                    </p>{" "}
                    <br />
                    <p
                      className="card-text mb-3"
                      style={{
                        fontSize: "56px",
                        marginBottom: "20px",
                        fontWeight: "600",
                        color: "#000",
                      }}
                    >
                      ₹4,990
                      <sup
                        style={{
                          fontSize: "0.3em",
                          verticalAlign: "1rem",
                          fontWeight: "lighter",
                        }}
                      >
                        &nbsp;/month
                      </sup>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          verticalAlign: "0.6rem",
                          marginLeft: "-4.2em",
                        }}
                      >
                        +GST
                      </span>
                    </p>
                    <hr className="mt-30 mb-30"></hr>
                    <ul className="list-unstyled ml-5 mb-5">
                      {[
                        "Unlimited requests",
                        "Unlimited brands",
                        "Unlimited revisions",
                        "Free stock assets",
                        "Unlimited revisions",
                        "Free stock assets",
                        "Native source files",
                      ].map((feature, i) => (
                        <li
                          key={i}
                          style={{ fontSize: "17px", marginBottom: "8px" }}
                        >
                          <span
                            style={{
                              color: "black",
                              backgroundColor: "#fff",
                              borderRadius: "50%",
                              marginRight: "0.5rem",
                              padding: "0.2rem 0.4rem",
                            }}
                          >
                            <Image src={Check} alt="" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="d-flex flex-row justify-content-between  align-items-center mt-4 mb-1 ml-5 col-12   "
                      style={{
                        position: "absolute",
                        bottom: "2.5%",
                        width: "90%",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#000",
                          color: "#fff",
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: "50px",
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                      >
                        Get Started
                      </button>
                      <Image src={RightArrow} alt="rightArrow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/*Exclusive */}

            <div className=" col-md-6 col-xl-4 mb-4 d-md-block d-xl-none  ">
              <div
                className="card h-100 pb-5"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#9c9afb",
                    color: "#fff",
                    fontSize: "12px",
                    padding: "4px 10px",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                  }}
                >
                  Save ₹10,000
                </div>
                <div className="card-body">
                  <h2
                    className="card-title"
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#fff",
                    }}
                  >
                    Ultra Premium
                  </h2>
                  <p
                    style={{
                      width: "280px",
                      color: "grey",
                      fontWeight: "lighter",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <br />
                  <p
                    className="card-text mb-3"
                    style={{
                      fontSize: "56px",
                      marginBottom: "20px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    ₹6,990
                    <sup
                      style={{
                        fontSize: "0.3em",
                        verticalAlign: "1rem",
                        fontWeight: "lighter",
                      }}
                    >
                      &nbsp;/month
                    </sup>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        verticalAlign: "0.6rem",
                        marginLeft: "-4.2em",
                      }}
                    >
                      +GST
                    </span>
                  </p>
                  <hr className="mt-30 mb-30"></hr>
                  <ul className="list-unstyled ml-5 mb-5">
                    {[
                      "Dedicated support",
                      "Priority service",
                      " premium assets",
                      "Custom source files",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        style={{ fontSize: "17px", marginBottom: "8px" }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            borderRadius: "50%",
                            marginRight: "0.5rem",
                            padding: "0.2rem 0.4rem",
                          }}
                        >
                          <Image src={CheckWhite} alt="" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="d-flex flex-row justify-content-between align-items-center mt-4 mb-1 ml-5 col-12"
                    style={{
                      position: "absolute",
                      bottom: "2.5%",
                      width: "90%",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "50px",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                    >
                      Get Started
                    </button>
                    <Image src={RightArrowWhite} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra Premium */}
          <div className="row">
            <div className="">
              <div
                className="card col-sm-12 d-none d-xl-block d-lg-block  p-2"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "12px",
                }}
              >
                <div className="card-body d-flex justify-content-between UltraPremiumCard">
                  <div className="">
                    <h2
                      className="card-title UltraPremiumHead"
                      style={{ color: "#fff", fontSize: "2rem" }}
                    >
                      Ultra Premium
                    </h2>
                    <span
                      className="card-text mt-3 mb-0"
                      style={{ fontSize: "14px", color: "grey" }}
                    >
                      No-code development. Without design.
                    </span>
                    <div className="d-flex flex-row justify-content-space-between mt-2">
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "3rem",
                          justifyContent: "space-between",
                        }}
                      >
                        <p
                          className="card-text mt-3 AllFeaturestag"
                          style={{
                            fontSize: "16px",
                            display: "flex",
                            alignItems: "center",
                            color: "#6f6f6f",
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              backgroundColor: "rgb(195, 244, 123)",
                              borderRadius: "50%",
                              marginRight: "0.5rem",
                              padding: "0.3rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "1.5rem",
                              height: "1.5rem",
                            }}
                          >
                            <Image src={Check} alt="" />
                          </span>
                          All Features Included
                        </p>

                        <p
                          className="card-text mt-3 WebAppTag"
                          style={{
                            fontSize: "16px",
                            display: "flex",
                            alignItems: "center",
                            color: "#6f6f6f",
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              backgroundColor: "rgb(195, 244, 123)",
                              borderRadius: "50%",
                              marginRight: "0.5rem",
                              padding: "0.3rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "1.5rem",
                              height: "1.5rem",
                            }}
                          >
                            <Image src={Check} alt="" />
                          </span>
                          24/7 Support
                        </p>

                        <p
                          className="card-text UltraPremiumTags"
                          style={{
                            fontSize: "16px",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "0rem",
                            color: "#6f6f6f",
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              backgroundColor: "rgb(195, 244, 123)",
                              borderRadius: "50%",
                              marginRight: "0.5rem",
                              padding: "0.3rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "1.5rem",
                              height: "1.5rem",
                            }}
                          >
                            <Image src={Check} alt="" />
                          </span>
                          Web + App
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h3
                      className="mb-0 PriceTag"
                      style={{
                        color: "#fff",
                        fontSize: "2.5rem",
                        marginLeft: "1.5rem",
                      }}
                    >
                      ₹4,990
                      <sup
                        className=""
                        style={{ fontSize: "12px", verticalAlign: "1.5rem" }}
                      >
                        &nbsp;/monthly
                      </sup>
                      <sub
                        style={{
                          fontSize: "10px",
                          verticalAlign: "0.7rem",
                          marginLeft: "-2.99rem",
                        }}
                      >
                        +GST
                      </sub>
                    </h3>
                    <div className="">
                      <button
                        className="GetStarted"
                        style={{
                          backgroundColor: "#fff",
                          color: "#000",
                          marginLeft: "6rem",
                          border: "none",
                          borderRadius: "20px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginTop: "15%",
                          padding: "0.5rem 1.5rem",
                        }}
                      >
                        Get&nbsp;Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPopup
        isVideoOpen={snackBoxVideo}
        setIsVideoOpen={setSnackBoxVideo}
        videoId={"HsRtw4Jrluo"}
      />
    </>
  );
};

export default PlanSelectionBox;
