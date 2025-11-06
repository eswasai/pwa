import React, { useEffect, useState } from "react";
import Image from "next/image";

// Default images
import defaultImg1 from "@/assets/img/career/image-1.png";
import defaultImg2 from "@/assets/img/career/image-2.png";
import defaultImg3 from "@/assets/img/career/image-3.png";
import defaultImg4 from "@/assets/img/career/image-4.png";

const CarrerBanner = ({
  img1 = defaultImg1,
  img2 = defaultImg2,
  img3 = defaultImg3,
  img4 = defaultImg4,
}) => {
  const [offset, setOffset] = useState(0);

  function handleScroll() {
    setOffset(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderImage = (imgSrc, alt = "theme-pure") => {
    if (imgSrc === "none") return null; // Don't render if 'none'
    return <Image src={imgSrc} alt={alt} />;
  };

  return (
    <>
      <div className="carrer-banner-area carrer-banner-space pt-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="carrer-banner-img-item">{renderImage(img1)}</div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="carrer-banner-img-item parallax-main">
                {renderImage(img2)}
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
              <div className="carrer-banner-img-item mb-20">
                {renderImage(img3)}
              </div>
              <div className="carrer-banner-img-item">{renderImage(img4)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrerBanner;
