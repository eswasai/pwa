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
                      How framespik Custom UI & Personalized App Helps Freelance Photographers Attract Clients
                    </h1>
                    <p>
                      As a freelance photographer, building a client base without a dedicated studio can feel like an uphill battle. I know the struggle all too well—juggling multiple roles, from capturing perfect moments to marketing my services, all while competing with established studios. The lack of a professional setup often left potential clients questioning my credibility
                      </p>
                      <p>
                      But then I discovered  
                      <span style={{ color: "#60044e" }}> framespik custom UI & personalized app design</span>
                     , and everything changed. This platform provided me with the tools to create my own branded app, helping me showcase my work, connect with clients, and manage my business seamlessly—all from my phone.


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
                    <h3>Standing Out Without a Studio</h3>

                    <p>
                      Before using framespik, finding clients was tough. Without a studio, I relied on social media and word-of-mouth, but my online presence lacked the professionalism and consistency needed to attract serious clients. Potential customers often hesitated because I didn’t have a centralized way to showcase my portfolio or manage bookings.
                      </p>
                      <p>
                      On top of that, juggling inquiries, payments, and scheduling was chaotic. I knew I needed a better way to present myself—a way to make potential clients see me as more than just a freelancer without a studio.
                      
                    </p>

                  </div>
                  <div>
                    <h3>framespik Personalized App Design</h3>

                    <p>
                      The transformation was immediate. With my app, potential clients could browse my portfolio, select packages, and book sessions directly—all from their phones.</p>
                      
                    
                    <p>
                   Having a branded app made me look professional, even without a studio. Clients appreciated the ease of use and loved receiving push notifications with updates about their bookings or reminders for upcoming shoots. It created a sense of trust and professionalism that helped convert inquiries into confirmed clients.
                  
                    </p>

                  </div>
                   
                                    
                 
                  <div>
                    <h3>How framespik Empowers Freelancers</h3>

                    <p className="fw-bold">
                       Here’s how it made a difference for me:
                    </p>
                    <p>
                     <span className="fw-bold">live Design Selection:</span> framespik’s live design feature allowed me to customize my app exactly the way I wanted, ensuring it perfectly represented my brand.
                     
                     </p>
                     <p>
                     <span className="fw-bold">Full Control & Updates:</span> I could manage content, update designs, and track analytics directly from the app, keeping my business agile and responsive.
                     </p>
                     <p>
                     <span className="fw-bold">Push Notifications & Engagement:</span> Sending reminders and updates kept my clients engaged, building stronger relationships and increasing repeat bookings.
                     </p>
                     <p>
                     <span className="fw-bold">No Hidden Costs:</span> With transparent pricing and no maintenance hassles, I could focus entirely on growing my business.
                    </p>
                   
                  </div>
                  <div>
                    <h3>Your Virtual Studio, Powered by framespik</h3>
                    <p>framespik gave me the tools to compete with larger studios without the overhead costs of owning one. By creating a personalized app, I could connect with clients, showcase my work, and manage my business effortlessly.
                    </p>

                    <p>
                    If you’re a freelance photographer struggling to find clients due to a lack of a studio, framespik can help you level up your game. With its custom UI and personalized app design, it turns your phone into a virtual studio that boosts your credibility, simplifies your workflow, and helps you attract more clients.</p>
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
                   <p className="fw-bold">Framespik isn’t just an app—it’s your partner in building a successful photography business.</p>  
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
