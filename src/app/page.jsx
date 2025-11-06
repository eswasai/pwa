import Wrapper from "@/layouts/wrapper";
import Home from "@/screens/home";

export const metadata = {
  title: "Simplifying Photography Business Management - framespik",
  description:
    "Framespik is a powerful platform that helps photographers manage their operations, enhance client experience, and grow their business.",
  openGraph: {
    title: "Simplifying Photography Business Management - framespik",
    description:
      "Framespik is a powerful platform that helps photographers manage their operations, enhance client experience, and grow their business.",
    url: "https://framespik.com",
    image: "https://framespik.com/images/home-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplifying Photography Business Management - framespik",
    description:
      "Framespik is a powerful platform that helps photographers manage their operations, enhance client experience, and grow their business.",
    image: "https://framespik.com/images/home-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const HomePage = () => {
  return (
    <Wrapper>
      <Home />
      {/* <HomeOne /> */}
    </Wrapper>
  );
};

export default HomePage;
