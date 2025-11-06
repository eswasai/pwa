"use client";

import FooterFive from "@/layout/footers/footer-2";
import HeaderSix from "@/layout/headers/header-5";
import PlanSelectionBox from "./componets/plans/planSelectBox";

import UpdateInfoBreadCrum from "./componets/update-info/updateInfoBreadcrum";
import UpdateInfoBrand from "./componets/update-info/brands";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import UpdatePricing from "./componets/plans/updatepricings";

const UpdatesInfo = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <UpdatePricing num="200"/>
            {/* <UpdateInfoBreadCrum /> */}
            <FaqArea style_service={true} category={"Data Backup Pricing"} />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default UpdatesInfo;
