import React from "react";

const team_details_content = {
  feature_list: [
    <>
      Your privacy is important to Framespik, and we are committed to protecting
      it.
    </>,
    <>
      Framespik collects and processes user data in compliance with applicable
      privacy laws and regulations.
    </>,
    <>
      Users can review, modify, or delete their personal information at any
      time.
    </>,
  ],
  title: "Framespik Privacy Policy",
  privacy_info_1: (
    <>
      Framespik collects personal data, such as email addresses and usage
      statistics, to improve our services and provide a better user experience.
      We do not sell, trade, or share your information with third parties
      without your explicit consent, except as required by law or to provide our
      services.
    </>
  ),
  privacy_info_2: (
    <>
      We use industry-standard security measures to protect your data from
      unauthorized access, loss, or misuse. However, no method of transmission
      over the internet or electronic storage is entirely secure. By using
      Framespik, you acknowledge and agree to these risks.
    </>
  ),
  privacy_info_3: (
    <>
      You have the right to access, correct, or delete your personal
      information. For any concerns or inquiries regarding your privacy, you can
      contact our support team. Updates to this Privacy Policy will be
      communicated through our website or via email notifications.
    </>
  ),
};
const { feature_list, title, privacy_info_1, privacy_info_2, privacy_info_3 } =
  team_details_content;

const PolicyDiscription = () => {
  return (
    <>
      <div className="team-details-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="team-details-wrapper">
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-12 text-center">
                    <h1>Privacy Policy</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="team-details-text-wrapper pt-40">
                <div className="team-details-text">
                  <h4
                    className="team-details-title"
                    style={{ fontSize: "1rem", marginBottom: "0%" }}
                  >
                    {title}
                  </h4>
                  <p>{privacy_info_1}</p>
                </div>
                <div className="team-details-feature-list">
                  <ul>
                    {feature_list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p>{privacy_info_2}</p>
                  <p>{privacy_info_3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyDiscription;
