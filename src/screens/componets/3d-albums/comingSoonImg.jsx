import React from "react";
import Image from "next/image";
import ComingImg from "@/assets/img/3d-album/comingSoonAlbum.jpg";

const ComingSoonImg = () => {
  return (
    <div className="pd-thumb-area mt-180 mb-100">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="pd-thumb" style={{ width: "60%" }}>
              <Image src={ComingImg} alt="Coming Soon Album" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonImg;
