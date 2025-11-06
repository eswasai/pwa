"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/scheduling/breadCrum";
import HeroArea from "./componets/scheduling/HeroArea";

import SalesArea from "@/common/sales-area";
import TestimonialArea from "@/components/homes/home/testimonial-area";
import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import ScheduleService from "./componets/scheduling/schedule-service";

const Scheduling = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      
      <HeroArea />
      <ScheduleService />

      <SalesArea />
      <TestimonialArea />
      <FaqArea category={"Scheduling"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default Scheduling;
