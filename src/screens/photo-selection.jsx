"use client";
import HeaderThree from "@/layout/headers/header-6";
import BreadCrum from "./componets/photo-selection/breadcrum";

import BlogGrid from "./componets/photo-selection/photo-grid";
import HeroArea from "./componets/photo-selection/heroArea";
import RankArea from "./componets/photo-selection/selection-steps";
import CtaArea from "@/components/contact/cta-area";
import FaqArea from "@/components/homes/home-2/faq-area";
import FooterTwo from "@/layout/footers/footer-2";

const PhotoSelction = () => {
  return (
    <>
      <HeaderThree />
      <BreadCrum />
      <HeroArea />
      <BlogGrid />
      <RankArea />
      <FaqArea style_service={true} category={"Photo Selection"} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default PhotoSelction;
