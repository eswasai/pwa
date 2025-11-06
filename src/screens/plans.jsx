"use client";

import FooterFive from "@/layout/footers/footer-2";
import HeaderSix from "@/layout/headers/header-6";

import PlansBreadCrum from "./componets/plans/planBreadCrum";
import UpdatePricing from "./componets/plans/updatepricings";
import OtherPricing from "./componets/plans/otherpricings";

const Plans = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PlansBreadCrum />
            {/* <PlanDetails /> */}
            <OtherPricing />
            <UpdatePricing />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Plans;
