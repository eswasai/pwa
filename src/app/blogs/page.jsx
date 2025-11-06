import Wrapper from "@/layouts/wrapper";
import Blogs from "@/screens/blogs";

export const metadata = {
  title: "Explore Insights and Updates on Framespik Blogs",
  description:
    "Stay informed with the latest trends, tips, and updates through Framespik's blog. Discover expert advice and valuable content for your business and creative needs.",
  openGraph: {
    title: "Explore Insights and Updates on Framespik Blogs",
    description:
      "Framespik's blog offers the latest industry insights, tips, and updates. Explore valuable content to stay ahead in business and creativity.",
    url: "https://framespik.com/blogs",
    image: "https://framespik.com/images/blogs-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Insights and Updates on Framespik Blogs",
    description:
      "Get the latest insights, tips, and updates from Framespik's blog, offering expert advice and valuable content to support your business and creative growth.",
    image: "https://framespik.com/images/blogs-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const BlogPage = () => {
  return (
    <Wrapper>
      <Blogs />
    </Wrapper>
  );
};

export default BlogPage;
