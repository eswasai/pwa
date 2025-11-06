"use client";

import FooterFive from "@/layout/footers/footer-2";
import HeaderSix from "@/layout/headers/header-5";
import FaqArea from "@/components/homes/home-2/faq-area";

import OtherPricingBreadCrum from "./componets/others-pricing/breadCrum";
import BottomCard from "./componets/others-pricing/bottomPage";
import PricingWebUpdate from "./componets/others-pricing/webupdate";
import CtaArea from "@/components/contact/cta-area";
import OtherPricing from "./componets/plans/otherpricings";

const StorageRentalPricing = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <OtherPricingBreadCrum /> */}
            <OtherPricing num={200}Heromb={0} />
            <BottomCard />
            <PricingWebUpdate />
            <FaqArea style_service={true} category={"Data Backup Pricing"} />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default StorageRentalPricing;
