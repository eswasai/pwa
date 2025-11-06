import Wrapper from "@/layouts/wrapper";
import Contact from "@/screens/contact";

export const metadata = {
  title: "Get in Touch with Framespik - Contact Us",
  description:
    "Have questions or need support? Contact Framespik and let us help you manage and grow your photography business with ease.",
  openGraph: {
    title: "Get in Touch with Framespik - Contact Us",
    description:
      "Have questions or need support? Contact Framespik and let us help you manage and grow your photography business with ease.",
    url: "https://framespik.com/contact",
    image: "https://framespik.com/images/contact-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch with Framespik - Contact Us",
    description:
      "Have questions or need support? Contact Framespik and let us help you manage and grow your photography business with ease.",
    image: "https://framespik.com/images/contact-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const ContactPage = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default ContactPage;
