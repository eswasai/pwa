"use client";
import HeaderThree from "@/layout/headers/header-6";
import BreadCrum from "./componets/memory-book/breadCrum";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import MemoryHeroArea from "./componets/memory-book/heroArea";
import FaqArea from "@/components/homes/home-2/faq-area";

import MemoryPageSamples from "./componets/memory-book/memory-page-samples";

const MemoryPage = () => {
  return (
    <>
      <HeaderThree />
      <BreadCrum />
      <MemoryHeroArea />
      <MemoryPageSamples />

      <FaqArea style_service={true} category={"Memory Page"} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default MemoryPage;
