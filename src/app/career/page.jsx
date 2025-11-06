import Career from "@/screens/career";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Explore Career Opportunities at Framespik - Join Our Team",
  description:
    "Start your journey with Framespik. Discover exciting career opportunities to innovate, collaborate, and contribute to the future of photography business management.",
  openGraph: {
    title: "Explore Career Opportunities at Framespik - Join Our Team",
    description:
      "Start your journey with Framespik. Discover exciting career opportunities to innovate, collaborate, and contribute to the future of photography business management.",
    url: "https://framespik.com/careers",
    image: "https://framespik.com/images/career-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Career Opportunities at Framespik - Join Our Team",
    description:
      "Start your journey with Framespik. Discover exciting career opportunities to innovate, collaborate, and contribute to the future of photography business management.",
    image: "https://framespik.com/images/career-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const CareerPage = () => {
  return (
    <Wrapper>
      <Career />
    </Wrapper>
  );
};

export default CareerPage;
