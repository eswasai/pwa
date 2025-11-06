import { useState, useEffect } from "react";

import Link from "next/link";
import AnswerQuestion from "@/common/answer-question";
import VideoBox from "./videoBox";
import PostComment from "./postComment";

import answer_question_data from "../../../data/answer-question-data";

const uniqueCategories = Array.from(
  new Set(answer_question_data.map((item) => item.category))
);

// Step 2: Map over unique categories and create a new array with unique IDs
const formattedCategories = uniqueCategories.map((category, index) => ({
  id: index + 1,
  category: category,
}));

const service_details_content = {
  category_title: "Service Category",
  overview_title: "Service Overview",
  overview_des: (
    <>
      Framespik is an innovative SaaS platform tailored to meet the unique needs
      of photographers and event organizers. Our comprehensive solution empowers
      professionals to streamline their workflow, enhance client experiences,
      and strengthen their brand identity. By integrating cutting-edge
      technology with practical business tools, Framespik simplifies every
      aspect of event management, from client onboarding to final deliverables.
    </>
  ),
  overview_list: [
    <>
      Custom Branding Solutions: <br />{" "}
      <span>
        Create personalized websites and mobile apps to showcase your portfolio,
        manage bookings, and strengthen your brand identity.
      </span>
    </>,
    <>
      Memory Page for Events: <br />{" "}
      <span>
        A dedicated digital space for each event, featuring albums, videos,
        invitation cards, and a 3D album preview.
      </span>
    </>,
    <>
      Secure Data Management: <br />{" "}
      <span>
        Automatic backups with customizable retention periods, free 1TB storage,
        and scalable options for extended storage needs.
      </span>
    </>,
    <>
      Event Management Tools: <br />{" "}
      <span>
        Apps designed for seamless uploads, client onboarding, payment tracking,
        and team coordination.
      </span>
    </>,
    <>
      Specialized Tools: <br />{" "}
      <span>
        AI-powered features for image selection, compression, watermarking, and
        innovative tools like Vision Camera and 3D Visual Album.
      </span>
    </>,
    <>
      Advanced Client Interaction: <br />{" "}
      <span>
        CRM tools for portfolio showcases, payment reminders, and durable NFC
        cards for secure data sharing.
      </span>
    </>,
    <>
      Scalable Integrations: <br />{" "}
      <span>
        Seamless compatibility with popular storage providers and custom domain
        hosting for personalized branding.
      </span>
    </>,
  ],

  challange_titel: "Why Framespik?",
  challange_des: (
    <>
      Framespik combines affordability, scalability, and advanced technology
      into a single platform, helping photographers focus on their creative work
      while we handle the operational challenges. Our intuitive design and
      robust functionality make Framespik the go-to solution for photography
      professionals looking to elevate their business and exceed client
      expectations.
    </>
  ),
};
const {
  category_title,
  categorys = formattedCategories,
  overview_title,
  overview_des,
  overview_list,
  challange_titel,
  challange_des,
} = service_details_content;

const faqDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("Photo Selection");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(
      answer_question_data.filter(
        (question) => question.category == selectedCategory
      )
    );
  }, [selectedCategory]);

  return (
    <>
      <div className="sv-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="sv-details-widget">
                <div className="sv-details-category mb-30">
                  <div className="sv-details-category-title">
                    <h4 className="sv-details-title-sm">{category_title}</h4>
                  </div>
                  <div className="sv-details-category-list">
                    <ul>
                      {categorys.map((item, i) => (
                        <li
                          key={i}
                          className={
                            item.category == selectedCategory ? "active" : ""
                          }
                        >
                          <Link
                            href={`#${item.category}`}
                            onClick={() => {
                              setSelectedCategory(item.category);
                            }}
                          >
                            <span>{item.category}</span>
                            <i className="fal fa-angle-right"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="sv-details-wrapper">
                <div className="tp-faq-area pt-50 mb-50">
                  <div className="container p-0">
                    <div className="row g-0">
                      <div className="col-xl-12">
                        <h4 className="sv-details-title">
                          Any Questions find here.
                        </h4>
                        <AnswerQuestion style={true} data={questions} />
                      </div>
                    </div>
                  </div>
                </div>
                <VideoBox />
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">{overview_title}</h4>
                  <p>{overview_des}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Going Beyond the Usual
                  </h4>
                  <ul>
                    {overview_list.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">{challange_titel}</h4>
                  <p>{challange_des}</p>
                </div>
                <div className="sv-details-text-2 pt-10">
                  <h4 className="sv-details-text-title">
                    {"Book an appointment"}
                  </h4>
                  <PostComment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default faqDetails;
