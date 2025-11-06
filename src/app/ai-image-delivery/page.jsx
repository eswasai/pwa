import Wrapper from "@/layouts/wrapper";
import AiImageDelivery from "@/screens/ai-share";

export const metadata = {
  title: "AI-Powered Image Sharing for Seamless Guest Experience",
  description:
    "Transform event photography with AI-driven image sharing. Guests can easily access their personalized images via WhatsApp in just a few days, with quick registration and automated delivery.",
  openGraph: {
    title: "AI-Powered Image Sharing for Seamless Guest Experience",
    description:
      "Enhance your event with AI-driven image sharing. Guests can scan a QR code to register and receive personalized photos through WhatsApp, ensuring no memories are missed.",
    url: "https://framespik.com/ai-image-delivery",
    image: "https://framespik.com/images/ai-image-share-thumb.jpg",
    type: "website",
    site_name: "Your Event Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Image Sharing for Seamless Guest Experience",
    description:
      "AI Image Share allows guests to easily access their personalized event photos via WhatsApp, with quick registration and automated delivery, ensuring a seamless experience.",
    image: "https://framespik.com/images/ai-image-share-thumb.jpg",
    site: "@youreventphoto",
    creator: "@youreventphoto",
  },
};

const AiImageDeliveryPage = () => {
  return (
    <Wrapper>
      <AiImageDelivery />
    </Wrapper>
  );
};

export default AiImageDeliveryPage;
