import Wrapper from "@/layouts/wrapper";
import FourKVideo from "@/screens/4k-video";

export const metadata = {
  title: "Unlimited Albums & Videos for Seamless Event Memories",
  description:
    "Offer unlimited albums and videos for your event guests, with AI-driven photo distribution and automated delivery via WhatsApp, ensuring everyone gets their personalized memories.",
  openGraph: {
    title: "Unlimited Albums & Videos for Seamless Event Memories",
    description:
      "Capture every moment with unlimited albums and videos. AI-powered distribution ensures guests get their personalized images and videos quickly, directly delivered via WhatsApp.",
    url: "https://framespik.com/unlimited-album-videos",
    image: "https://framespik.com/images/unlimited-album-videos-thumb.jpg",
    type: "website",
    site_name: "Your Event Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlimited Albums & Videos for Seamless Event Memories",
    description:
      "Create unlimited albums and videos for your event, with AI-driven image and video sharing that delivers personalized memories to guests via WhatsApp in just days.",
    image: "https://framespik.com/images/unlimited-album-videos-thumb.jpg",
    site: "@youreventphoto",
    creator: "@youreventphoto",
  },
};

const UnlimitedAlbumVideosPage = () => {
  return (
    <Wrapper>
      <FourKVideo />
    </Wrapper>
  );
};

export default UnlimitedAlbumVideosPage;
