"use client";
import HeaderOne from "@/layout/headers/header-6";
import BreadCrum from "./componets/nfc-cards/breadcrum";
import HeroArea from "./componets/nfc-cards/heroArea";
import NfcRegisterSteps from "./componets/nfc-cards/nfcSignup";

import NfcEnableSteps from "./componets/nfc-cards/nfcRegisterSteps";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const Nfc = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrum />
      <HeroArea />
      <NfcRegisterSteps />
      <NfcEnableSteps />
      <FaqArea category={"NFC Cards"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default Nfc;
