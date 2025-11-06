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
                      Effortless Data Backup and Security
                    </h1>
                    <p>
                      In today’s digital age, safeguarding precious memories and critical files is more important than ever. As a photographer, I’ve always struggled with finding a reliable platform to back up my data. <span style={{ color: "#60044e" }}>Framespik — the ultimate solution for data backup and long-term file security.</span> After months of using their service, I can confidently say it’s a game-changer. Here’s why.
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
                    <h3>Effortless Data Backup and Long-Term Security</h3>

                    <p>
                      Framespik promises long-term file security, and it delivers on this commitment with flying colors. Knowing my raw footage and high-resolution images were backed up gave me unparalleled peace of mind. With storage options that extend up to 15 years, Framespik ensures my files remain safe and accessible no matter how my projects evolve.
                      </p>
                     
                  </div>
                   
                                    
                 
                  <div>
                    <h3>Seamless Access Anywhere</h3>

                    <p>
                      One of Framespik’s standout features is the ability to access my files from virtually anywhere. Whether I’m editing photos on my laptop or sharing footage via my phone, Framespik’s platform integrates flawlessly. Additionally, their branded app adds a personal touch, making file management incredibly user-friendly. I’ve even edited files directly from my tablet without any hiccups.
                    </p>
                    
                
                  </div>
                  <div>
                    <h3>Robust Data Protection</h3>

                    <p>
                    Device crashes have haunted me in the past, but not anymore. Framespik’s reliable storage solutions have eliminated my worries about data loss. Their <span className="fw-bold">end-to-end encryption</span> ensures privacy and security, which is a must-have for anyone dealing with sensitive client work. Knowing that my files are protected against unforeseen circumstances has been a massive relief.
                    </p>
                    
                
                  </div>
                  <div>
                    <h3>Enhancing Client Experiences</h3>

                    <p>
                     Framespik doesn’t just make my life easier; it also enhances my clients’ experiences. The ability to send data backup cards and apply watermarks ensures my work remains professional and protected. Sharing files has become a breeze, and the positive feedback I’ve received from clients has been overwhelming.
                    </p>
                    
                
                  </div>
                  <div>
                    <h3>Why Framespik Stands Out</h3>

                    <p>
                     What sets Framespik apart from other backup solutions is its human-centric design and thoughtful features. The interface feels intuitive, and the features are tailored to meet real-world needs. Add to that their impressive track record — <span className="fw-bold">100K+ backups, 500+ TB of data stored, and 100K+ events liked</span> — and you have a platform that’s trusted by thousands.
                    </p>
                    
                
                  </div>
                  <div>
                    <h3>Final Thoughts</h3>

                    <p>
                      Framespik has revolutionized the way I approach data backup and file management. Its robust security, long-term storage options, and seamless accessibility make it an indispensable tool for anyone who values their digital assets. Whether you’re a creative professional or simply someone who wants to preserve cherished memories, Framespik is a platform you can rely on.
                    </p>
                    <p>
                      So, if you’re looking for a stress-free way to back up and protect your files, give Framespik a try. Trust me, you won’t look back.
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
                   <p className="fw-bold">Secure your memories effortlessly with Framespik — simplicity meets reliability!</p>  
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
