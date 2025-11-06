import Wrapper from "@/layouts/wrapper";
import Faq from "@/screens/faq";

export const metadata = {
  title: "Frequently Asked Questions - Framespik",
  description:
    "Find answers to common questions about Framespik and discover how our platform can help you manage and grow your photography business.",
  openGraph: {
    title: "Frequently Asked Questions - Framespik",
    description:
      "Find answers to common questions about Framespik and discover how our platform can help you manage and grow your photography business.",
    url: "https://framespik.com/faq",
    image: "https://framespik.com/images/faq-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions - Framespik",
    description:
      "Find answers to common questions about Framespik and discover how our platform can help you manage and grow your photography business.",
    image: "https://framespik.com/images/faq-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const FaqPage = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default FaqPage;
