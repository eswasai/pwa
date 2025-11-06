"use client";
import HeaderSix from "@/layout/headers/header-6";
import Blogbreadcum from "../componets/blog-details/breadcrum";
import BlogHeroImg from "../componets/blog-details/blog-Image";

import CtaArea from "@/components/contact/cta-area";
import FooterTwo from "@/layout/footers/footer-2";

import DoubleSemicolon from "@/svg/double-semicolon";
import Image from "next/image";
import React from "react";
import Categories from "../componets/blog-details/blogCatgories";
import RecentPost from "../componets/blog-details/recentPosts";
import VideoBox from "../componets/blog-details/videoBox";

import Brandcard from "../componets/blog-details/brand-card";
import { color } from "framer-motion";

const BlogView = ({
  title,
  category,
  thumb_img,
  recentBlogs,
  blogCategories,
}) => {
  return (
    <>
      <HeaderSix />
      <Blogbreadcum title={title} sub_title={category} />
      <BlogHeroImg imageUrl={thumb_img} />
      <div className={`postbox__area pb-100`}>
        <div className="container">
          <div className="row pt-60">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper">
                <article>
                  {/* <VideoBox
                    videoId="HsRtw4Jrluo"
                    thumb="https://i.ytimg.com/vi/HsRtw4Jrluo/maxresdefault.jpg"
                  /> */}
                  <div className="postbox__details-title-box pb-30">
                    <h1 className="postbox__details-title">
                      Simplify Your Photo Selection Journey
                    </h1>
                    <p>
                      When it comes to choosing the perfect photos, the process
                      can often feel overwhelming—especially when there are
                      hundreds of stunning options to review. That’s exactly how
                      I felt after receiving the gallery from my latest shoot. I
                      wanted to finalize my selections quickly, but the idea of
                      scrolling through endless images on a clunky platform was
                      daunting.
                      </p>
                      <p>
                      That’s when I was introduced to{" "}
                      <span style={{ color: "#60044e" }}>framespik</span> and
                      let me tell you, it completely transformed my experience.
                      From the moment I accessed my gallery to finalizing my
                      selections, framespik made the entire journey smooth,
                      secure, and surprisingly enjoyable.
                    </p>
                  </div>
                  <div className="postbox__thumb w-img">
                    <Image
                      src="http://cloud.framespik.com/public-space/imagebank/1736257109_93b1922646c140448863c0335ccf4203.png"
                      width={"500"}
                      height={"500"}
                      alt="framespik-blogs"
                    />
                  </div>
                  <div>
                    <h3>How framespik Simplified My Photo Selection</h3>

                    <p>
                      <span className="fw-bold">
                        Secure and Personalized Gallery Access:
                      </span>
                      Accessing my photos through framespik was incredibly
                      simple. I received a secure, unique link via email that
                      took me directly to my personalized gallery. No
                      complicated logins, no unnecessary steps—just a safe and
                      private way to view my photos.
                      </p>
                      <p>
                      What stood out to me was the watermark preview feature.
                      All the images in the gallery were watermarked, which gave
                      me peace of mind knowing that my photos were protected
                      while I reviewed them.
                    </p>

                    <p>
                      <span className="fw-bold">
                        {" "}
                        An Intuitive Selection Process:
                      </span>
                      Once I was in the gallery, the magic of framespik
                      user-friendly interface became clear. I could easily mark my favorite photos with a simple click on the heart-shaped icon.
Unlike other platforms that limit the number of images you can pick, framespik allowed me to select as many as I wanted. This flexibility was a game-changer.I even had the option to filter photos based on composition, colors, and other criteria, making it easy to narrow down my choices.
Whether I was on my laptop or my phone, the gallery worked seamlessly across devices, so I could continue the selection process wherever I was.
                            
                    </p>
                    <p>
                      <span className="fw-bold">
                        {" "}
                        Effortless Sharing Options:
                      </span>
                      After marking my favorite images, I wanted to share them with family and friends for feedback. FrameSpik made this incredibly easy.I could share the photos with watermarks applied, so everyone could review them securely.
The platform offered multiple sharing methods—secure links, emails, or even QR codes. This level of convenience allowed me to quickly gather opinions without compromising the security of my photos.
                            
                    </p>
                    <p>
                      <span className="fw-bold">
                        {" "}
                         Seamless Photo Finalization
                      </span>
                      Finalizing my photo selection was as simple as clicking a button. Once I was satisfied with my choices, I finalized them directly from the gallery. Knowing that the selected images were securely stored and ready for the next step—whether it was creating an album, printing, or sharing online—gave me complete confidence in the process.
                            
                    </p>
                  </div>
                   
                                    
                 
                  <div>
                    <h3>Conclusion: A Better Way to Select Your Photos</h3>

                    <p>
                      Framespik turned what used to be a tedious and stressful task into an enjoyable and straightforward experience. From secure gallery access to a seamless selection and sharing process, it covered every base with precision and ease.
                    </p>
                    <p>
                     If you’ve ever felt overwhelmed by the photo selection process, I highly recommend Framespik. It’s a solution that prioritizes security, flexibility, and user-friendliness, ensuring that your photo journey is as beautiful as the images themselves.
                    </p>
                   
                  </div>
                  

                  <div className="postbox__details-img-box d-flex">
                    <div className="mr-20 text-center">
                      <Image
                        className="mb-20"
                        src="http://cloud.framespik.com/public-space/imagebank/1736242228_45432de97cc449bc81f9a158388e64bd.png"
                        width={"500"}
                        height={"500"}
                        alt="theme-pure"
                      />
                    </div>
                    <div className="text-center">
                      <Image
                        className="mb-20"
                        src="http://cloud.framespik.com/public-space/imagebank/1736247801_8e5d81f148744459878029b5df5f7b55.png"
                        width={"500"}
                        height={"500"}
                        alt="theme-pure"
                      />
                    </div>
                  </div> 
                   <p className="fw-bold">Make your photo selection stress-free—try Framespik today!</p>  
                  <div className="postbox__details-qoute mb-30">
                    <blockquote className="d-flex align-items-start">
                      <div className="postbox__details-qoute-icon">
                        <DoubleSemicolon />
                      </div>
                      <div className="postbox__details-qoute-text">
                        <p>
                          “At @framespik, the team is remarkably passionate,
                          informed, and always there to lend a hand.
                        </p>
                        <span>Team framespik.</span>
                      </div>
                    </blockquote>
                  </div>
                  <Brandcard />
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Categories blogCategories={blogCategories} />
                <RecentPost recentBlogs={recentBlogs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default BlogView;
