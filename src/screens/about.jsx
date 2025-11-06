"use client";
import HeaderFive from "@/layout/headers/header-3";

import JobArea from "./componets/about/aboutArea";
import PaymentMethodArea from "./componets/about/AboutCompany";
import AboutOurJourney from "./componets/about/aboutOurJourney";
import HeroArea from "./componets/about/heroArea";
import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";

const About = () => {
  return (
    <>
      <HeaderFive />
      <HeroArea />
      <PaymentMethodArea />
      <JobArea />
      <AboutOurJourney />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default About;
