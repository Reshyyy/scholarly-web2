import React from "react";
import { BackScholarship } from "./BackScholarship";
import { ScholarshipView } from "./ScholarshipView";
import "./RecommendationsView.css";

export const Applicant = () => {
  return (
    <div className="applicant">
      <div className="overlap-wrapper">
        <div className="overlap">
          <BackScholarship
            className="back-scholarship-component"
            freeIconArrowLeft="image.png"
            recommendedClassName="back-scholarship-instance"
            text="Recommendations"
          />
          <ScholarshipView applyButton="apply-button-2.png" className="recommended-view" />
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="div">Scholar.ly</div>
              <div className="text-wrapper-11">Scholarships</div>
              <div className="text-wrapper-12">Recommendations</div>
              <div className="text-wrapper-13">About Us</div>
              <img
                className="scholarlylogocropped"
                alt="Scholarlylogocropped"
                src="scholarlylogocropped-removebg-preview-1.png"
              />
              <div className="text-wrapper-14">Home</div>
              <img className="log-out-button" alt="Log out button" src="log-out-button.png" />
              <img className="PROFILE-ICON" alt="Profile ICON" src="PROFILE-ICON.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
