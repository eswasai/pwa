import React, { useState } from "react";
import NiceSelect from "@/ui/nice-select";
import { toast } from "react-toastify";

const postComment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organizationCategory, setOrganizationCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [shortNote, setShortNote] = useState("");

  const validateForm = () => {
    if (!phoneNumber || !organizationCategory || !language || !shortNote) {
      toast.error("Please fill out all fields.");
      return false;
    }

    const phoneNumberRegex = /^[9876]\d{9}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      toast.error("Please enter a valid Indian phone number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = {
      organizationCategory: organizationCategory.value,
      language: language.value,
      phoneNumber,
      shortNote,
    };

    try {
      const response = await fetch(
        "https://app.framespik.com/api/query/appointment/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Your issue has been submitted successfully!");
        setPhoneNumber("");
        setOrganizationCategory("");
        setLanguage("");
        setShortNote("");
      } else {
        toast.error("Failed to submit your issue. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="box">
        <div className="row gx-20">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input
                type="text"
                className="inputText"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <span className="floating-label">Your Phone Number</span>
            </div>
          </div>
          <div className="col-4">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "", text: "Who You are?" },
                  { value: "P", text: "Photographer" },
                  { value: "E", text: "Event Organizer" },
                ]}
                defaultCurrent={0}
                onChange={setOrganizationCategory}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "", text: "Language?" },
                  { value: "E", text: "English" },
                  { value: "T", text: "Telugu" },
                  { value: "H", text: "Hindi" },
                ]}
                defaultCurrent={0}
                onChange={setLanguage}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-20">
              <textarea
                className="textareaText"
                value={shortNote}
                onChange={(e) => setShortNote(e.target.value)}
                required
              ></textarea>
              <span className="floating-label-2">
                Your Issue in Simple words...
              </span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-agree">
              <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  We will get back to you in the next 24 hours.
                </label>
              </div>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-btn">
              <button type="submit" className="tp-btn-inner">
                Submit Issue
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default postComment;
