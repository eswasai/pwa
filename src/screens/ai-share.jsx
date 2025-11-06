"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/ai-share/breadCrum";
import HeroArea from "./componets/ai-share/HeroImage";
import FaceScanSteps from "./componets/ai-share/faceScanSteps";
import FaceScanServices from "./componets/ai-share/faceScanServices";
import CtaArea from "@/components/contact/cta-area";

import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const AiShare = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <HeroArea />
      <FaceScanSteps />
      <FaceScanServices />
      <FaqArea category={"AI Face Scan"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default AiShare;
