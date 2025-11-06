import Wrapper from "@/layouts/wrapper";
import HomeThree from "@/components/homes/home-3";
import GetStarted from "@/screens/get-started";

export const metadata = {
  title: "Get Started - Begin Your Photography Business Journey with Framespik",
  description:
    "Kickstart your photography business management journey with Framespik. Discover how to streamline workflows, manage clients, and grow your business effortlessly.",
  openGraph: {
    title:
      "Get Started - Begin Your Photography Business Journey with Framespik",
    description:
      "Kickstart your photography business management journey with Framespik. Discover how to streamline workflows, manage clients, and grow your business effortlessly.",
    url: "https://framespik.com/get-started",
    image: "https://framespik.com/images/get-started-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Get Started - Begin Your Photography Business Journey with Framespik",
    description:
      "Kickstart your photography business management journey with Framespik. Discover how to streamline workflows, manage clients, and grow your business effortlessly.",
    image: "https://framespik.com/images/get-started-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const HomeThreePage = () => {
  return (
    <Wrapper>
      <GetStarted />
    </Wrapper>
  );
};

export default HomeThreePage;
