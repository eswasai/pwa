import Wrapper from "@/layouts/wrapper";
import PrivacyPolicy from "@/screens/privacy-policy";

export const metadata = {
  title: "Framespik Privacy Policy",
  description:
    "Your privacy is important to us. Read our Privacy Policy to understand how we protect your personal information and ensure a safe experience while using Framespik.",
  openGraph: {
    title: "Framespik Privacy Policy",
    description:
      "We value your privacy. Explore our Privacy Policy to learn how we safeguard your personal data while you enjoy the full benefits of Framespik.",
    url: "https://framespik.com/privacy-policy",
    image: "https://framespik.com/images/privacy-policy-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framespik Privacy Policy",
    description:
      "Your trust matters to us. Our Privacy Policy explains how we protect your personal data and keep your information safe while using Framespik.",
    image: "https://framespik.com/images/privacy-policy-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <Wrapper>
      <PrivacyPolicy />
    </Wrapper>
  );
};

export default PrivacyPolicyPage;
