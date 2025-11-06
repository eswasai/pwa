import Wrapper from "@/layouts/wrapper";
import Scheduling from "@/screens/scheduling";

export const metadata = {
  title: "Streamlined Team management - Framespik",
  description:
    "Framespik simplifies Team management with easy event organization, task assignment, and instant schedule updates via push notifications.",
  openGraph: {
    title: "Streamlined Team management - Framespik",
    description:
      "Framespik simplifies Team management with easy event organization, task assignment, and instant schedule updates via push notifications.",
    url: "https://framespik.com/scheduling",
    image: "https://framespik.com/images/crew-management-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamlined Team management - Framespik",
    description:
      "Framespik simplifies Team management with easy event organization, task assignment, and instant schedule updates via push notifications.",
    image: "https://framespik.com/images/crew-management-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const SchedulingPage = () => {
  return (
    <Wrapper>
      <Scheduling />
    </Wrapper>
  );
};

export default SchedulingPage;
