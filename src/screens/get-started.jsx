"use client";

import HeaderSeven from "@/layout/headers/header-7";
import FooterTwo from "@/layout/footers/footer-2";
import CtaArea from "@/components/contact/cta-area";
import RegisterArea from "@/components/register/register-area";
import UserBrands from "./componets/get-started/userBrands";
import UserDetails from "./componets/get-started/userDetails";
import PaymentCheckout from "./componets/get-started/paymentCheckout";

const getStarted = () => {
  return (
    <>
      <HeaderSeven />
      {/* <RegisterArea /> */}
      {/* <UserDetails /> */}
      <PaymentCheckout />

      {/* <UserBrands /> */}

      {/* <CtaArea /> */}
      <FooterTwo />
    </>
  );
};

export default getStarted;
