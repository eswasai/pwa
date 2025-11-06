"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/3rd-Party/breadCrum";
import FeatureArea from "./componets/3rd-Party/integration-content";
import CloudRating from "./componets/3rd-Party/cloudRatings";
import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import UpcomingFeatures from "@/components/career/upcomingFeautres";

const ThirdPartyIntegration = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <FeatureArea />
      <UpcomingFeatures />
      <CloudRating />
      <FaqArea category={"3rd Party Integrations"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default ThirdPartyIntegration;
