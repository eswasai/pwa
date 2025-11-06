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
                  <VideoBox
                    videoId="HsRtw4Jrluo"
                    thumb="https://i.ytimg.com/vi/HsRtw4Jrluo/maxresdefault.jpg"
                  />
                  <div className="postbox__details-title-box pb-30">
                    <h1 className="postbox__details-title">
                      
                    </h1>
                    <p>
                      we’re constantly looking for new and creative ways to showcase our work. Traditional photo albums are great, but they don’t always capture the full magic of the moments we’ve worked so hard to capture. That’s why I’m excited to share with you a game-changer in the world of photo presentation: <span style={{color:'#600ee4'}}>the Interactive 3D Album.</span> This tool allows you to create dynamic, interactive galleries that elevate your photos and engage your viewers in ways that traditional albums simply can’t.
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
                    <h3>Effortless 3D Album Creation</h3>

                    <p>
                      The process of creating a 3D album is incredibly easy. All you need to do is upload your images, arrange them in the desired order, and let the tool transform them into a captivating 3D experience.
                      </p>
                      <p> No technical skills required! Whether you’re a seasoned pro or a budding photographer, this tool makes creating a visually stunning photo album accessible to everyone.
                    </p>

                  </div>
                  <div>
                    <h3>Personalize Your 3D Album</h3>

                    <p>
                      One of the things I love about this tool is how customizable it is. As photographers, branding is important, and this album feature allows you to add personal touches. You can easily add watermarks, logos, and custom text with a simple drag-and-drop interface. This is perfect for photographers like me who want to share their work in a way that’s unique and professional, whether it’s for a client, a portfolio, or just a personal project.
                    </p>

                  </div>
                  <div>
                    <h3>Simple and Seamless Sharing</h3>

                    <p>
                      Once your album is ready, sharing it with clients, friends, or followers is as easy as generating a shareable link. This feature is a lifesaver when you’re showcasing work to potential clients or sharing a collection of images from a recent shoot. The dynamic link makes it easy for anyone to view and interact with the album online, anywhere, anytime.
                    </p>

                  </div>
                  <div>
                    <h3>Interactive Viewing Experience</h3>

                    <p>
                      What sets the 3D album apart is the interactive experience it offers. It’s not just about viewing photos; it’s about engaging with them. Your audience can zoom in, click through the images, and experience your work in a whole new way. As a photographer, it’s thrilling to know that my photos are being viewed in a visually immersive format, giving clients and fans a richer experience than static images on a page.
                    </p>

                  </div>
                   
                                    
                 
                  <div>
                    <h3>Why Every Photographer Should Use 3D Albums</h3>

                    <p>
                      As photographers, we’re always looking for ways to stand out and make our work memorable. With 3D albums, you can present your photos in a way that’s fresh, engaging, and unique. This tool is perfect for portfolio showcases, client presentations, event photography, and personal projects. The best part? It’s incredibly easy to use, meaning you can focus on what you do best—capturing beautiful moments—while the tool takes care of the rest.
                   
                    </p>
                    <p>
                        If you’re a photographer looking to elevate the way you showcase your work, I highly recommend giving 3D albums a try. It’s an intuitive, customizable, and engaging way to present your photos to clients, friends, and followers. Don’t settle for ordinary albums—take your photography to the next level with a 3D interactive experience. Start creating your own 3D album today and watch your photos come to life!
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
                   <p className="fw-bold">Transform Your Photos into Interactive Masterpieces with 3D Albums</p>  
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
