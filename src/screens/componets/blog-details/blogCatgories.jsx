import Link from "next/link";
import React from "react";

const Categories = ({ blogCategories }) => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Categories</h3>
        </div>
        <div className="sidebar__widget-content">
          <ul>
            {blogCategories.map((item, i) => (
              <li key={i}>
                <Link href={`/blogs?category=${item.title}`}>
                  <span>
                    <i className="fal fa-angle-right"></i>
                    {item.title}
                  </span>
                  <span>{item.items}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
