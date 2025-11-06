import Wrapper from "@/layouts/wrapper";
import DataSecure from "@/screens/data-secure";

export const metadata = {
  title: "Secure Your Data with Framespik",
  description:
    "Framespik ensures data protection with encrypted formats, offering a secure and efficient solution.",
  openGraph: {
    title: "Secure Your Data with Framespik",
    description:
      "Framespik ensures data protection with encrypted formats, offering a secure and efficient solution.",
    url: "https://framespik.com/data-safe",
    image: "https://framespik.com/images/data-safe-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Your Data with Framespik",
    description:
      "Framespik makes secure, encrypting your images and data for privacy and safety.",
    image: "https://framespik.com/images/data-safe-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const DataSecurePage = () => {
  return (
    <Wrapper>
      <DataSecure />
    </Wrapper>
  );
};

export default DataSecurePage;
