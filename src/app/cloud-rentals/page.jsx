import Wrapper from "@/layouts/wrapper";
import StorageRentals from "@/screens/storage-rentals";

export const metadata = {
  title:
    "Cloud Rentals for Photographers - Flexible and Cost-Effective Storage",
  description:
    "Framespik offers flexible cloud rental options for photographers, allowing you to rent cloud storage based on usage. Pay per GB for the time you need, whether it's for one day or a week.",
  openGraph: {
    title:
      "Cloud Rentals for Photographers - Flexible and Cost-Effective Storage",
    description:
      "Framespik offers flexible cloud rental options for photographers, allowing you to rent cloud storage based on usage. Pay per GB for the time you need, whether it's for one day or a week.",
    url: "https://framespik.com/cloud-rentals",
    image: "https://framespik.com/images/cloud-rentals-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cloud Rentals for Photographers - Flexible and Cost-Effective Storage",
    description:
      "Framespik offers flexible cloud rental options for photographers, allowing you to rent cloud storage based on usage. Pay per GB for the time you need, whether it's for one day or a week.",
    image: "https://framespik.com/images/cloud-rentals-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const CloudRentalsPage = () => {
  return (
    <Wrapper>
      <StorageRentals />
    </Wrapper>
  );
};

export default CloudRentalsPage;
