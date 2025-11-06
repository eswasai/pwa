import React from "react";
import Image from "next/image";

const BlogHeroImg = ({ imageUrl }) => {
  return (
    <>
      <div className="blog-details-img-area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-details-big-img z-index-2">
                <Image
                  width={"3000"}
                  height={"3000"}
                  src={imageUrl}
                  alt="framespik_blogs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeroImg;
