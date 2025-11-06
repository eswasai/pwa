"use client";
import HeaderThree from "@/layout/headers/header-3";
import ContactFormArea from "./componets/contact/contactMainForm";
import ContactInner from "./componets/contact/contactInnerForm";
import OfficeLocation from "./componets/contact/officeLocation";
import CtaArea from "@/components/contact/cta-area";

import FooterTwo from "@/layout/footers/footer-2";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <>
      <ToastContainer position="bottom-left" />
      <HeaderThree />
      <ContactFormArea />
      <OfficeLocation />
      <ContactInner />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default Contact;
