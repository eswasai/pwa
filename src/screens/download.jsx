"use client";
import HeaderOne from "@/layout/headers/header";
import HeroSlider from "./componets/download/hero-slider";
import CounterArea from "./componets/download/CounterArea";
import FeatureArea from "./componets/download/highlightsArea";
import BlogArea from "./componets/download/blogArea";

// import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";

const Download = () => {
  return (
    <>
      <HeaderOne />
      <HeroSlider />
      <CounterArea />
      <FeatureArea />
      <BlogArea />

      {/* <CtaArea /> */}
      <FooterTwo />
    </>
  );
};

export default Download;
