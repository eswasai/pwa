"use client";
import HeaderFive from "@/layout/headers/header-6";
import BreadcrumbFour from "@/common/breadcrumbs/breadcrumb-4";
import shape_3 from "@/assets/img/breadcrumb/breadcrumb-4.png";
import JobArea from "./componets/career/openJobPositions";
import ApplicationSteps from "./componets/career/applicationSteps";
import PaymentMethodArea from "./componets/career/techStack";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";

const Carrer = () => {
  return (
    <>
      <HeaderFive />
      <BreadcrumbFour
        customShape3={shape_3}
        breadcumCustomTitle={"Carrers"}
        breadCumCustomPara={"Career details"}
        breadcumCustomLink={"./Home"}
      />
      <JobArea style_carrer={true} />
      <ApplicationSteps style_carrer={true} />
      <PaymentMethodArea />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default Carrer;
