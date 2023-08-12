import React from "react";
import { ScholarshipView } from "./ScholarshipView";
import "./ScholarshipsView.css";

export const Applicant = () => {
  return (
    <div className="applicant">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <ScholarshipView className="scholarship-view-details" />
          <BackScholarship className="back-scholarship-component" />
          <div className="nav-bar">
            <div className="overlap-group">
              <div className="text-wrapper-11">Scholar.ly</div>
              <div className="text-wrapper-12">Scholarships</div>
              <div className="text-wrapper-13">Recommendations</div>
              <div className="text-wrapper-14">About Us</div>
              <img
                className="scholarlylogocropped"
                alt="Scholarlylogocropped"
                src="scholarlylogocropped-removebg-preview-1.png"
              />
              <div className="text-wrapper-15">Home</div>
              <img className="log-out-button" alt="Log out button" src="log-out-button.png" />
              <img className="PROFILE-ICON" alt="Profile ICON" src="PROFILE-ICON.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
