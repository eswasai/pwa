"use client";
import HeaderFive from "@/layout/headers/header-6";
import FooterTwo from "@/layout/footers/footer-2";
import BreadcrumbFive from "./componets/plan-details/breadcrum";
import PlanDetails from "./componets/plan-details/pricing-plan-details";
import PlanDetialsComponents from "./componets/plan-details/plan-components";

const PlansAndPricing = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFive />
            <PlanDetails />
            <PlanDetialsComponents />

            {/* <PlanArea /> */}
          </main>
          <FooterTwo style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default PlansAndPricing;
