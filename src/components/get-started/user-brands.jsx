import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import "";

import middleBanner from "../public/assets/components/lightMode/banner.png";
import rocketIcon from "../public/assets/components/lightMode/rocket.svg";

const UserBrands = () => {
  const router = useRouter();

  return (
    <div className="homeWindow">
      <div className="mainHeading">
        <span>You are active in</span>
      </div>

      <div className="middleContainer">
        {/* New Brand Section */}
        <div className="newBrandLeftBox">
          <div className="newBrandLeftTop">
            <button
              className="newBrandButton"
              onClick={() => router.push("/brand-creation")}
            >
              <span className="launchDashboardText">Launch New Brand</span>
              {/* <Image
                src={rocketIcon}
                alt="Rocket Icon"
                className="newBrandIcon"
              /> */}
            </button>
          </div>
          {/* <Image
            src={middleBanner}
            alt="New Brand Banner"
            className="newBrandBanner"
          /> */}
        </div>

        {/* Placeholder for Organization List */}
        <div className="brandingDetailsBox">
          <div className="brandTitleArea">
            <span className="brandTitle">Brand Name</span>
          </div>
          <div className="brandingDetails">
            <div className="brandDescription">
              <span className="brandDetails">3 - Branch(s)</span>
            </div>
            <div className="brandDescription">
              <span className="brandDetails">10 - Active Team Member(s)</span>
            </div>
            <div className="brandDescription">
              <span className="brandDetails">Due on - 2025-02-01</span>
            </div>
          </div>
          <button
            className="launchDashboardBtn"
            onClick={() => router.push("/dashboard")}
          >
            Launch Dashboard
          </button>
        </div>
      </div>

      <div className="companyNote">
        Expand your photography business seamlessly with our tool. Start new
        brands without a physical studio. Manage your workflow and client
        interactions remotely, increasing your business traffic and efficiency.
        Start growing your brand with{" "}
        <span className="framespikHeading">framespik today!</span>
      </div>
    </div>
  );
};

export default HomUserBrands;
