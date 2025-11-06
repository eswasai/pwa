import CustomApp from "@/screens/custom-app";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Elevate Your Brand with Our Custom App",
  description:
    "Create a personalized app experience to enhance your brand value with features like design selection, secure updates, and branded notifications.",
  openGraph: {
    title: "Elevate Your Brand with Our Custom App",
    description:
      "Empower your business with a customizable app that offers design previews, brand enhancement features, secure updates, and multi-device compatibility.",
    url: "https://framespik.com/custom-app",
    image: "https://framespik.com/images/brand-app-thumb.jpg",
    type: "website",
    site_name: "Your Branding App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Your Brand with Our Custom App",
    description:
      "Enhance your brand with a custom app that includes personalized design selection, secure updates, and branded notifications for your clients.",
    image: "https://framespik.com/images/brand-app-thumb.jpg",
    site: "@yourappbranding",
    creator: "@yourappbranding",
  },
};

const CustomAppPage = () => {
  return (
    <Wrapper>
      <CustomApp />
    </Wrapper>
  );
};

export default CustomAppPage;
