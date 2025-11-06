import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/assets/css/Manualcss/get-started/otppopup.css";
import Logo from "@/assets/img/logo/logo-with-text.svg";

const OtpPopup = () => {
  return (
    <>
      <main className="otpPopupmainContainer">
        <div className="otpPopContainer">
          <p className="otpPopupHeading">Enter Otp</p>
          <p className="otpPopupNumber">
            We sent a code to <span className="otpNumberMask">998525xxxx</span>
          </p>
          <div className="otpVerifyBox">
            <p className="otpverificationInputText">Your Verification Code</p>
            <input
              className="otpverificationInputBox"
              type="text"
              placeholder="Enter 6-digits code"
            />
          </div>
          <div className="verificationButtonRow">
            <button className="otppopVerificationBtn verifyBtn">Verify</button>
            <button className="otppopVerificationBtn">cancel</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default OtpPopup;
