import React from "react";

const termsAndConditionsContent = {
  feature_list: [
    <>Terms of Service are subject to change without prior notice.</>,
    <>
      Users must comply with all applicable laws and regulations. <br />
      Violation may result in account suspension or termination.
    </>,
    <>Framespik reserves the right to modify or discontinue services.</>,
  ],
  title: "Framespik Terms and Conditions",
  introduction: `
    Welcome to Framespik! These Terms and Conditions govern your use of our website, desktop applications, web applications, mobile applications, and client applications, accessible at www.framespik.com. By using Framespik, you agree to abide by these terms. If you disagree, please discontinue using our services.
  `,
  intellectualPropertyRights: `
    Framespik and its licensors own all intellectual property rights and materials on the website unless otherwise specified. Users are granted a limited license to access and use the content solely for personal and non-commercial purposes.
  `,
  featuresOverview: [
    <>
      AI Face Recognition and Image Delivery: Advanced AI for accurate
      recognition and seamless delivery.
    </>,
    <>
      Photo Selection: Tools to select, organize, and manage photos efficiently.
    </>,
    <>Dynamic Webpage UI: Easily customize your webpage UI anytime.</>,
    <>Cloud Storage: Scalable storage options ranging from 500GB to 2TB.</>,
    <>
      Business Management Tools: Features for payment management, sending
      reminders, and work updates to streamline operations.
    </>,
  ],

  usagePolicy: `
    Framespik promotes fair and responsible usage to ensure a positive experience for all users:
    - Each project should be used for a single event and shared appropriately.
    - Avoid using the gallery as a storage dump; add meaningful photos.
    - Maintain active engagement by using at least one project every two months.
    - Adhere to the fair usage policy to prevent account dormancy or suspension.
  `,
  refundPolicy: `
    Framespik offers a 30-day money-back guarantee for dissatisfied customers. Refund requests can be submitted to our support team within 30 days of purchase. Refunds may take up to 20 days to process and reflect in your account.
  `,
  governingLaw: `
    These Terms and Conditions are governed by the laws of India, specifically the state of Telangana, with Hyderabad as the jurisdiction for resolving disputes. Legal matters shall be addressed exclusively in the courts of Hyderabad, Telangana, India.
  `,
};

const {
  feature_list,
  title,
  introduction,
  intellectualPropertyRights,
  featuresOverview,
  usagePolicy,
  refundPolicy,
  governingLaw,
} = termsAndConditionsContent;

const TermsDiscription = () => {
  return (
    <>
      <div className="team-details-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="team-details-wrapper">
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-12 text-center">
                    <h1>{title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="team-details-text-wrapper pt-40">
                <div className="team-details-text">
                  <h4 className="team-details-title">Introduction</h4>
                  <p>{introduction}</p>
                </div>
                <div className="team-details-text">
                  <h4 className="team-details-title">
                    Intellectual Property Rights
                  </h4>
                  <p>{intellectualPropertyRights}</p>
                </div>
                <div className="team-details-text">
                  <div className="team-details-feature-list">
                    <h4 className="team-details-title">Features Overview</h4>
                    <ul>
                      {featuresOverview.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="team-details-text">
                  <h4 className="team-details-title">Usage Policy</h4>
                  <p>{usagePolicy}</p>
                </div>
                <div className="team-details-feature-list">
                  <h4 className="team-details-title">Key Features</h4>
                  <ul>
                    {feature_list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="team-details-text">
                  <h4 className="team-details-title">Refund Policy</h4>
                  <p>{refundPolicy}</p>
                </div>
                <div className="team-details-text">
                  <h4 className="team-details-title">Governing Law</h4>
                  <p>{governingLaw}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsDiscription;
