import Wrapper from "@/layouts/wrapper";
import PaymentRemainders from "@/screens/payment-remainders";

export const metadata = {
  title: "Easily Manage Payments with Framespik",
  description:
    "Track payments, send reminders, and create invoices with ease using Framespik. Stay on top of your finances and keep everything organized.",
  openGraph: {
    title: "Easily Manage Payments with Framespik",
    description:
      "Framespik helps you manage payments effortlessly. Get automated reminders, track payments, and generate invoices to keep your finances in check.",
    url: "https://framespik.com/payment-remainders",
    image: "https://framespik.com/images/payment-remainders-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easily Manage Payments with Framespik",
    description:
      "Simplify your payment management with Framespik. Send reminders, track payments, and keep everything organized in one place.",
    image: "https://framespik.com/images/payment-remainders-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const PaymentRemaindersPage = () => {
  return (
    <Wrapper>
      <PaymentRemainders />
    </Wrapper>
  );
};

export default PaymentRemaindersPage;
