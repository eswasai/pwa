import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

import thumb from "@/assets/img/breadcrumImg/App-Design.jpg";
import Image from "next/image";

// blog page data
const blog_page_data = [
  {
    id: 2,
    cls: "format-video",
    video: [
      {
        video_tum: thumb,
        videoId: "HsRtw4Jrluo",
      },
    ],
  },
];

const videoBox = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="postbox__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div id="blog" className="postbox__wrapper">
                {blog_page_data.map((item, i) => (
                  <article
                    key={i}
                    className={`postbox__item ${item.cls} mb-20 transition-3`}
                  >
                    {item.img && (
                      <div className="postbox__thumb w-img">
                        <Link href="/blog-details">
                          <Image src={item.img} alt="theme-pure" />
                        </Link>
                      </div>
                    )}
                    {item.video &&
                      item.video.map((item, i) => (
                        <div
                          key={i}
                          className="postbox__thumb postbox__video w-img  p-relative"
                        >
                          <Link href="/blog-details">
                            <Image src={item.video_tum} alt="theme-pure" />
                          </Link>
                          {/* video modal start */}
                          <VideoPopup
                            isVideoOpen={isVideoOpen}
                            setIsVideoOpen={setIsVideoOpen}
                            videoId={item.videoId}
                          />
                          {/* video modal end */}
                          <button
                            onClick={() => setIsVideoOpen(true)}
                            className="play-btn pulse-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      ))}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default videoBox;
