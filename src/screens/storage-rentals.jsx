"use client";
import HeaderThree from "@/layout/headers/header-6";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import StorageRentalHeroArea from "./componets/storage-rentals/HeroArea";
import BreadCrum from "./componets/storage-rentals/breadCrum";

const StorageRentals = () => {
  return (
    <>
      <HeaderThree />
      <BreadCrum />
      <StorageRentalHeroArea />


      {/* <FaqArea style_service={true} category={"Memory Page"} /> */}
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default StorageRentals;
