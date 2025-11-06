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
                      A Platform for Everyone
                    </h1>
                    <p>
                      Framespik isn’t just for individuals; it’s a lifesaver for photographers too. They can upload high-quality 4K photos and videos for clients, making it easy for us to view, select, and download our event memories. Plus, the option for photographers to customize access is such a thoughtful touch.
                      </p>
                      <p>
                      As a photographer, I love the flexibility Framespik offers. my user can access gallery from anywhere, view videos on any device, and share with ease. It’s a solution that genuinely puts users first.
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
                    <h3>Unlimited 4K Memories: Seamless Access & Sharing</h3>

                    <p>
                      When it comes to preserving memories in their most vivid form, nothing beats 4K resolution. I’ve been using Framespik’s Unlimited 4K Album Videos feature, and I can’t help but share how it has transformed the way I store, view, and share my videos.
                      </p>
                      <p> <span className="fw-bold">
                        {" "}
                       Unlimited Downloads: Reliving Memories Anytime
                      </span><br/>
                      One of my favorite things about Framespik is the ability to download my videos whenever I want, without any limits. Whether I’m revisiting a cherished moment, transferring files to a new device, or sharing clips with family and friends, the process is seamless and stress-free.
                    </p>

                    <p>
                      <span className="fw-bold">
                        {" "}
                        Uninterrupted 4K Viewing: Stunning Clarity Everywhere
                      </span><br/>
                      Watching my videos in 4K is like reliving those moments all over again. From my smartphone to my TV, the quality remains impeccable. Whether I’m at home or on the go, Framespik ensures my memories are always accessible in their full glory.
                    </p>
                    <p>
                      <span className="fw-bold">
                        {" "}
                       Easy Video Sharing: Effortless Connections
                      </span><br/>
                      Sharing videos has never been easier. With just a simple link, I can send my favorite moments to anyone via email or social media. Framespik makes it so convenient, and I love how quickly my friends and family can access the videos.
                            
                    </p>
                    <p>
                      <span className="fw-bold">
                        {" "}
                       Convenient Access: No Limits, No Worries
                      </span><br/>
                      Before using Framespik, I always worried about running out of storage or losing my files. Now, I have the peace of mind that comes with knowing my videos are safely stored and accessible anytime I need them. It’s a game-changer for someone like me who loves capturing every special moment.
                            
                    </p>
                    <p>
                      <span className="fw-bold">
                        {" "}
                       Secure and Reliable: Trustworthy Storage
                      </span><br/>
                     Security is a big deal for me, and Framespik doesn’t disappoint. I feel confident knowing my videos are protected against data corruption and loss. It’s reassuring to have a platform that prioritizes the safety of my memories. 
                            
                    </p>
                  </div>
                   
                                    
                 
                  <div>
                    <h3> A New Better Way to Share your Memories</h3>

                    <p>
                      Framespik has redefined the way I interact with my cherished memories. Its seamless access, stunning 4K resolution, and user-friendly features make it a must-have for anyone who values their digital memories. Whether you’re a photographer looking to provide exceptional service to clients or an individual who loves reliving precious moments, Framespik is the ultimate solution. Try it out, and you’ll see just how effortless preserving and sharing memories can be!
                   
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
                   {/* <p className="fw-bold">Make your photo selection stress-free—try Framespik today!</p>   */}
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
