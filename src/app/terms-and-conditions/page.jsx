import Wrapper from "@/layouts/wrapper";
import TermsAndConditions from "@/screens/terms-and-conditions";

export const metadata = {
  title: "Framespik Terms and Conditions",
  description:
    "Review the terms and conditions for using Framespik's services. Understand the policies, responsibilities, and legal guidelines to ensure a safe and smooth experience.",
  openGraph: {
    title: "Framespik Terms and Conditions",
    description:
      "Read through the terms and conditions that govern your use of Framespik's services. Know your rights, responsibilities, and legal obligations.",
    url: "https://framespik.com/terms-and-conditions",
    image: "https://framespik.com/images/terms-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framespik Terms and Conditions",
    description:
      "Review Framespik's terms and conditions for a clear understanding of the policies and legal guidelines for using our services.",
    image: "https://framespik.com/images/terms-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const TermsAndConditionsPage = () => {
  return (
    <Wrapper>
      <TermsAndConditions />
    </Wrapper>
  );
};

export default TermsAndConditionsPage;
