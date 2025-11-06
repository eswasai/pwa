import Wrapper from "@/layouts/wrapper";
import CloudIntegration from "@/screens/thirdPartyIntegration";

export const metadata = {
  title: "Seamlessly Integrate with Third-Party Tools",
  description:
    "Enhance your workflow by integrating with third-party tools. Easily connect with platforms like CRMs, payment systems, and marketing tools to streamline your processes.",
  openGraph: {
    title: "Seamlessly Integrate with Third-Party Tools",
    description:
      "Boost efficiency by connecting your systems with third-party tools. From CRMs to payment systems, simplify your workflow and improve your business operations.",
    url: "https://yourwebsite.com/3rd-party-integration",
    image: "https://yourwebsite.com/images/3rd-party-integration-thumb.jpg",
    type: "website",
    site_name: "Your Business Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seamlessly Integrate with Third-Party Tools",
    description:
      "Effortlessly integrate with third-party tools to streamline your processes. Improve efficiency with easy connections to CRMs, payment systems, and more.",
    image: "https://yourwebsite.com/images/3rd-party-integration-thumb.jpg",
    site: "@yourbusiness",
    creator: "@yourbusiness",
  },
};

const IntegrationPage = () => {
  return (
    <Wrapper>
      <CloudIntegration />
    </Wrapper>
  );
};

export default IntegrationPage;
