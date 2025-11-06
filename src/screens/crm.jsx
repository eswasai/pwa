"use client";
import HeaderFive from "@/layout/headers/header-5";
import HeroArea from "./componets/crm/HeroPage";
import CrmService from "./componets/crm/crmService";
import CrmFeatures from "./componets/crm/crmFeatures";
import CrmTestimonials from "./componets/crm/crmTestimonials";
import BusinessBox from "@/components/homes/home-5/business-box";
import TestimonialArea from "@/components/homes/home-3/testimonial-area";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";

const crm = () => {
  return (
    <>
      <HeaderFive />
      <HeroArea />
      <CrmService />
      <CrmFeatures />
      <CrmTestimonials />
      <TestimonialArea />
      <BusinessBox />
      <FooterTwo />
    </>
  );
};

export default crm;
