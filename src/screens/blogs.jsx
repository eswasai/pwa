"use client";
import HeaderThree from "@/layout/headers/header-3";
import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import MainArea from "./componets/blog/blogsMainArea";

import BusinessBox from "@/components/homes/home-5/business-box";
import FooterTwo from "@/layout/footers/footer-2";

const Blog = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbSeven
        title="Blogs"
        des="Explore blogs with tips, trends, and tools to enhance photography events."
      />
      <MainArea />

      <BusinessBox />
      <FooterTwo />
    </>
  );
};

export default Blog;
