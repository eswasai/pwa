"use client";
import HeaderOne from "@/layout/headers/header-6";
import BreadCrum from "./componets/vision-camera/breadCrum";
import VisionCameraService from "./componets/vision-camera/visionCameraService";
import VisionCameraVideoBox from "./componets/vision-camera/visionCameraVideoBox";
import VisionCameraSteps from "./componets/vision-camera/VisionCameraSteps";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";

const VisionCamera = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrum />
      <VisionCameraService />
      <VisionCameraVideoBox />
      <VisionCameraSteps />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default VisionCamera;
