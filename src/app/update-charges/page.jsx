import Wrapper from "@/layouts/wrapper";
import UpdatesInfo from "@/screens/update-screens";

export const metadata = {
  title: "UpdateCharges - framespik",
  description:
    "Framespik Provides the update information about the about the apps, website and others",
  openGraph: {
    title: "Update Charges - framespik",
    description:
      "Framespik Provides the update information about the about the apps, website and others",
    url: "https://framespik.com/team",
    image: "https://framespik.com/images/team-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Update Charges - framespik",
    description:
      "Framespik Provides the update information about the about the apps, website and others",
    image: "https://framespik.com/images/team-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const UpdatesInfoPage = () => {
  return (
    <Wrapper>
      <UpdatesInfo />
    </Wrapper>
  );
};

export default UpdatesInfoPage;
