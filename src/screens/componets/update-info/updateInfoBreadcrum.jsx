import React from "react";
import SaveLineIcon from "@/svg/save-line-icon";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";

// shape import
import shape_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";
import Image from "next/image";
import PlanSelectionBox from "@/screens/componets/plans/planSelectBox";
import UpdateInfoMainContainer from "./update-info-heropage";
import UpdatePricing from "../plans/updatepricings";

const UpdateInfoBreadCrum = () => {
  const { animeRef } = useBreadcrumbTitleAnime();
  return (
    <>
      <div className="breadcrumb__area breadcrumb-ptb-5 p-relative blue-bg-2 pb-4 px-0">
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-7 col-md-7">
              <div className="price-banner z-index-3">
                <div className="price-banner-title-box">
                  <h3
                    ref={animeRef}
                    className="ml-5 price-banner-title tp-char-animation anime_text"
                  >
                    Web & App Pricing
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <PlanSelectionBox /> */}
          <UpdateInfoMainContainer />
          {/* <UpdatePricing/>  */}
        </div>
      </div>
    </>
  );
};

export default UpdateInfoBreadCrum;
