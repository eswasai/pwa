"use client";
import HeaderThree from "@/layout/headers/header-6";
import BreadCrum from "./componets/data-secure/breadCrum";
import DataServiceArea from "./componets/data-secure/data-service";
import SteptoSecure from "./componets/data-secure/steps-to-secure";
import DataSafeRatings from "./componets/data-secure/customerRatings";

import CtaArea from "@/components/contact/cta-area";
import FaqArea from "@/components/homes/home-2/faq-area";
import FooterTwo from "@/layout/footers/footer-2";

const PhotoSelction = () => {
  return (
    <>
      <HeaderThree />
      <BreadCrum />
      <DataServiceArea />
      <SteptoSecure style_carrer={true} />
      <DataSafeRatings />
      <FaqArea style_service={true} category={"Data Secure"} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default PhotoSelction;
