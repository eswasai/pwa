import Wrapper from "@/layouts/wrapper";
import WorkUpdates from "@/screens/work-updates";

export const metadata = {
  title: "Keep Clients Informed with Real-Time Work Updates",
  description:
    "Ensure smooth event execution with real-time work updates. Keep clients informed with progress tracking, transparent task assignments, and streamlined communication between team members and clients.",
  openGraph: {
    title: "Keep Clients Informed with Real-Time Work Updates",
    description:
      "Manage event progress with ease through real-time work updates. Clients stay informed with transparent tracking of tasks, team assignments, and major milestones.",
    url: "https://framespik.com/work-updates",
    image: "https://framespik.com/images/work-updates-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keep Clients Informed with Real-Time Work Updates",
    description:
      "Ensure your clients are always in the loop with real-time work updates, task tracking, and transparent progress reports to keep events on track.",
    image: "https://framespik.com/images/work-updates-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const WorkUpdatesPage = () => {
  return (
    <Wrapper>
      <WorkUpdates />
    </Wrapper>
  );
};

export default WorkUpdatesPage;
