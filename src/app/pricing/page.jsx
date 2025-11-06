import Wrapper from "@/layouts/wrapper";
import Plans from "@/screens/plans";

export const metadata = {
  title: "Dynamic and Flexible Pricing for Framespik Solutions",
  description:
    "Framespik offers dynamic pricing to fit your needs, allowing you to implement everything from data security to business management with flexibility and ease.",
  openGraph: {
    title: "Dynamic and Flexible Pricing for Framespik Solutions",
    description:
      "Framespik provides a flexible pricing model that adapts to your needs, ensuring you can implement everything from secure data solutions to efficient business management.",
    url: "https://framespik.com/pricing",
    image: "https://framespik.com/images/pricing-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic and Flexible Pricing for Framespik Solutions",
    description:
      "With Framespik’s flexible pricing model, you can tailor your experience to your needs, whether it’s for secure data management or enhancing your business workflows.",
    image: "https://framespik.com/images/pricing-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const PlansPage = () => {
  return (
    <Wrapper>
      <Plans />
    </Wrapper>
  );
};

export default PlansPage;
