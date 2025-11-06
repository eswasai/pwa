"use client";
import HeaderThree from "@/layout/headers/header-3";
import CtaArea from "@/components/contact/cta-area";
import FaqDetails from "./componets/faq/faqDetails";
import FooterTwo from "@/layout/footers/footer-2";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Faq = () => {
  return (
    <>
      <ToastContainer position="bottom-left" />
      <HeaderThree />
      <FaqDetails />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default Faq;
