"use client";

import React, { useState, useEffect } from "react";
// Import FontAwesome library and icons
import Image from "next/image";
import "@/assets/css/otherpricing/otherpricingmaincontainer.css";
import Img_1 from "@/assets/img/other-prices/data-backup.jpeg";
import Img_2 from "@/assets/img/other-prices/storage-rental.jpeg";
import Img_3 from "@/assets/img/other-prices/star.png";
import Question from "@/assets/img/plansandpricing/updateQuestionMark.svg";
import SdCard from "@/assets/img/other-prices/sd.svg";
import CameraCard from "@/assets/img/other-prices/CameraCard.svg";
import Pendrive from "@/assets/img/other-prices/Pendrive.svg";
import HardDisk from "@/assets/img/other-prices/HardDisk.svg";
import VideoPopup from "@/modals/video-popup";

import { fetchRentalCharges } from "@/data/plans-data";
import { showToast } from "@/utils/toastUtils";

const OtherPricingMainContainer = () => {
  const [storageSize, setStorageSize] = useState("");
  const [days, setDays] = useState("7");
  const [chargesData, setChargesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [databackupVideo, setDatabackupVideo] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRentalCharges((error, data) => {
      if (error) {
        showToast.error(`Error fetching charges: ${error.message}`);
      } else {
        setChargesData(data);
        const minPurchase = data.minPurchaseInGb || 100;
        setStorageSize(minPurchase.toString());
        calculatePrice(minPurchase.toString(), days, data);
      }
      setLoading(false);
    });
  }, []);

  // Handle storage size input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value < 100) {
      showToast.info("The minimum purchase GB is 100");
    }
    setStorageSize(value);
    calculatePrice(value, days, chargesData);
  };

  // Handle days input change
  const handleDaysChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseInt(value) < 7) {
      showToast.info("Minimum rental period is 7 days!");
      setDays("");
      calculatePrice(storageSize, "", chargesData);
    } else {
      const constrainedValue = Math.min(100, parseInt(value));
      setDays(constrainedValue.toString());
      calculatePrice(storageSize, constrainedValue.toString(), chargesData);
    }
  };

  // Calculate total price
  const calculatePrice = (size, daysCount, data) => {
    if (!data || !data[0] || !size || !daysCount) {
      setTotalPrice(0);
      return;
    }
    const sizeNum = parseFloat(size);
    const daysNum = parseFloat(daysCount);
    const costPerGbDay = data[0].costPerGbDay || 2.0;
    const total = sizeNum * costPerGbDay * daysNum;
    setTotalPrice(total.toFixed(0));
  };

  // Get image based on storage size
  const getImageBySize = (size) => {
    const defaultSize = 1;
    const sizeNum = isNaN(size) || size === "" ? defaultSize : parseFloat(size);

    if (sizeNum >= 1 && sizeNum <= 16) return SdCard;
    if (sizeNum >= 17 && sizeNum <= 50) return CameraCard;
    if (sizeNum >= 51 && sizeNum <= 300) return Pendrive;
    return HardDisk;
  };

  const handleGetStarted = () => {
    console.log(`Rental Storage in ${storageSize} : ${days}`);
  };

  // Convert storageSize to a number
  return (
    <>
      <div className="container mb-120 ">
        <div className=" mb-70 ">
          <p className=" fw-bold text-white">
            Stay ahead with real-time updates tailored to your requirements.{" "}
          </p>
        </div>
        <div className="row  ">
          {/* Data Backup */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3  ">
            <div
              className="card "
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "20px",
                border: "none",
                boxShadow: "0px -1px  10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                position: "relative",
                height: "100%",
                // margin: "10px",
                paddingBottom: "0px",
              }}
            >
              <div
                className="card-header "
                style={{
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  margin: "10px",
                  borderRadius: "10px",
                  border: "1px solid rgba(44, 43, 43, 0.078)",
                  overflow: "hidden",
                }}
              >
                <p
                  className="dataBackupParatag"
                  style={{
                    fontSize: "1.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    zIndex: 2,
                    textShadow: "1px 1px 1px rgba(88, 88, 88, 0.5)",
                    margin: "0",
                    position: "absolute",
                    top: "10%",
                    left: "5%",
                  }}
                >
                  #1
                </p>
                <h2
                  style={{
                    fontSize: "36px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    zIndex: 2,
                    textShadow: "1px 1px 1px rgba(88, 88, 88, 0.5)",
                    margin: "0",
                    position: "absolute",
                    top: "25%",
                    left: "5%",
                  }}
                >
                  Data Backup
                </h2>
                <Image
                  src={Img_1}
                  alt="Img-1"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "100%",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "21%",
                  right: "1.2rem",
                  color: "black",
                  cursor: "pointer",
                  backgroundColor: "rgb(250, 250, 250)",
                  borderRadius: "50%",
                  height: "2rem",
                  width: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: "1.2rem" }}
                  src={Question}
                  alt="Questionmark"
                  onClick={() => setDatabackupVideo(true)}
                />
              </div>
              <div
                className="mb-4  "
                style={{ textAlign: "center", marginTop: "3.5rem" }}
              >
                <h4 className="fw-bold">
                  ₹4/
                  <span>
                    GB/<span>Year</span>
                  </span>
                </h4>
              </div>
              <section className=" m-2 mt-4 mb-5">
                <div className="d-flex flex-row justify-content-center">
                  <div
                    className="input-group m-2"
                    style={{ marginRight: "rem" }}
                  >
                    <input
                      type="text"
                      className="form-control dataBackupInput"
                      placeholder="total storage size"
                      style={{
                        fontSize: "1rem",
                        backgroundColor: "transparent",
                        border: "1.5px solid rgb(201 201 201 / 50%)",
                        color: "#000",
                        borderRadius: "5px",
                        padding: "10px 10px",
                        boxShadow: "none",
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0",
                      }}
                    />
                    <span
                      style={{
                        backgroundColor: "transparent",
                        border: "1.5px solid rgb(201 201 201 / 50%)",
                        color: "#5a6363",
                        borderRadius: "5px",
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0",
                        borderLeft: "none",
                        boxShadow: "none",
                      }}
                      className="input-group-text"
                    >
                      GB
                    </span>
                  </div>
                  <select
                    className="m-2 form-control tenureDropDown"
                    style={{
                      marginLeft: "0", // Remove left margin
                      padding: "8px 10px", // Adjust padding for compact look
                      width: "45%", // Reduce width slightly
                      borderRadius: "8px",
                      boxShadow: "none",
                      outline: "none",
                      cursor: "pointer",
                      color: "#5a6363",
                      transition: "all 0.3s ease",
                      backgroundImage:
                        'url(\'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23000"%3E%3Cpath d="M1.5 5.5a.5.5 0 0 1 .7-.7L8 10.6l5.8-5.8a.5.5 0 0 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-6-6z"/%3E%3C/svg%3E\')',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 10px center",
                      backgroundSize: "16px 16px",
                    }}
                  >
                    <option value="">15 years</option>
                    <option value="">3 years</option>
                    <option value="">5 years</option>
                    <option value="">8 years</option>
                  </select>
                </div>

                <div className=" m-2   dataDownloadDropdown ">
                  <select
                    defaultValue="1"
                    style={{
                      appearance: "none",
                      backgroundColor: "transparent",
                      border: "1.5px solid rgb(201 201 201 / 50%)",
                      color: "#5a6363",
                      borderRadius: "5px",
                      boxShadow: "none",
                      width: "100%",
                      padding: "10px 11px",
                      outline: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backgroundImage:
                        "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22%23000%22%3E%3Cpath d=%22M1.5 5.5a.5.5 0 0 1 .7-.7L8 10.6l5.8-5.8a.5.5 0 0 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-6-6z%22/%3E%3C/svg%3E')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 20px center",
                      backgroundSize: "16px 16px",
                    }}
                  >
                    <option
                      value="1"
                      disabled
                      style={{
                        fontSize: "1rem",
                        color: "#a0a0a0", // Placeholder color
                      }}
                    >
                      no. of downloads
                    </option>
                    <option
                      value="2"
                      style={{
                        backgroundColor: "#f5f5f5", // Background color on hover
                        color: "#333", // Text color on hover
                      }}
                    >
                      Unlimted
                    </option>
                    <option
                      value="3"
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                      }}
                    >
                      1
                    </option>
                    <option
                      value="4"
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                      }}
                    >
                      2
                    </option>
                    <option
                      value="5"
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                      }}
                    >
                      3
                    </option>
                    <option
                      value="5"
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                      }}
                    >
                      4
                    </option>
                    <option
                      value="5"
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                      }}
                    >
                      5
                    </option>
                  </select>
                </div>
              </section>

              <div
                className="footer p-2 dataBackupGetstarted "
                style={{
                  backgroundColor: "#f4f4f4",
                  margin: "0.6rem",
                  borderRadius: "12px",
                  marginTop: "4.2rem",
                }}
              >
                <div className="d-flex flex-row justify-content-between ">
                  <h5 className="mt-2">
                    <i className="fa fa-inr" aria-hidden="true"></i>₹400
                    <span style={{ fontSize: "0.5rem" }}>+GST</span>
                  </h5>
                  <button
                    style={{
                      color: "#fff",
                      padding: "0px 20px",
                      border: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                      backgroundColor: "black",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* second card Backup */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
            <div
              className="card"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "20px",
                border: "none",
                boxShadow: "0px -1px  10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                position: "relative",
                height: "100%",
                // margin: "10px",
                paddingBottom: "0px",
              }}
            >
              <div
                className="card-header "
                style={{
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  margin: "10px",
                  borderRadius: "10px",
                  border: "1px solid rgba(44, 43, 43, 0.078)",
                  overflow: "hidden",
                }}
              >
                <p
                  className="dataBackupParatag"
                  style={{
                    fontSize: "1.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    zIndex: 2,
                    textShadow: "1px 1px 1px rgba(88, 88, 88, 0.5)",
                    margin: "0",
                    position: "absolute",
                    top: "49%",
                    left: "5%",
                  }}
                >
                  #2
                </p>
                <h2
                  style={{
                    fontSize: "36px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    zIndex: 2,
                    textShadow: "1px 1px 1px rgba(88, 88, 88, 0.5)",
                    margin: "0",
                    position: "absolute",
                    top: "65%",
                    left: "5%",
                  }}
                >
                  Storage Rentals
                </h2>
                <Image
                  src={Img_2}
                  alt="Img-1"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "100%",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  right: "1.2rem",
                  color: "black",
                  cursor: "pointer",
                  backgroundColor: "rgb(250, 250, 250)",
                  borderRadius: "50%",
                  height: "2rem",
                  width: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: "1.2rem" }}
                  src={Question}
                  alt="Questionmark"
                  onClick={() => setDatabackupVideo(true)}
                />
              </div>
              <div
                className="mb-5  "
                style={{ textAlign: "center", marginTop: "3.5rem" }}
              >
                <h4 className="fw-bold">
                  ₹{chargesData?.[0]?.costPerGbDay || 2.0}
                  <span>
                    &nbsp;&nbsp;GB/<span>Day</span>
                  </span>
                </h4>
              </div>

              <section className="mt-0 mb-3 m-2 pb-2">
                <div className="d-flex flex-row justify-content-center">
                  <div className="input-group m-2">
                    <input
                      type="text"
                      className="form-control dataBackupInput"
                      placeholder="total storage size"
                      value={storageSize}
                      onChange={handleInputChange}
                      style={{
                        fontSize: "1rem",
                        backgroundColor: "transparent",
                        border: "1.5px solid rgb(201 201 201 / 50%)",
                        color: "#000",
                        borderRadius: "5px",
                        padding: "10px 10px",
                        boxShadow: "none",
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0",
                      }}
                    />
                    <span
                      style={{
                        backgroundColor: "transparent",
                        border: "1.5px solid rgb(201 201 201 / 50%)",
                        color: "#5a6363",
                        borderRadius: "5px",
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0",
                        borderLeft: "none",

                        boxShadow: "none",
                      }}
                      className="input-group-text"
                    >
                      GB
                    </span>
                  </div>
                  <input
                    type="text"
                    className="m-2 form-control tenureInput"
                    placeholder="enter days"
                    min="7"
                    max="100"
                    value={days}
                    onChange={handleDaysChange}
                    style={{
                      backgroundColor: "transparent",
                      border: "1.5px solid rgb(201 201 201 / 50%)",
                      color: "#5a6363",
                      fontSize: "0.85rem",
                      borderRadius: "8px",
                      padding: "11px 8px",
                      width: "50%",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "none",
                    }}
                  />
                  <style>
                    {`
         .tenureInput::placeholder {
           color: #5a6363"; /* Placeholder color */
           opacity: 1;
         }
         
       `}
                  </style>
                </div>
              </section>
              <div
                className="storage-image-container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "120px",
                  width: "100%",
                  padding: "10px 0px",
                  borderRadius: "0.3rem",
                }}
              >
                <Image
                  src={getImageBySize(storageSize)}
                  alt="Storage Device"
                  style={{
                    height: "100%", // Ensures all images are the same height
                    width: "auto", // Maintains aspect ratio
                    objectFit: "contain", // Prevents image distortion
                    opacity: "8%",
                  }}
                />
              </div>

              <div
                className="footer p-2 getStartedBlock  "
                style={{
                  backgroundColor: "#f4f4f4",
                  margin: "0.6rem",
                  borderRadius: "12px",
                  marginTop: "2rem",
                }}
              >
                <div className="d-flex flex-row justify-content-between ">
                  <h5 className="mt-2">
                    <i className="fa fa-inr" aria-hidden="true"></i>₹
                    {totalPrice}
                    <span style={{ fontSize: "0.5rem" }}>+GST</span>
                  </h5>
                  <button
                    style={{
                      color: "#fff",
                      padding: "0px 20px",
                      border: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                      backgroundColor: "black",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    }}
                    disabled={loading}
                    onClick={handleGetStarted}
                  >
                    {loading ? "Fetching..." : "Get Started"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third backyup card */}
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3"
            style={{ position: "relative" }}
          >
            {/* First Card */}
            <div
              className="contactFirstCard"
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                position: "relative",
                padding: "20px",
                paddingBottom: "0px",
                marginBottom: "0px",
                maxWidth: "450px",
              }}
            >
              <Image
                className="mb-3"
                src={Img_3}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <p
                style={{
                  backgroundColor: "#dbfa3a",
                  color: "black",
                  padding: "0px 10px",
                  borderRadius: "19px",
                  fontSize: "0.8rem",
                  width: "fit-content",
                }}
              >
                Fast Delivery
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "0px",
                }}
              >
                <div style={{ margin: "0", padding: "0" }}>
                  <h6
                    style={{
                      margin: "0",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    Web Services
                  </h6>
                  <p style={{ margin: "0", color: "grey" }}>₹2,999</p>
                  <br />
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "0.3rem 1rem",
                      borderRadius: "11rem",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div style={{ marginTop: "-15px", paddingBottom: "10px" }}>
                <p style={{ color: "grey" }}>
                  We're here to deliver the best in the industry web design
                  services for your brand. Let's work.
                </p>
                <hr style={{ opacity: "10%" }} />
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <span style={{ color: "#ccc" }}>+</span> Single Landing Page
                  </li>
                  <li>
                    <span style={{ color: "#ccc" }}>+</span> Design
                  </li>
                  <li>
                    <span style={{ color: "#ccc" }}>+</span> Unlimited
                    iterations
                  </li>
                  <li>
                    <span style={{ color: "#ccc" }}>+</span> Slack management +
                    Trello
                  </li>
                  <li>
                    <span style={{ color: "#ccc" }}>+</span> 3D assets
                  </li>
                  <li>
                    <span style={{ color: "#ccc" }}>+</span> Single Landing
                  </li>
                  <li>
                    <span style={{ color: "#ccc" }}>+</span> Landing Page
                  </li>
                  <li className="d-none d-xl-block d-lg-none d-md-none">
                    <span style={{ color: "#ccc" }}>+</span> Landing Page
                  </li>
                </ul>
              </div>
              {/* Collapse Indicator */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "-1rem",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "2rem",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 10,
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <span style={{ marginTop: "-5px" }}>-</span>
              </div>
            </div>
            {/* Second Card */}
            <div
              className="contactSecondCard "
              style={{
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                padding: "10px",
                marginTop: "8px",
                transform: "rotate(-2deg)",
                backgroundColor: "white",
                position: "relative",
                zIndex: 1,
                maxWidth: "450px",
              }}
            >
              <Image
                src={Img_3}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div className="mt-2">
                <h3
                  style={{
                    margin: "0",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                  }}
                >
                  Development
                </h3>
                <p style={{ margin: "0", color: "grey" }}>+$999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPopup
        isVideoOpen={databackupVideo}
        setIsVideoOpen={setDatabackupVideo}
        videoId="HsRtw4Jrluo"
      />

      <VideoPopup
        isVideoOpen={databackupVideo}
        setIsVideoOpen={setDatabackupVideo}
        videoId="HsRtw4Jrluo"
      />
    </>
  );
};

export default OtherPricingMainContainer;
