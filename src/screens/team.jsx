"use client";
import HeaderSix from "@/layout/headers/header-6";
import TeamArea from "./componets/team/teamDetails";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";


const About = () => {
  return (
    <>
      <HeaderSix />
      <BreadcrumbTwo title={"Team Member"} innertitle={"Team Member"} />
      <TeamArea />

      <CtaArea />

      <FooterTwo />
    </>
  );
};

export default About;
