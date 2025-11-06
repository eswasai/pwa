"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/any-where-view/breadCrum";
import ViewService from "./componets/any-where-view/view-services";
import ViewRow from "./componets/any-where-view/viewRow";
import TestimonialArea from "@/common/testimonial-area";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const Anywhereview = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <ViewService />
      <ViewRow />
      <TestimonialArea />
      <FaqArea category={"Anywhere View"} style_service={true} />

      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default Anywhereview;
