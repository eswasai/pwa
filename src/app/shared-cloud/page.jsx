import Wrapper from "@/layouts/wrapper";
import SharedCloud from "@/screens/shared-cloud";

export const metadata = {
  title: "Efficient Shared Cloud Storage for Teams",
  description:
    "Easily manage and allocate cloud storage for your team, ensuring efficient collaboration, secure access, and flexible storage distribution.",
  openGraph: {
    title: "Efficient Shared Cloud Storage for Teams",
    description:
      "Streamline your team's workflow with shared cloud storage, flexible allocation options, and centralized control for seamless collaboration and secure data management.",
    url: "https://framespik.com/shared-cloud",
    image: "https://framespik.com/images/shared-cloud-thumb.jpg",
    type: "website",
    site_name: "Your Cloud Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efficient Shared Cloud Storage for Teams",
    description:
      "Allocate and manage cloud storage for your team with ease, ensuring secure access and smooth collaboration across tasks and projects.",
    image: "https://framespik.com/images/shared-cloud-thumb.jpg",
    site: "@yourcloudsolution",
    creator: "@yourcloudsolution",
  },
};

const SharedCloudPage = () => {
  return (
    <Wrapper>
      <SharedCloud />
    </Wrapper>
  );
};

export default SharedCloudPage;
