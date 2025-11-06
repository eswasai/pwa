import { recentBlogs } from "@/data/blogs-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogArea = () => {
  return (
    <>
      <div className="tp-blog-area pb-80 pt-lg-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="tp-blog-section-box text-center mb-50">
                <h3 className="tp-section-title-3">
                  Our Latest <span>Articles and Blogs</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {recentBlogs.map((blog, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-60">
                <div className="tp-blog-item">
                  {/* Blog Thumbnail */}
                  <div className="tp-blog-thumb fix">
                    <Link href={`/blogs/${blog.navigation}`}>
                      <Image
                        src={blog.thumb_img}
                        alt={blog.title}
                        width={400}
                        height={250}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>

                  {/* Blog Meta */}
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className={`tp-blog-category category-color-${i + 1}`}>
                      <span>{blog.category}</span>
                    </div>
                  </div>
                  {/* Blog Title */}
                  <div className="tp-blog-title-box">
                    <Link
                      className="tp-blog-title-sm"
                      href={`/blogs/${blog.navigation}`}
                    >
                      {blog.title}
                    </Link>
                  </div>

                  {/* Read More Button */}
                  <div className="header-bottom__btn d-flex align-items-end justify-content-end">
                    <Link
                      className="tp-btn-white tp-btn-hover alt-color-black"
                      href={`/blogs/${blog.navigation}`}
                      style={{
                        backgroundColor: "#4441cf",
                        color: "#fff",
                        borderRadius: "4px",
                      }}
                    >
                      <span className="white-text">Read More</span>
                      <b></b>
                    </Link>
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

export default BlogArea;
