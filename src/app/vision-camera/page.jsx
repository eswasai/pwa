import Wrapper from "@/layouts/wrapper";
import VisionCamera from "@/screens/vision-camera";

export const metadata = {
  title: "Transform Your Photography with Vision camera - Framespik",
  description:
    "Elevate your photography sessions with Vision Camera in the FrameSpik app. Instantly showcase pose examples, guide your clients with confidence, and create a smooth, interactive experience.",
  openGraph: {
    title: "Transform Your Photography with Vision camera - Framespik",
    description:
      "Capture stunning moments with ease using Vision Camera. Provide live pose demonstrations, enhance client comfort, and ensure a seamless, collaborative photoshoot experience.",
    url: "https://framespik.com/vision-camera",
    image: "https://framespik.com/images/vision-camera-thumb.jpg",
    type: "website",
    site_name: "FrameSpik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transform Your Photography with Vision camera - Framespik",
    description:
      "Vision Camera in FrameSpik empowers photographers to showcase pose examples in real time, improving collaboration and client satisfaction throughout the session.",
    image: "https://framespik.com/images/vision-camera-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const VisionCameraPage = () => {
  return (
    <Wrapper>
      <VisionCamera />
    </Wrapper>
  );
};

export default VisionCameraPage;
