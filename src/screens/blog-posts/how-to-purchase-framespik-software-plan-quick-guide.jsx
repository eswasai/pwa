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
                    <h4 className="postbox__details-title">
                    Follow These Steps to Download
                    </h4>
                    <div className="postbox__details-checkmark">
                    <ul>
                      <li>
                        <i className="fal fa-check"></i>Download the software.
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Available on Windows,Linux,Mac.
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Launch the software.
                      </li>
                      
                    </ul>
                  </div>
                    <p>
                      
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
                    <h4 className="postbox__details-title">
                    Download the software.
                    </h4>
                    <p>
                    Installing software in Framespik is a pretty straightforward process, but getting started with the right download can make all the difference. First things first, you’ll want to head over to the official Framespik website. It’s important to download software directly from the source to avoid any potential security issues. Navigate to the download page, and you’ll typically see a prominent link to get started.
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
                  <div className="postbox__details-title-box pb-15">
                    <p> <span className="fw-bold"> For Windows:
                    </span>
                    
                      Locate the installer file (usually .exe format) in your Downloads folder or the location where you saved it.
                      Right-click on the installer and select "Run as Administrator" to ensure you have the necessary privileges.
                      Follow the on-screen instructions to complete the installation.
                    </p>
                  </div>
                  
                  <div className="postbox__details-title-box pb-15">
                    <p>
                    <span className="fw-bold"> For MacOS:
                    </span>

                  Open the downloaded .dmg file.
                  Drag the FRAMSPIK icon to your Applications folder.
                  You may need to adjust security settings if macOS prevents you from running software from unidentified developers.
                    </p>
                  </div>

                  <div className="postbox__details-title-box pb-15">
                    <p>
                    <span className="fw-bold"> For Linux:
                    </span>

                  Check Availability: Determine if the software is available in your Linux distribution's package manager or as a universal package like Snap or Flatpak. <br />

    Download and Install: Use the package manager, Snap, Flatpak, or download the installation file (e.g., .deb, .rpm) from the official website and follow the provided instructions. <br />

    Verify and Launch: Confirm the installation by searching for the software in the application menu or launching it via the terminal.
                    </p>
                  </div> 
                  <h4 className="postbox__details-title">
                    Launch the software.
                    </h4>
                    <p>Once installed, you can find the software in your Applications folder or use Spotlight search to locate and launch it.</p>
                    <br />
                  <div className="postbox__details-qoute mb-30">
                    <blockquote className="d-flex align-items-start">
                      <div className="postbox__details-qoute-icon">
                        <DoubleSemicolon />
                      </div>
                      <div className="postbox__details-qoute-text">
                        <p>
                          “At @framespik, the team is remarkably passionate, informed, and always there to lend a hand.
                        </p>
                        <span>Team Framespik.</span>
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
