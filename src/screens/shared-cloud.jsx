"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/shared-cloud/breadcrum";

import SalesArea from "@/common/sales-area";
import TestimonialArea from "@/components/homes/home/testimonial-area";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const SharedCloud = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <SalesArea />
      <TestimonialArea />
      <FaqArea category={"Shared Cloud Space"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default SharedCloud;
