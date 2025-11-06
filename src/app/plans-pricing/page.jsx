import Wrapper from "@/layouts/wrapper";
import PlansAndPricing from "@/screens/plans-pricing";

export const metadata = {
  title: "Plans And Pricing - framespik",
  description:
    "Framespik Provides the update information about the apps, website and others",
  openGraph: {
    title: "Plans And Pricing - framespik",
    description:
      "Framespik Provides the update information about the apps, website and others",
    url: "https://framespik.com/team",
    image: "https://framespik.com/images/team-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plans And Pricing - framespik",
    description:
      "Framespik Provides the update information about the apps, website and others",
    image: "https://framespik.com/images/team-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const PlansAndPricingPage = () => {
  return (
    <Wrapper>
      <PlansAndPricing />
    </Wrapper>
  );
};

export default PlansAndPricingPage;
