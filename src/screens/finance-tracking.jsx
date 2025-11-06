"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/finance-tracking/breadCrum";
import FinanceServices from "./componets/finance-tracking/finance-service";
import SalesAnalysis from "./componets/finance-tracking/finance-analysis";
import FinanceFaq from "./componets/finance-tracking/faqDetails";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const FinanceTracking = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <FinanceServices />
      <SalesAnalysis />
      <FaqArea category={"Finance Tracking"} style_service={true} />

      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default FinanceTracking;
