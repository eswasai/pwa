"use client";

import react, { useState, useEffect } from "react";
import Image from "next/image";
import "@/assets/css/otherpricing/updateContainer.css";
import "@/assets/css/Pricingcss/planSelectBox.css";
import WebIcon from "@/assets/img/plansandpricing/webIcon.svg";
import MobileIcon from "@/assets/img/plansandpricing/mobileIcon.svg";
import MobilePlansIcon from "@/assets/img/plansandpricing/mobilePlans.svg";
import Question from "@/assets/img/plansandpricing/updateQuestionMark.svg";
import Both from "@/assets/img/plansandpricing/android-ios.svg";

import VideoPopup from "@/modals/video-popup";

import { fetchWebupdateCharges } from "@/data/plans-data";
import { showToast } from "@/utils/toastUtils";

const UpdatePricing = ({ num = 0 }) => {
  const [platform, setPlatform] = useState("Android");
  const [webUpdateVideo, setWebUpdateVideo] = useState(false);
  const [appUpdateVideo, setAppUpdateVideo] = useState(false);
  const [grabAppVideo, setGrabAppVideo] = useState(false);
  // web update
  const [webupdateCount, setWebupdateCount] = useState("");
  const [webCharges, setWebCharges] = useState(null);
  const [loading, setLoading] = useState(false);
  const [webupdateTotal, setWebupdateTotal] = useState(0);

  // Fetch API data on mount
  useEffect(() => {
    setLoading(true);
    fetchWebupdateCharges((error, data) => {
      if (error) {
        showToast.error(`Error fetching update charges: ${error.message}`);
      } else {
        setWebCharges(data);
        const minPurchase = data?.[0]?.minPurchaseCount || 3;
        setWebupdateCount(minPurchase.toString());
        calculateWebUpdateCost(minPurchase.toString(), data);
      }
      setLoading(false);
    });
  }, []);

  // Calculate web update cost
  const calculateWebUpdateCost = (count, data) => {
    if (!data || !data[0] || !count) {
      setWebupdateTotal(0);
      return;
    }
    const countNum = parseInt(count);
    const costPerUpdate = data[0].costPerUpdate || 120.0;
    const total = countNum * costPerUpdate;
    setWebupdateTotal(total.toFixed());
  };

  // Handle update count input change
  const handleWebUpdateCountChange = (e) => {
    const value = e.target.value;
    const minPurchase = webCharges?.[0]?.minPurchaseCount || 3;

    if (value === "") {
      setWebupdateCount("");
      setWebupdateTotal(0);
    } else {
      const parsedValue = parseInt(value);
      if (isNaN(parsedValue) || parsedValue < minPurchase) {
        showToast.error(`Minimum update count is ${minPurchase}!`);
        setWebupdateCount(minPurchase.toString());
        calculateWebUpdateCost(minPurchase.toString(), webCharges);
      } else {
        setWebupdateCount(value);
        calculateWebUpdateCost(value, webCharges);
      }
    }
  };

  // Handle Get Started button click
  const handleGetStarted = () => {
    console.log(`User selected - Update Count: ${webupdateCount}`);
  };

  return (
    <>
      <div className={`container mt-${num}`}>
        <div className="mt-90 mb-70 ">
          <h1 className=" fw-bold" style={{ color: "#000", fontSize: "4rem" }}>
            Web & App Pricing
          </h1>
          <p className="mt-20 " style={{ fontWeight: "600" }}>
            Stay ahead with real-time updates tailored to your requirements.{" "}
          </p>
        </div>

        <div className="row mb-5 ">
          {/* First Card */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5">
            <div
              className="card"
              style={{
                backgroundColor: "white",
                padding: "20px 30px",
                borderRadius: "20px",
                border: "1px solid rgb(230, 230, 230)",
                boxShadow: "0px -1px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="card-header mb-4"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px 0",
                  padding: "0px",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgb(240, 236, 236)",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "7px",
                      backgroundColor: "#b6efa047",
                    }}
                  >
                    <Image
                      style={{ width: "2.2rem" }}
                      src={WebIcon}
                      alt="webicon"
                      width={35} // Added for Next.js Image
                      height={35} // Added for Next.js Image
                    />
                  </div>
                </div>
                <a
                  className="link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "1.5px solid #eaeaea",
                    borderRadius: "50%",
                    height: "2rem",
                    width: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: "1.2rem",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    src={Question}
                    alt="Question"
                    width={20} // Added for Next.js Image
                    height={20} // Added for Next.js Image
                    onClick={() => setWebUpdateVideo(true)}
                  />
                </a>
              </div>
              <div className="card-content" style={{ margin: "15px 0" }}>
                <p>
                  <span style={{ fontSize: "1rem", color: "#a5a5a5" }}>
                    Updated in Seconds
                  </span>
                </p>
                <h1
                  className="mb-4"
                  style={{
                    margin: "0",
                    fontSize: "2.5rem",
                    color: "black",
                    fontWeight: "600",
                    letterSpacing: "0.2px",
                  }}
                >
                  Web Update
                </h1>
                <div
                  className="tags"
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    marginBottom: "3px",
                  }}
                >
                  <div
                    className="tag"
                    style={{
                      backgroundColor: "#f1f1f1",
                      padding: "10px 13px",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    1000+ Designs
                  </div>
                  <div
                    className="tag"
                    style={{
                      backgroundColor: "#f1f1f1",
                      padding: "10px 13px",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Totally Flexible
                  </div>
                </div>
              </div>
              <div className="UpdateGroup mt-3 mb-4">
                <input
                  type="number"
                  className="form-control custom-placeholder"
                  placeholder="Update Count"
                  value={webupdateCount}
                  onChange={handleWebUpdateCountChange}
                  min={webCharges?.[0]?.minPurchaseCount || 3}
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #e9e9e9",
                    color: "#000",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    boxShadow: "none",
                  }}
                />
                <style>
                  {`
                          .custom-placeholder::placeholder {
                            color: #9d9d9d;
                            opacity: 1;
                          }
                        `}
                </style>
              </div>
              <br />
              <br />
              <hr style={{ opacity: "5%" }} />
              <div
                className="card-footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px",
                  backgroundColor: "white",
                  border: "none",
                }}
              >
                <div className="mt-0">
                  <div>
                    <h3 style={{ color: "#000", fontWeight: "600" }}>
                      ₹{webupdateTotal || "0"}/-
                    </h3>
                    <span style={{ fontWeight: "", color: "#a5a5a5" }}>
                      ₹{webCharges?.[0]?.costPerUpdate || "0"}/
                    </span>
                    <span style={{ fontSize: "13px", color: "#a5a5a5" }}>
                      update
                    </span>
                  </div>
                </div>
                <button
                  className="apply-btn mt-0"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "7px",
                    padding: "11px 14px",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                  disabled={loading}
                  onClick={handleGetStarted}
                >
                  {loading ? "Fetching..." : "Get Started"}
                </button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5">
            <div
              className="card"
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "20px 30px",
                border: "1px solid rgb(230, 230, 230)",
                boxShadow: "0px -1px  10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="card-header mb-4"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px 0",
                  padding: "0px",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgb(240, 236, 236) ",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "7px",
                      backgroundColor: "#ffc60047",
                    }}
                  >
                    <Image
                      style={{ width: "2.2rem" }}
                      src={MobileIcon}
                      alt="webicon"
                      width={35} // Added for Next.js Image
                      height={35} // Added for Next.js Image
                    />
                  </div>
                </div>
                <a
                  className="link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "1.5px solid #eaeaea",
                    borderRadius: "50%",
                    height: "2rem",
                    width: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: "1.2rem",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    src={Question}
                    alt="Question"
                    onClick={() => setAppUpdateVideo(true)}
                    width={20} // Added for Next.js Image
                    height={20} // Added for Next.js Image
                  />
                </a>
              </div>
              <div className="card-content" style={{ margin: "15px 0" }}>
                <p>
                  <span style={{ fontSize: "1rem", color: "#a5a5a5" }}>
                    Updated in a Week
                  </span>
                </p>
                <h1
                  className="mb-4"
                  style={{
                    margin: "0",
                    fontSize: "2.5rem",
                    color: "black",
                    fontWeight: "600",
                    letterSpacing: "0.2px",
                  }}
                >
                  App Update
                </h1>
                <div
                  className="tags"
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    marginBottom: "3px",
                  }}
                >
                  <div
                    className="tag"
                    style={{
                      backgroundColor: "#f1f1f1",
                      padding: "10px 13px",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    1000+ Designs
                  </div>
                  <div
                    className="tag"
                    style={{
                      backgroundColor: "#f1f1f1",
                      padding: "0", // Adjusted to remove padding since select has its own
                      borderRadius: "5px",
                      fontSize: "1rem",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <select
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      style={{
                        backgroundColor: "#f1f1f1",
                        border: "none",
                        padding: "10px 25px 10px 13px", // Adjusted right padding to make room for arrow
                        borderRadius: "5px",
                        fontSize: "1rem",
                        color: "black",
                        outline: "none", // Removes focus outline
                        cursor: "pointer",
                        width: "100%", // Ensures it fits the container
                        appearance: "none", // Removes default arrow
                        backgroundImage:
                          'url(\'data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>\')', // Custom arrow
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 8px center", // Moved arrow closer to text
                      }}
                    >
                      <option value="Android">iOS</option>
                      <option value="iOS">Android &nbsp;</option>
                      <option value="Android">Both</option>

                    </select>
                    <style>
                      {`
        .tag select {
          background-color: #f1f1f1;
          color: black;
        }
        .tag select:hover {
          background-color: #e0e0e0; /* Hover on the select itself */
        }
        .tag select option {
          background-color: #ffffff; /* Default option background */
          color: black;
        }
      `}
                    </style>
                  </div>
                </div>
              </div>
              <div className="UpdateGroup mt-3 mb-4">
                <input
                  type="text"
                  className="form-control custom-placeholder"
                  placeholder="Update Count"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #e9e9e9",
                    color: "#000",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    boxShadow: "none",
                  }}
                />
                <style>
                  {`
          .custom-placeholder::placeholder {
            color: #9d9d9d;
            opacity: 1;
          }
        `}
                </style>
              </div>
              <br />
              <br />
              <hr style={{ opacity: "05%" }} />
              <div
                className="card-footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px",
                  backgroundColor: "white",
                  border: "none",
                }}
              >
                <div className="mt-0">
                  <div>
                    <h3 style={{ color: "#000", fontWeight: "600" }}>
                      ₹3,000/-
                    </h3>
                    <span style={{ fontWeight: "", color: "#a5a5a5" }}>
                      ₹400/
                    </span>
                    <span style={{ fontSize: "13px", color: "#a5a5a5" }}>
                      update
                    </span>
                  </div>
                </div>
                <button
                  className="apply-btn mt-0"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "7px",
                    padding: "11px 14px",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/*  third card */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5 ">
            <div
              className="card grabAppCard "
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "20px 30px",
                border: "1px solid rgb(230, 230, 230)",
                boxShadow: "0px -1px  10px rgba(0, 0, 0, 0.1)",
                height: "100%",
              }}
            >
              <div
                className="card-header mb-4"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px 0",
                  padding: "0px",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgb(240, 236, 236) ",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "7px",
                      backgroundColor: "#EA908070",
                    }}
                  >
                    <Image
                      style={{ width: "2.2rem" }}
                      src={MobilePlansIcon}
                      alt="webicon"
                    />
                  </div>
                </div>
                <a
                  className="link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "1.5px solid #eaeaea",
                    borderRadius: "50%",
                    height: "2rem",
                    width: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: "1.2rem",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    src={Question}
                    alt="Question"
                    onClick={() => setGrabAppVideo(true)}
                  />
                </a>
              </div>
              <div className="card-content" style={{ margin: "15px 0" }}>
                <p>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#a5a5a5",
                    }}
                  >
                    Build your Own branding app !
                  </span>
                </p>
                <h1
                  className="mb-2"
                  style={{
                    margin: "0",
                    fontSize: "2.5rem",
                    color: "black",
                    fontWeight: "600",
                    letterSpacing: "0.2px",
                  }}
                >
                  Grab App
                </h1>
              </div>
              <div className="selectAppPlans">
                <div className="selectPlanTopArea">
                  <div className="selectPlanBox isActivated">
                    {/* isActivated */}
                    <i className="fab fa-android planSelectionIcon"></i>
                    <p className="selectPlanBoxText">Andriod</p>
                  </div>
                  <div className="selectPlanBox">
                    <i className="fab fa-apple planSelectionIcon"></i>
                    <p className="selectPlanBoxText">Ios</p>
                  </div>
                  <div className="selectPlanBox">
                    <Image style={{ width: "4rem" }} src={Both} alt="webicon" />{" "}
                    <p className="selectPlanBoxText">Both</p>
                  </div>
                </div>
                <div className="cardLine">
                  <hr style={{ opacity: "05%" }} />
                  <div
                    className="card-footer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0px",
                      backgroundColor: "white",
                      border: "none",
                    }}
                  >
                    <div className="mt-0">
                      <div>
                        <h3 style={{ color: "#000", fontWeight: "600" }}>
                          ₹3,000/-
                        </h3>
                        <span style={{ fontWeight: "", color: "#a5a5a5" }}>
                          ₹400/
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            color: "#a5a5a5",
                          }}
                        >
                          update
                        </span>
                      </div>
                    </div>
                    <button
                      className="apply-btn mt-0"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        borderRadius: "7px",
                        padding: "11px 14px",
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPopup
        isVideoOpen={webUpdateVideo}
        setIsVideoOpen={setWebUpdateVideo}
        videoId={"HsRtw4Jrluo"}
      />
      <VideoPopup
        isVideoOpen={appUpdateVideo}
        setIsVideoOpen={setAppUpdateVideo}
        videoId={"HsRtw4Jrluo"}
      />
      <VideoPopup
        isVideoOpen={grabAppVideo}
        setIsVideoOpen={setGrabAppVideo}
        videoId={"HsRtw4Jrluo"}
      />
    </>
  );
};

export default UpdatePricing;
