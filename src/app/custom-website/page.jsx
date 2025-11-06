import CustomApp from "@/screens/custom-website";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Build Your Brand with a Custom Website",
  description:
    "Easily create a professional website for your brand with customizable templates, SEO optimization, and flexible DNS options.",
  openGraph: {
    title: "Build Your Brand with a Custom Website",
    description:
      "Design your website effortlessly using Framespik’s 1,000+ templates, drag-and-drop tools, and seamless DNS integration to enhance your online presence.",
    url: "https://framespik.com/custom-website",
    image: "https://framespik.com/images/custom-website-thumb.jpg",
    type: "website",
    site_name: "Your Branding Website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your Brand with a Custom Website",
    description:
      "Create a personalized website using pre-designed templates and easy-to-use tools, improve your SEO visibility, and enjoy flexible DNS options for a seamless experience.",
    image: "https://framespik.com/images/custom-website-thumb.jpg",
    site: "@yourbrandingwebsite",
    creator: "@yourbrandingwebsite",
  },
};

const CustomWebPage = () => {
  return (
    <Wrapper>
      <CustomApp />
    </Wrapper>
  );
};

export default CustomWebPage;
