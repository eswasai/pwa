import React, { useState } from "react";
import "@/assets/css/Manualcss/get-started/UserDetails.css";

const UserDetails = () => {
  return (
    <div className="userDetailsMainContainer">
      <div className="userDetailsTopArea">
        <div className="inputBoxArea">
          <p className="userDetailsHeading">Select Category</p>
          <select className="userDetailsSlelect" defaultValue="photographer">
            <option value="photographer">Photographer</option>
            <option value="event_manager">Event Manager</option>
          </select>
        </div>
        <div className="inputBoxArea">
          <p className="userDetailsHeading">Brand Name</p>
          <input
            className="userDetailsInput"
            type="text"
            placeholder="Your Brand Name"
          />
        </div>
        <div className="inputBoxArea">
          <p className="userDetailsHeading">Owner Name</p>
          <input
            className="userDetailsInput"
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
      </div>
      <div className="userDetailsTopArea">
        <div className="inputBoxArea">
          <p className="userDetailsHeading">Full Address</p>
          <input
            className="userDetailsInput"
            type="address"
            placeholder="Full Address"
            style={{ width: "45.5rem" }}
          />
        </div>
        <div className="inputBoxArea">
          <p className="userDetailsHeading">State</p>
          <select defaultValue="Telangana" className="userDetailsSlelect">
            <option value="AP">Andhra Pradesh</option>
            <option value="TS">Telangana</option>
            <option value="TN">Tamil Nadu</option>
            <option value="KA">Karnataka</option>
            <option value="MH">Maharashtra</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="DL">Delhi</option>
            <option value="WB">West Bengal</option>
            <option value="BR">Bihar</option>
            <option value="RJ">Rajasthan</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="OR">Odisha</option>
            <option value="PB">Punjab</option>
            <option value="GJ">Gujarat</option>
            <option value="KL">Kerala</option>
            <option value="HR">Haryana</option>
            <option value="JH">Jharkhand</option>
            <option value="SK">Sikkim</option>
            <option value="AS">Assam</option>
            <option value="AP">Arunachal Pradesh</option>
            <option value="CG">Chhattisgarh</option>
            <option value="GA">Goa</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="Puducherry">Puducherry</option>
            <option value="TN">Tripura</option>
            <option value="UP">Uttarakhand</option>
            <option value="WB">Uttar Pradesh</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="CH">Chandigarh</option>
            <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="LD">Lakshadweep</option>
          </select>
        </div>
      </div>
      <div className="userDetailsTopArea">
        <div className="inputBoxArea" style={{position: 'relative'}}>
          <p className="userDetailsHeading">Phone Number</p>
          <input
            className="userDetailsInput"
            type="text"
            placeholder="Ex: 7876xxxxxxx"
          />
          <div className="whatNumberRow">
            <input className="whatsappNumberMatchCheck" type="checkbox" />
            <p className="whatsappnumberText">This is my whatsapp number too!</p>
          </div>
        </div>
        <div className="inputBoxArea">
          <p className="userDetailsHeading">WhatsApp Number</p>
          <input
            className="userDetailsInput"
            type="text"
            placeholder="Ex: 7876xxxxxxx"
          />
        </div>
        <div className="inputBoxArea">
          <p className="userDetailsHeading">Email</p>
          <input
            className="userDetailsInput"
            type="email"
            placeholder="Youremail@gmail.com"
          />
        </div>
      </div>

      <div className="userDetailsButtonArea">
        <button className="userDetailsBtn">Next</button>
      </div>
    </div>
  );
};
export default UserDetails;
