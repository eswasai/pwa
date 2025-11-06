import Wrapper from "@/layouts/wrapper";
import Team from "@/screens/team";

export const metadata = {
  title: "Meet Our Team - framespik",
  description:
    "Meet the talented team behind Framespik who are dedicated to empowering photographers and helping them grow their businesses with ease.",
  openGraph: {
    title: "Meet Our Team - framespik",
    description:
      "Meet the talented team behind Framespik who are dedicated to empowering photographers and helping them grow their businesses with ease.",
    url: "https://framespik.com/team",
    image: "https://framespik.com/images/team-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team - framespik",
    description:
      "Meet the talented team behind Framespik who are dedicated to empowering photographers and helping them grow their businesses with ease.",
    image: "https://framespik.com/images/team-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const TeamPage = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default TeamPage;
