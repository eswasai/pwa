"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/work-updates/breadCrum";
import HeroArea from "./componets/work-updates/hero-area";
import WorkFeatures from "./componets/work-updates/workFeatures";
import ClientReviews from "./componets/work-updates/clientReviews";


import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const Workupdates = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <HeroArea />
      <WorkFeatures />
      <ClientReviews />
      <FaqArea category={"Work Updates"} style_service={true}/>

      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default Workupdates;
