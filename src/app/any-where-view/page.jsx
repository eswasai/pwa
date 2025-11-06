import Wrapper from "@/layouts/wrapper";
import Anywhereview from "@/screens/any-where-view";

export const metadata = {
  title: "Access Your Event Photos Anywhere with Framespik",
  description:
    "View, share, and manage your event photos from anywhere with Framespik’s Any-Where-View feature. Enjoy easy access to your media, whether you're at an event or on the go.",
  openGraph: {
    title: "Access Your Event Photos Anywhere with Framespik",
    description:
      "Framespik makes it easy to view and manage your event photos from any location. Stay connected with your media, whether you're at the event or miles away.",
    url: "https://framespik.com/any-where-view",
    image: "https://framespik.com/images/any-where-view-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Access Your Event Photos Anywhere with Framespik",
    description:
      "With Framespik’s Any-Where-View, easily access and manage your event photos from anywhere, ensuring you’re always connected to your media.",
    image: "https://framespik.com/images/any-where-view-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const AnywhereviewPage = () => {
  return (
    <Wrapper>
      <Anywhereview />
    </Wrapper>
  );
};

export default AnywhereviewPage;
