"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/4k-video/breadCrum";
import HeroArea from "./componets/4k-video/HeroArea";
import VideoGrid from "./componets/4k-video/videoGrid";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const FourKVideo = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <VideoGrid />
      <HeroArea />
      <FaqArea category={"4K Upload"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default FourKVideo;
