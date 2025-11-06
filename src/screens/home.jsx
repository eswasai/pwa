"use client";
import HeaderThree from "@/layout/headers/header-3";
import HeroArea from "../components/homes/home-3/hero-area";
import FunFactArea from "../components/homes/home-5/fun-fact-area";
import PlanArea from "../components/homes/home-5/plan-area";
import UpperCtaArea from "@/components/homes/home-5/cta-area";

import FeatureArea from "@/components/homes/home/feature-area";
import CtaArea from "../components/homes/home-5/business-box";
import FooterTwo from "@/layout/footers/footer-2";

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <HeroArea />
      <FunFactArea />
      <UpperCtaArea />
      <PlanArea />
      <FeatureArea />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default HomeThree;
