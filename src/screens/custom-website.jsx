"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/customWebsite/breadCrum";

import WebHeroArea from "./componets/customWebsite/HeroArea";
import WebpageService from "./componets/customWebsite/webpageServices";
import TestimonialArea from "@/components/homes/home-2/testimonial-area";

// footer
import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";

const CustomWebsite = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />

      <WebHeroArea />
      <WebpageService />

      <TestimonialArea />

      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default CustomWebsite;
