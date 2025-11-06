"use client";
import HeaderThree from "@/layout/headers/header-3";

import FooterTwo from "@/layout/footers/footer-3";
import LearningVideosGrid from "./componets/learning-school/videosGrid";
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";

const LearningSchool = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbSeven
        title="Learning Videos"
        des="Helps users easily access simplify."
      />
      <LearningVideosGrid />

      <FooterTwo />
    </>
  );
};

export default LearningSchool;
