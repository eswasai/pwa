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

import Brandcard from "../../screens/componets/blog-details/brand-card";

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
                    How <span style={{color:"#600ee4"}} >framespik Vision Camera </span>Resolves Photoshoot Challenges
                    </h1>
                    <p>
                    As a photographer, I've always strived to capture the perfect moment, but there have been times when things just didn’t go as planned. I remember one particular photoshoot where everything seemed off. The lighting wasn’t quite right, the poses felt stiff, and despite my best efforts, the shots weren’t conveying the essence of what my clients had envisioned. I was struggling to bring my creative ideas to life while keeping my clients happy. That was when I first discovered FrameSpik’s Vision Camera, and I can honestly say, it changed the way I approach my photoshoots forever.
                    </p>
                  </div>
                  <div className="postbox__thumb w-img">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEp_NL9Z4kU1nBc1HgD3cQ8z93AQ62r30Tg&s"
                      width={"500"}
                      height={"500"}
                      alt="framespik-blogs"
                    />
                  </div>
                  <div className="postbox__details-title-box pb-30">
                    <h3 >
                   Trying to Capture the Perfect Shot
                    </h3>
                    <p>
                    
                       During that challenging session, I found myself constantly second-guessing every shot. I could tell my clients were starting to lose confidence, as we were struggling to find the right poses and angles. Without a clear visual reference, they had a hard time imagining how different poses would look in the space we were working in. I knew I needed something to streamline the process, something that would allow me to guide my clients more effectively while also capturing the best shots possible.
                    </p>
                  </div>
                  <div className="postbox__details-title-box pb-30">
                    <h3 >
                    Discovering Vision Camera
                    </h3>
                    <p>
                    
                       That’s when I came across the Vision Camera feature in the framespik app. The idea of using technology to scan my environment and provide real-time pose suggestions seemed like a dream come true. I decided to give it a try. Once I started using it, everything changed.</p>
<p>
Vision Camera scans the environment, lighting, and spatial layout, and then intelligently suggests poses that would best suit the setting. It was like having a personal assistant helping me make decisions on the fly. I could see sample poses overlaid on the live feed, allowing me to visualize how they would look in real-time. It took the guesswork out of the process and allowed me to focus more on what I do best—capturing great photos.
                    </p>
                  </div>
                  <div className="postbox__details-title-box pb-30">
                    <h3 >
                    Seamless Collaboration and Stunning Shots
                    </h3>
                    <p>
                    
                       The best part? My clients were just as impressed as I was. With Vision Camera, they could see exactly how the poses would look before even trying them. It made the entire process more interactive and collaborative. Instead of wasting time on trial and error, we could quickly select the poses that worked best, boosting their confidence and making them feel more comfortable in front of the camera.
                       </p>
                       <p>
                       
                       The real-time feedback also helped me improve the quality of my shots. I could see instantly how different angles or adjustments would affect the overall composition, and I didn’t need to worry about missing that perfect moment. The poses were now natural and effortless, enhancing the final result in ways I hadn’t expected. The Vision Camera helped me capture the essence of the shoot, bringing my client’s vision to life and making sure the images reflected the mood of the setting.
                    </p>
                  </div>
                  
                  
                  <div className="postbox__details-img-box d-flex">
                    <div className="mr-20 text-center">
                      <Image
                        className="mb-20"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEp_NL9Z4kU1nBc1HgD3cQ8z93AQ62r30Tg&s"
                        width={"500"}
                        height={"500"}
                        alt="theme-pure"
                      />
                    </div>
                    <div className="text-center">
                      <Image
                        className="mb-20"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEp_NL9Z4kU1nBc1HgD3cQ8z93AQ62r30Tg&s"
                        width={"500"}
                        height={"500"}
                        alt="theme-pure"
                      />
                    </div>
                  </div>
                  <div className="postbox__details-title-box pb-30">
                    <h3 >
                    A Streamlined Workflow and Better Client Satisfaction
                    </h3>
                    <p>
                    
                       With the Vision Camera’s assistance, the workflow became much smoother. I could easily guide my clients through the process and build trust with them, showing them exactly what to expect. The ability to visualize the poses ahead of time not only saved time but also helped me maintain better control over the session. Clients were no longer left wondering how the shoot was progressing—they could see everything in real-time, making them feel more involved and reassured.
                       </p>
                       <p>
                       Thanks to Vision Camera, I not only improved my photoshoots but also my client satisfaction. I had more confidence in my work, and my clients were thrilled with the results. What once felt like a daunting, unpredictable process had transformed into a creative and enjoyable experience for both of us.
                    </p>
                  </div>
               
                  <div className="postbox__details-title-box pb-15">
                    <p>
                    <span className="fw-bold"> Conclusion: Transforming the Photography Experience
                    </span>

                 framespik Vision Camera feature has been a game-changer for my photography business. It resolved the challenges I was facing in my photoshoots and has now become an essential tool in my workflow. Whether I’m shooting a family portrait, a fashion campaign, or an event, I can rely on Vision Camera to guide me and my clients towards stunning, well-composed images. </p>
<p>
 If you’re a photographer who has faced similar struggles—whether it’s poor poses, lack of client confidence, or difficulty visualizing the perfect shot—Framespik’s Vision Camera can help you take your photoshoots to the next level. It not only simplifies the process but also empowers you to create beautiful, contextually rich images that capture the true essence of the moment. 
</p>
   <p>

    I can’t imagine going back to the old way of doing things. Vision Camera has revolutionized the way I work, and I’m excited for every photoshoot I do now.
                    </p>
                  </div> 
                  
                    
                  <div className="postbox__details-qoute mb-30">
                    <blockquote className="d-flex align-items-start">
                      <div className="postbox__details-qoute-icon">
                        <DoubleSemicolon />
                      </div>
                      <div className="postbox__details-qoute-text">
                        <p>
                          “At @framespik, the team is remarkably passionate, informed, and always there to lend a hand.
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
