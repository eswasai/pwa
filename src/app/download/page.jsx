import Wrapper from "@/layouts/wrapper";
import Download from "@/screens/download";

export const metadata = {
  title: "Download the Framespik App",
  description:
    "Ready to take your photography and event management to the next level? Download the Framespik app and access all the powerful tools you need, anytime, anywhere.",
  openGraph: {
    title: "Download the Framespik App",
    description:
      "Get the Framespik app and manage your photography and event tasks on the go. Powerful features, simple access, and everything you need to stay organized in one app.",
    url: "https://framespik.com/download",
    image: "https://framespik.com/images/download-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download the Framespik App",
    description:
      "Download the Framespik app and stay in control of your photography and event management tasks from anywhere. Easy to use, with everything you need to succeed.",
    image: "https://framespik.com/images/download-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const downloadPage = () => {
  return (
    <Wrapper>
      <Download />
    </Wrapper>
  );
};

export default downloadPage;
