import Wrapper from "@/layouts/wrapper";
import LearningSchool from "@/screens/learning-school";

export const metadata = {
  title: " Learning School - Framespik",
  description:
    "Discover  Learning School – your go-to platform for interactive courses in photography, event management, and more. Learn at your own pace and boost your skills with expert guidance - Framespik",
  openGraph: {
    title: " Learning School - Framespik",
    description:
      "Unlock new skills at  Learning School! Our courses are designed to help you grow in photography, event planning, and beyond, all at your own pace - Framespik",
    url: "https://framespik.com/learning-school",
    image: "https://framespik.com/images/learning-school-thumb.jpg",
    type: "website",
    site_name: "Framespik Learning School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framespik Learning School - Framespik",
    description:
      "Join Framespik Learning School to enhance your photography and event management skills with expert-led courses, available whenever you’re ready to learn - Framespik",
    image: "https://framespik.com/images/learning-school-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const LearningSchoolPage = () => {
  return (
    <Wrapper>
      <LearningSchool />
    </Wrapper>
  );
};

export default LearningSchoolPage;
