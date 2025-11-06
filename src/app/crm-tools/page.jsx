import Wrapper from "@/layouts/wrapper";
import Crm from "@/screens/crm";

export const metadata = {
  title: "Simplify Your Business with Framespik CRM",
  description:
    "Framespik CRM offers powerful tools to help you manage customer relationships, improve workflows, and collaborate more effectively, driving success for your business.",
  openGraph: {
    title: "Simplify Your Business with Framespik CRM",
    description:
      "With Framespik CRM, easily manage your customer relationships, optimize your workflows, and enhance team collaboration with advanced, user-friendly tools.",
    url: "https://framespik.com/crm-tools",
    image: "https://framespik.com/images/crm-tools-thumb.jpg",
    type: "website",
    site_name: "Framespik CRM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplify Your Business with Framespik CRM",
    description:
      "Manage your customers, streamline workflows, and improve collaboration with Framespik CRM, a complete solution for business success.",
    image: "https://framespik.com/images/crm-tools-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const crmPage = () => {
  return (
    <Wrapper>
      <Crm />
    </Wrapper>
  );
};

export default crmPage;
