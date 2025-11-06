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
                    Why Security <span style={{color:'#600ee4'}}>Matters</span> for Your Photos
                    </h1>
                    <p>As someone who takes great pride in capturing memories, I’ve always known the importance of not just creating beautiful images, but also safeguarding them. Photos are more than just pictures—they hold stories, emotions, and moments that can’t be replaced. Unfortunately, I learned this lesson the hard way when I lost a batch of important images from a recent shoot due to an unexpected system failure. The feeling of panic was overwhelming. The photos were irreplaceable, and for a while, it felt like I had lost something far beyond just digital files.
                    </p>
<p>
But that’s when I decided I needed a better way to secure my work. I needed a solution that would give me peace of mind, knowing that my photos would always be protected, no matter what. That’s when I turned to framespik, and it completely changed the way I handle photo storage.
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
                  <div className="postbox__details-title-box pb-30">
                    <h3 >
                    Why Needed Better Protection
                    </h3>
                    <p>
                    
                       Before framespik, I relied on local drives and external storage devices, but after losing those photos, I realized how fragile these systems can be. Whether it’s a hard drive failure, accidental deletion, or software glitches, I realized how easily my work could disappear. That's when I started looking for a more secure solution that would give me peace of mind.
                       </p>
                       <p>
                       What I found with framespik was exactly what I needed—a reliable and secure cloud storage system that offered three separate backups. This three-tier system ensures that even if something happens to one backup, the other two will still protect my photos. Knowing that my images were safe in multiple locations gave me the confidence I was looking for.
                    </p>
                  </div>
                  <div className="postbox__details-title-box pb-30">
                    <h3 >
                    Why Choose <span style={{color:'#600ee4'}}>framespik cloud storage?</span>
                    </h3>
                    <p>
                        What impressed me most about framespik was how simple and seamless the whole process was. Once I started using their platform, I realized how easy it was to upload and store my photos. There’s no complex setup or worrying about how to sync everything. framespik does it all automatically, ensuring my images are backed up in real time.
                        </p>
                        <p>
                        The system saves my photos to three separate cloud backups as soon as I upload them. And even though the backup happens behind the scenes, I never have to worry about it. The security measures framespik has in place—continuous monitoring and encryption—made me feel assured that my photos were safe and sound.
                        </p>
                        <p>
                        One of the best things about framespik is their retrieval system. If anything goes wrong and I lose a photo, all I have to do is reach out, and their team will quickly restore my images from one of the backups. It’s fast, easy, and incredibly efficient. For the first time, I felt that I had real control over my files and their security.
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
                  <div className="postbox__details-title-box pb-15">
                    <p> <span className="fw-bold"> How It Works: Simple, Secure, and Stress-Free</span>  
                    </p>
                  </div>
                  
                  

                  <div className="postbox__details-title-box pb-15">

                  <p>
                    <span className="fw-bold"> Upload Your Photos:
                    </span>
The first step is simple—just upload your photos to framespik platform. It’s seamless, automatic, and stress-free. I don’t have to worry about manually backing up each photo; everything is done for me.
                    </p>
                    <p>
                    <span className="fw-bold"> Backup Process:
                    </span>

                   As soon as my photos are uploaded, they’re immediately stored in three separate, secure cloud backups. It’s reassuring to know that no matter what happens to one of the backups, the other two will still be there to protect my memories.
                    </p>
                    <p>
                    <span className="fw-bold"> Ongoing Security:
                    </span>

                framespik doesn’t just leave things once the photos are uploaded. They continuously monitor my images, ensuring they’re encrypted, secure, and backed up according to my plan. This level of ongoing protection is exactly what I need to keep my photos safe.
                    </p>
                    <p>
                    <span className="fw-bold"> Retrieval When Needed:
                    </span>

                   If anything ever goes wrong and I lose a photo, I don’t panic anymore. I simply contact framespik, and their team will restore the images quickly from one of the backups. It’s as simple as that.
                    </p>
                  </div> 
                  <div className="postbox__details-title-box pb-15">
                    <p>
                    <span className="fw-bold">Conclusion: Never Worry About Losing Your Photos Again
                    </span>
<br></br>
                Since I’ve started using framespik I no longer stress over the possibility of losing my photos. The three-tier cloud backup system has provided me with the ultimate protection and peace of mind. I know that whether I’m working on a personal project or professional work, my photos are safe and secure.

    If you’re a photographer who has faced similar struggles—whether it’s poor poses, lack of client confidence, or difficulty visualizing the perfect shot—framespik Vision Camera can help you take your photoshoots to the next level. It not only simplifies the process but also empowers you to create beautiful, contextually rich images that capture the true essence of the moment. <br />

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
