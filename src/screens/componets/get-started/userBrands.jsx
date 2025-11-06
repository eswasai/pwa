import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import "@/assets/css/Manualcss/get-started/userBrands.css";
import middlleBanner from "@/assets/img/get-started/banner.png";
import Rocket from "@/assets/img/get-started/rocket.svg";
import IdCard from "@/assets/img/get-started/idCard.svg";
import Reddot from "@/assets/img/get-started/reddot.svg";
import VoioletDot from "@/assets/img/get-started/violetdot.svg";
import GreenDot from "@/assets/img/get-started/greendot.svg";
import LauchNewBranch from "@/assets/img/get-started/launch.svg";

const UserBrands = () => {
  //   const router = useRouter();

  return (
    <div className="window homeWindow">
      <span className="mainHeading">You are active in</span>
      <div className="middleContainer">
        <div className="newBrandleftBox">
          <div className="newBrandLeftTop">
            <button
              className="newBrandbutton"
              //   onClick={() => router.push("/brand-creation")}
            >
              <span className="lauchDashboardText">
                Launch&nbsp;New&nbsp;Brand
              </span>
              <Image
                src={Rocket}
                alt="Rocket Icon"
                className="newBrandIcon lightContent"
                width={24}
                height={24}
              />
            </button>
          </div>
          <Image
            src={middlleBanner}
            alt="New Brand Banner"
            className="newBrandBanner"
          />
        </div>

        {/* Example organization box */}
        <div className="brandingDetailsBox">
          <div className="brandtitleArea">
            <Image
              src={IdCard}
              alt="Brand Icon"
              className="newBrandIcon lightContent"
              width={24}
              height={24}
            />

            <span className="brandTitle">Example Organization</span>
          </div>
          <div className="brandingDetails">
            <div className="branddiscription">
              <Image
                src={Reddot}
                alt="Red Dot"
                className="elipsesCircle lightContent"
                width={12}
                height={12}
              />

              <span className="brandDetails">3 - Branch(s)</span>
            </div>
            <div className="branddiscription">
              <Image
                src={VoioletDot}
                alt="Violet Dot"
                className="elipsesCircle lightContent"
                width={12}
                height={12}
              />

              <span className="brandDetails">10 - Active Team Member(s)</span>
            </div>
            <div className="branddiscription">
              <Image
                src={GreenDot}
                alt="Green Dot"
                className="elipsesCircle lightContent"
                width={12}
                height={12}
              />

              <span className="brandDetails">Due on - 2025-01-24</span>
            </div>
          </div>

          <a href="./startbranch">
            <button className="launchDashboardBtn launchNewBranch">
              <span className="lauchDashboardText">Launch New Branch</span>
              <Image
                src={LauchNewBranch}
                alt="Launch New Branch Icon"
                className="newBrandIcon lightContent"
                width={24}
                height={24}
              />
            </button>
          </a>
        </div>
        {/* Example organization box */}
        <div className="brandingDetailsBox">
          <div className="brandtitleArea">
            <Image
              src={IdCard}
              alt="Brand Icon"
              className="newBrandIcon lightContent"
              width={24}
              height={24}
            />

            <span className="brandTitle">Example Organization</span>
          </div>
          <div className="brandingDetails">
            <div className="branddiscription">
              <Image
                src={Reddot}
                alt="Red Dot"
                className="elipsesCircle lightContent"
                width={12}
                height={12}
              />

              <span className="brandDetails">3 - Branch(s)</span>
            </div>
            <div className="branddiscription">
              <Image
                src={VoioletDot}
                alt="Violet Dot"
                className="elipsesCircle lightContent"
                width={12}
                height={12}
              />

              <span className="brandDetails">10 - Active Team Member(s)</span>
            </div>
            <div className="branddiscription">
              <Image
                src={GreenDot}
                alt="Green Dot"
                className="elipsesCircle lightContent"
                width={12}
                height={12}
              />

              <span className="brandDetails">Due on - 2025-01-24</span>
            </div>
          </div>

          <a href="./startbranch">
            <button className="launchDashboardBtn launchNewBranch">
              <span className="lauchDashboardText">Launch New Branch</span>
              <Image
                src={LauchNewBranch}
                alt="Launch New Branch Icon"
                className="newBrandIcon lightContent"
                width={24}
                height={24}
              />
            </button>
          </a>
        </div>
      </div>
      <span className="companyNote">
        Expand your photography business seamlessly with our tool. Start new
        brands without a physical studio. Manage your workflow and client
        interactions remotely, increasing your business traffic and efficiency.
        Start growing your brand with{" "}
        <span className="framespikHeading">framespik today!</span>
      </span>
    </div>
  );
};

export default UserBrands;
