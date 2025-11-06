"use client";
import HeaderThree from "@/layout/headers/header-3";
import HeroArea from "./componets/features/heroArea";
import FeaturesList from "./componets/features/feature-list";
import CardArea from "./componets/features/servicesCard";
import FooterTwo from "@/layout/footers/footer-2";

const Features = () => {
  return (
    <>
      <HeaderThree />
      <HeroArea />
      <FeaturesList />
      <CardArea />
      <FooterTwo />
    </>
  );
};

export default Features;
