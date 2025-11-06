import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentPost = ({ recentBlogs }) => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Recent Post</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recentBlogs.map((blog, i) => (
              <div key={i} className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Link href={blog.navigation}>
                    <Image
                      width={"300"}
                      height={"300"}
                      src={blog.thumb_img}
                      alt="theme-pure"
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link href={blog.navigation}>{blog.title}</Link>
                  </h3>
                  <div className="rc__meta">
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
