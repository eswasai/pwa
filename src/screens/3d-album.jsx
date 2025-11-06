"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/3d-albums/breadCrum";
import HeroArea from "./componets/3d-albums/heroArea";
import ComingSoonImg from "./componets/3d-albums/comingSoonImg";
import SampleAlbums from "./componets/3d-albums/sampleAlbums";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const DynamicAlbum = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <HeroArea />
      {/* <ComingSoonImg /> */}
      <SampleAlbums />
      <FaqArea category={"3D Albums"} style_service={true} />

      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default DynamicAlbum;
