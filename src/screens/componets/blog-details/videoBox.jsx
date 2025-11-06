import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";

const videoBox = ({ thumb, videoId = "HsRtw4Jrluo" }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!thumb || !videoId) {
    return <></>;
  }

  return (
    <>
      <div className="postbox__area" onClick={() => setIsVideoOpen(true)}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div id="blog" className="postbox__wrapper">
                <article
                  className={`postbox__item format-video mb-20 transition-3`}
                >
                  <div className="postbox__thumb postbox__video w-img  p-relative">
                    <Image
                      width={"800"}
                      height={"800"}
                      src={thumb}
                      alt="framespik-blog-video-thumb"
                    />
                    <button className="play-btn pulse-btn popup-video">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />
      {/* video modal end */}
    </>
  );
};

export default videoBox;
