import Wrapper from "@/layouts/wrapper";
import DataBackup from "@/screens/data-backup";

export const metadata = {
  title: "Reliable Data Backup for Long-Term Security",
  description:
    "Safeguard your clients' images and footage with Framespik’s secure, long-term data backup solutions. Access files anytime, anywhere, with seamless sharing and robust protection.",
  openGraph: {
    title: "Reliable Data Backup for Long-Term Security",
    description:
      "Protect your clients' valuable memories with Framespik’s secure data backup, offering up to 15 years of storage with seamless access, privacy, and robust protection against data loss.",
    url: "https://framespik.com/data-backup",
    image: "https://framespik.com/images/data-backup-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Data Backup for Long-Term Security",
    description:
      "Ensure long-term security for your clients' files with Framespik’s backup solutions, offering 15 years of protected storage, seamless access, and privacy with encryption.",
    image: "https://framespik.com/images/data-backup-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const DataBackupPage = () => {
  return (
    <Wrapper>
      <DataBackup />
    </Wrapper>
  );
};

export default DataBackupPage;
