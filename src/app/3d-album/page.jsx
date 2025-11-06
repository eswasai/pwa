import Wrapper from "@/layouts/wrapper";
import DynamicAlbum from "@/screens/3d-album";

export const metadata = {
  title: "Create Stunning 3D Albums with Ease",
  description:
    "Transform your photos into interactive 3D albums with simple tools. Personalize, customize, and share your albums effortlessly with clients, friends, or on social media.",
  openGraph: {
    title: "Create Stunning 3D Albums with Ease",
    description:
      "Easily create and customize 3D albums from your photos. Add watermarks, branding, and custom text, then share your dynamic albums with clients or on social media with a simple link.",
    url: "https://framespik.com/3d-album",
    image: "https://framespik.com/images/3d-album-thumb.jpg",
    type: "website",
    site_name: "Your Photography Business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Stunning 3D Albums with Ease",
    description:
      "Upload, organize, and customize your photos into interactive 3D albums, then share them easily with clients or on social media using a dynamic link.",
    image: "https://framespik.com/images/3d-album-thumb.jpg",
    site: "@yourphotobusiness",
    creator: "@yourphotobusiness",
  },
};

const ThreeDAlbumPage = () => {
  return (
    <Wrapper>
      <DynamicAlbum />
    </Wrapper>
  );
};

export default ThreeDAlbumPage;
