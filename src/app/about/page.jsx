import Wrapper from "@/layouts/wrapper";
import About from "@/screens/about";

export const metadata = {
  title:
    "About Us - Empowering Photographers with Seamless Business Management Solutions",
  description:
    "Discover how Framespik revolutionizes the photography industry by providing photographers with efficient tools for managing operations, enhancing client interactions, and growing their businesses with ease.",
  openGraph: {
    title:
      "About Us - Empowering Photographers with Seamless Business Management Solutions",
    description:
      "Discover how Framespik revolutionizes the photography industry by providing photographers with efficient tools for managing operations, enhancing client interactions, and growing their businesses with ease.",
    url: "https://framespik.com/about",
    image: "https://framespik.com/images/about-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Us - Empowering Photographers with Seamless Business Management Solutions",
    description:
      "Discover how Framespik revolutionizes the photography industry by providing photographers with efficient tools for managing operations, enhancing client interactions, and growing their businesses with ease.",
    image: "https://framespik.com/images/about-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const AboutPage = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default AboutPage;
