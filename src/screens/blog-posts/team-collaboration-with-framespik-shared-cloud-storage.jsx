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
                      How Shared Cloud Storage by framespik Revolutionizes Team Collaboration
                    </h1>
                    <p>
                      As a team manager, keeping everyone aligned while managing media, event schedules, and tasks can often feel overwhelming. From ensuring every team member has the tools they need to maintaining secure, centralized control over critical files, the challenges can quickly pile up. This was my struggle—until I discovered <span style={{ color: "#60044e" }}>framespik’s shared cloud storage feature </span>. It transformed how my team collaborates, helping us work smarter and more efficiently.
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
                    <h3>Managing Team Storage and Collaboration</h3>

                    <p>
                      In one of our busiest seasons, I found myself constantly juggling between fragmented storage systems and scattered team workflows. Each team member had different requirements—some needed just a small amount of storage for task files, while others required hundreds of gigabytes for media management. This lack of organization led to missed updates, misplaced files, and delays in project timelines.
                      </p>
                      <p>
                      As the manager, I had no centralized control over storage allocation or security. If something went wrong, I had to spend hours sorting it out. I needed a solution that would bring everything together—secure, streamlined, and easy to manage.
                      
                    </p>

                  </div>
                  <div>
                    <h3>Shared Cloud Storage by framespik</h3>

                    <p>
                      Framespik shared cloud storage feature provided the perfect solution. With a user-friendly platform, I could allocate storage to team members based on their specific needs and maintain complete control over access and security.</p>
                      <p>Here’s what made it stand out:</p>
                      <p>
                     <span className="fw-bold">Flexible Storage Allocation: </span> Whether one member needed 30GB for documents or another required 200GB for high-quality media, I could distribute our shared storage effortlessly.
                     
                     </p>
                      <p>
                     <span className="fw-bold">Centralized Oversight:</span>As the manager, I maintained full visibility and control, ensuring that tasks and files were always organized and secure.
                     
                     </p>
                      <p>
                     <span className="fw-bold">Enhanced Security: </span> In case of misuse or an issue, I had the ability to freeze access and recover data instantly—no more sleepless nights over potential data breaches.
                     
                     </p>
                    
                    

                  </div>
                   
                                    
                 
                  <div>
                    <h3>Seamless Collaboration and Efficiency</h3>

                    <p className="fw-bold">
                       Here’s how it made a difference for me:
                    </p>
                    <p>
                     Implementing framespik’s shared cloud storage feature completely transformed our workflow. With real-time updates and task assignments integrated into the platform, my team and I could focus on what mattered most—delivering exceptional results for our clients.
                     
                     </p>
                     <p>
                     The ability to schedule tasks, assign responsibilities, and share files in one centralized system saved us hours each week. Everyone had the tools they needed, and with secure access, we could work confidently without worrying about losing.
                     </p>
                    
                   
                  </div>
                  <div>
                    <h3>Why Our Team Love Framespik Shared Cloud Storage</h3>
                    <p>framespik isn’t just about storage—it’s about empowering teams to collaborate seamlessly. Key features include:
                    </p>
                    <p>
                     <span className="fw-bold">Real-Time Updates and Reminders: </span>Keep everyone on track with instant notifications and task reminders.

                     </p>
                    <p>
                     <span className="fw-bold">Integration with Existing Tools:</span>easily sync schedules and files with your current workflow.

                     </p>
                    <p>
                     <span className="fw-bold">Complete Security:</span>Built-in safeguards to protect your data and provide peace of mind.

                     </p>

                    
                  </div>
                  <div>
                    <p>framespik’s shared cloud storage isn’t just a tool—it’s a complete solution for teams looking to collaborate efficiently and securely. Whether you’re managing events, editing media, or assigning tasks, this feature provides the flexibility and control you need to succeed.</p>
                    <p>If your team has ever struggled with disorganized workflows or insufficient storage solutions, framespik is here to help. By centralizing your efforts and giving you full control, it ensures every project runs smoothly from start to finish.</p>
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
                   <p className="fw-bold">Framespik doesn’t just organize your storage—it organizes your success.</p>  
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
