import React from "react";
import Image from "next/image";

import Logo from "@/assets/img/blog/blog-details-avata-1.jpg";
import SocialLinks from "@/common/social-links";

const BrandCard = () => {
  return (
    <>
      <div className="postbox__details-author-info-box mb-100 d-flex align-items-start">
        <div className="postbox__details-author-avata">
          <Image src={Logo} alt="theme-pure" />
        </div>
        <div className="postbox__details-author-content">
          <h5 className="postbox__details-author-title">Framespik Global</h5>
          <p>
            Stay connected! Follow us on our social media handles for updates,
            tips, and exclusive content. Join us now!
          </p>
          <div className="postbox__details-author-social">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
