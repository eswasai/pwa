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
                      Streamline Your Payment Tracking with Automated Reminders
                    </h1>
                    <p>
                     managing payments can often be one of the most time-consuming and stressful parts of the job. From keeping track of overdue invoices to sending reminders, it’s easy for payment management to slip through the cracks. That’s where our automated payment tracking and reminder system comes in! With the ability to track payments, send automated alerts, and stay organized, managing your finances has never been easier.
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
                    <h3>Seamless Payment Tracking</h3>

                    <p>
                     One of the biggest challenges for event managers and photographers is ensuring that all payments are tracked efficiently. Our system allows you to monitor payments effortlessly, ensuring you don’t miss any transactions or deadlines. Whether you’re tracking advance deposits or final balances, you can stay on top of your financial obligations without the hassle.
                    </p>

                  </div>
                  <div>
                    <h3>Automated Payment Alerts</h3>

                    <p>
                      Timely payments are crucial to maintaining smooth business operations. Our automated payment reminder system sends alerts directly to clients via email or SMS, ensuring they are aware of upcoming dues or pending payments. This removes the burden from you to chase clients for overdue payments and helps your business maintain a consistent cash flow.
                    </p>

                  </div>
                  <div>
                    <h3>Organized Invoicing</h3>

                    <p>
                      Clear and transparent invoicing is essential to maintaining professional relationships with clients. With our system, you can easily generate and share invoices for both advance payments and remaining balances. This organized approach ensures that your financial records are always accessible and up-to-date, reducing the risk of miscommunication or errors.
                    </p>

                  </div>
                  <div>
                    <h3>Advance Payment Management</h3>

                    <p>
                     For event managers and photographers, it’s essential to secure advance payments before beginning any work. Our system allows you to record and track initial deposits, ensuring that your finances are protected before an event is executed. You can also send reminders for any outstanding balances, keeping everything on track.
                    </p>

                  </div>
                   
                                    
                 
                  <div>
                    <h3>Transparent Payment Updates</h3>

                    <p>
                      Transparency with clients is key to building trust and avoiding misunderstandings. With our system, you can provide clients with up-to-date information about their payment status. Clients will always be in the loop about what has been paid and what remains, making the payment process smoother for both parties.
                    </p>
                    
                   
                  </div>
                  <div>
                    <h3>Easy Payment Requests</h3>

                    <p>
                      In addition to payment reminders, our system also allows you to send payment requests via email or SMS. Simply share the payment link or your account details, and your clients can make payments with ease. You can also convert payment links into QR codes, making it even easier for your clients to pay on the go.
                    </p>

                    <p>Say goodbye to the stress of payment management. With our automated payment reminders and tracking system, you can stay on top of all your payments, avoid overdue transactions, and ensure smooth financial workflows for every project. Whether you're an event manager, photographer, or any other business owner, our payment solutions provide the tools you need to manage your finances efficiently and effortlessly.</p>
                    
                   
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
                   <p className="fw-bold">Stay On Track and Never Miss a Payment with Automated Reminders and Tracking</p>  
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
