import Wrapper from "@/layouts/wrapper";
import FinanceTracking from "@/screens/finance-tracking";

export const metadata = {
  title: "Track and Analyze Your Finances with Framespik",
  description:
    "Monitor payments, debts, and staff salaries with Framespik's comprehensive financial tracking tools, ensuring better cash flow management and financial transparency.",
  openGraph: {
    title: "Track and Analyze Your Finances with Framespik",
    description:
      "Framespik helps photographers and event managers track payments, debts, and staff salaries. Get real-time financial insights and streamline cash flow management.",
    url: "https://framespik.com/track-and-analyze-finance",
    image: "https://framespik.com/images/track-and-analyze-finance-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Track and Analyze Your Finances with Framespik",
    description:
      "Gain control over your finances with Framespik's financial tracking tools. Monitor payments, debts, and salaries for better cash flow management and financial transparency.",
    image: "https://framespik.com/images/track-and-analyze-finance-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const FinanceTrackingPage = () => {
  return (
    <Wrapper>
      <FinanceTracking />
    </Wrapper>
  );
};

export default FinanceTrackingPage;
