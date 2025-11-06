"use client";
import HeaderFive from "@/layout/headers/header-6";
import BreadCrum from "./componets/payment-remainders/breadCrum";
import HeroArea from "./componets/payment-remainders/hero-Area";
import TrustedBrands from "./componets/payment-remainders/trustedBrands";
import PaymentService from "./componets/payment-remainders/payment-service";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const PaymentRemainders = () => {
  return (
    <>
      <HeaderFive />
      <BreadCrum />
      <TrustedBrands />
      <HeroArea />
      <PaymentService />
      <FaqArea category={"Payment Reminders"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default PaymentRemainders;
