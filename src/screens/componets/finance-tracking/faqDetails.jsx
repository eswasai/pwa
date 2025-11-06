import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnswerQuestion from "@/common/answer-question";

import answer_question_data from "@/data/answer-question-data";

import img from "@/assets/img/faq/faq-1.png";

const faq_content = {
  sub_title: "Support",
  title: (
    <>
      Frequently <br /> Asked Questions
    </>
  ),
  description: (
    <>
      Most frequently asked <br /> questions by customer service.
    </>
  ),
  btn_text: "Get in Touch",
};
const { sub_title, title, description, btn_text } = faq_content;

const FinanceFaq = ({ style_service }) => {
  return (
    <>
      <div className="tp-faq-area pt-10 pb-60 fix">
        <div className="container">
          <div className="row">
            <div
              className={`col-xl-6 col-lg-6 ${
                style_service && "wow tpfadeLeft"
              }`}
              data-wow-duration={style_service && ".9s"}
              data-wow-delay={style_service && ".4s"}
            >
              <div className="tp-faq-left-wrapper p-relative">
                <div
                  className={`tp-faq-section-box ${
                    style_service && "tp-inner-font tp-inner-faq-box"
                  } pb-20`}
                >
                  <h4
                    className={`${
                      style_service
                        ? "inner-section-subtitle"
                        : "tp-section-subtitle-2"
                    }`}
                  >
                    {sub_title}
                  </h4>
                  <h3
                    className={`${
                      style_service ? "tp-section-title" : "tp-section-title-lg"
                    }`}
                  >
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
                <div className="tp-faq-btn">
                  <Link
                    className={`${
                      style_service
                        ? "tp-btn-inner tp-btn-hover alt-color-black"
                        : "tp-btn-green"
                    } `}
                    href="/contact"
                  >
                    {btn_text}
                  </Link>
                </div>
                <div
                  className="tp-faq-img"
                  data-parallax='{"x": -50, "smoothness": 30}'
                >
                  <Image src={img} alt="" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <AnswerQuestion
                data={answer_question_data
                  .filter((item) => item.category == "Finance Tracking")
                  .slice(1, 7)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceFaq;
