import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import { toast } from "react-toastify";

var stateChoices = [
  { value: "", text: "Select Your State" },
  { value: "AN", text: "Andaman and Nicobar Islands" },
  { value: "AP", text: "Andhra Pradesh" },
  { value: "AR", text: "Arunachal Pradesh" },
  { value: "AS", text: "Assam" },
  { value: "BR", text: "Bihar" },
  { value: "CH", text: "Chandigarh" },
  { value: "CT", text: "Chhattisgarh" },
  { value: "DL", text: "Delhi" },
  { value: "DN", text: "Dadra and Nagar Haveli" },
  { value: "GA", text: "Goa" },
  { value: "GJ", text: "Gujarat" },
  { value: "HP", text: "Himachal Pradesh" },
  { value: "HR", text: "Haryana" },
  { value: "JH", text: "Jharkhand" },
  { value: "JK", text: "Jammu and Kashmir" },
  { value: "KA", text: "Karnataka" },
  { value: "KL", text: "Kerala" },
  { value: "LD", text: "Lakshadweep" },
  { value: "MH", text: "Maharashtra" },
  { value: "ML", text: "Meghalaya" },
  { value: "MN", text: "Manipur" },
  { value: "MP", text: "Madhya Pradesh" },
  { value: "MZ", text: "Mizoram" },
  { value: "NL", text: "Nagaland" },
  { value: "OR", text: "Odisha" },
  { value: "PB", text: "Punjab" },
  { value: "PY", text: "Puducherry" },
  { value: "RJ", text: "Rajasthan" },
  { value: "SK", text: "Sikkim" },
  { value: "TN", text: "Tamil Nadu" },
  { value: "TR", text: "Tripura" },
  { value: "TS", text: "Telangana" },
  { value: "UK", text: "Uttarakhand" },
  { value: "UP", text: "Uttar Pradesh" },
  { value: "WB", text: "West Bengal" },
];

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reason, setReason] = useState("");
  const [shortNote, setShortNote] = useState("");
  const [state, setState] = useState("");

  const validateForm = () => {
    if (!name || !email || !phoneNumber || !reason || !shortNote || !state) {
      toast.error("Please fill out all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    const phoneNumberRegex = /^[9876]\d{9}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = {
      name,
      email,
      phoneNumber,
      reason: reason.value,
      state: state.value,
      shortNote,
    };

    try {
      const response = await fetch(
        "https://app.framespik.com/api/query/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Your request has been submitted successfully!");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setShortNote("");
      } else {
        toast.error("Failed to submit your request. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                className="inputText"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-6">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                className="inputText"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-6">
            <div className="postbox__comment-input mb-35">
              <input
                type="text"
                className="inputText"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <span className="floating-label">Phone Number</span>
            </div>
          </div>
          <div className="col-6">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "", text: "Your Inquiry about" },
                  { value: "S", text: "Subscription" },
                  { value: "B", text: "Business" },
                  { value: "T", text: "Software" },
                  { value: "O", text: "Other" },
                ]}
                defaultCurrent={0}
                onChange={setReason}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={stateChoices}
                defaultCurrent={0}
                onChange={setState}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                className="textareaText"
                value={shortNote}
                onChange={(e) => setShortNote(e.target.value)}
                required
              ></textarea>
              <span className="floating-label-2">Message...</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button className="submit-btn w-100" type="submit">
                Send your Request
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
