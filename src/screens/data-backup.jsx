"use client";
import HeaderSix from "@/layout/headers/header-6";
import BreadCrum from "./componets/data-backup/breadcrum";
import BackupServices from "./componets/data-backup/backupServices";
import BackupPricing from "./componets/data-backup/backupPricing";
import TestimonialArea from "@/common/testimonial-area";

import FooterTwo from "@/layout/footers/footer-2";
import FaqArea from "@/components/homes/home-2/faq-area";

const DataBackup = () => {
  return (
    <>
      <HeaderSix />
      <BreadCrum />
      <BackupServices />
      <BackupPricing />
      <TestimonialArea />
      <FaqArea category={"Event Backup"} style_service={true} />

      <FooterTwo />
    </>
  );
};

export default DataBackup;
