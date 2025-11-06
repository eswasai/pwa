import Wrapper from "@/layouts/wrapper";
import Features from "@/screens/features";

export const metadata = {
  title: "Features - Elevating Photography Business Management of Framespik",
  description:
    "Explore the powerful features that help photographers manage their business, streamline workflows, and enhance client engagement - Framespik",
  openGraph: {
    title: "Features - Elevating Photography Business Management of Framespik",
    description:
      "Explore the powerful features that help photographers manage their business, streamline workflows, and enhance client engagement - Framespik",
    url: "https://framespik.com/features",
    image: "https://framespik.com/images/features-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - Elevating Photography Business Management of Framespik",
    description:
      "Explore the powerful features that help photographers manage their business, streamline workflows, and enhance client engagement - Framespik",
    image: "https://framespik.com/images/features-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const HomeThreePage = () => {
  return (
    <Wrapper>
      <Features />
    </Wrapper>
  );
};

export default HomeThreePage;
