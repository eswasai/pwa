import Wrapper from "@/layouts/wrapper";
import { blogsData, categoryCounts } from "@/data/blogs-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const blogPath = params?.blogPath;
  const blogData = blogsData.find((blog) => blog.navigation === blogPath);

  if (!blogData) {
    return {
      title: "🩹 Sorry, Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blogData.title,
    description: blogData.des,
    openGraph: {
      title: blogData.title,
      description: blogData.des,
      url: `https://framespik.com/blogs/${blogData.navigation}`,
      image: blogData.thumb_img,
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.title,
      description: blogData.des,
      image: blogData.thumb_img,
      site: "@framespik",
      creator: "@framespik",
    },
  };
}

const BlogViewPage = async ({ params }) => {
  const blogPath = params?.blogPath;
  const blogData = blogsData.find((blog) => blog.navigation === blogPath);

  if (!blogData) {
    return notFound();
  }

  let BlogView;
  try {
    BlogView = await import(`@/screens/blog-posts/${blogPath}`).then(
      (mod) => mod.default
    );
  } catch (error) {
    notFound();
  }

  return (
    <Wrapper>
      <BlogView
        title={blogData.title}
        category={blogData.category}
        thumb_img={blogData.thumb_img}
        recentBlogs={blogsData.slice(0, 10)}
        blogCategories={categoryCounts}
      />
    </Wrapper>
  );
};

export default BlogViewPage;
