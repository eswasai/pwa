import { AppContext } from "@/context/ContextProvider";
import VideoPopup from "@/modals/video-popup";
import React, { useState, useRef, useContext } from "react";

const MemoryPageVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoEl = useRef(null);
  //   const { handleMouseEnter, handleMouseLeave } = useContext(AppContext);

  return (
    <>
      <div className="tp-vedio-area p-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="tp-vedio-wrap">
                <a
                  className="popup-video tp-cursor-point-area"
                  onClick={() => setIsVideoOpen(true)}
                  //   onMouseEnter={() => handleMouseEnter(true)}
                  //   onMouseLeave={() => handleMouseLeave(false)}
                >
                  <video
                    className="play-video"
                    id="myVideo"
                    autoPlay
                    loop
                    playsInline
                    muted
                    alt="All the devices"
                    src="https://html.hixstudio.net/videos/softec/softec-video.mp4"
                    ref={videoEl}
                  ></video>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"HsRtw4Jrluo"}
      />
      {/* video modal end */}
    </>
  );
};

export default MemoryPageVideo;
