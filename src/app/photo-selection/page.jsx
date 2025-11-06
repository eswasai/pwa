import Wrapper from "@/layouts/wrapper";
import PhotoSelction from "@/screens/photo-selection";

export const metadata = {
  title: "Photo Selection Made Easy - Framespik",
  description:
    "Framespik simplifies photo selection for photographers, making it quick and effortless to choose and organize images.",
  openGraph: {
    title: "Photo Selection Made Easy - Framespik",
    description:
      "Framespik simplifies photo selection for photographers, making it quick and effortless to choose and organize images.",
    url: "https://framespik.com/photo-selection",
    image: "https://framespik.com/images/photo-selection-thumb.jpg", // Replace with actual image
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Selection Made Easy - Framespik",
    description:
      "Framespik simplifies photo selection for photographers, making it quick and effortless to choose and organize images.",
    image: "https://framespik.com/images/photo-selection-thumb.jpg", // Replace with actual image
    site: "@framespik",
    creator: "@framespik",
  },
};

const PhotoSelectionPage = () => {
  return (
    <Wrapper>
      <PhotoSelction />
    </Wrapper>
  );
};

export default PhotoSelectionPage;
