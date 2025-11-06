"use client";
import HeaderThree from "@/layout/headers/header-6";
import BreadCrum from "./componets/customApp/breadcrum";

// import
import SalesArea from "./componets/customApp/customFeatures";
import Brand from "./componets/customApp/companyBrands";
import CustomApps from "./componets/customApp/custom-app";

import CompanyArea from "./componets/customApp/companyArea";
// import TestimonialArea from "./componets/customApp/testimonals";
import BlogArea from "./componets/customApp/blogArea";

// fotter
import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const CustomApp = () => {
  return (
    <>
      <HeaderThree />
      <BreadCrum />
      <Brand />
      <SalesArea />
      <CustomApps />
      <CompanyArea />
      <BlogArea />
      <FaqArea category={"Custom Branding"} style_service={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default CustomApp;
