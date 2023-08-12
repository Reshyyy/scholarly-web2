import React from "react";
import "./About.css";

export const ApplicantAboutus = () => {
  return (
    <div className="applicant-aboutus">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="nav-bar">
            <div className="overlap-group">
              <div className="text-wrapper">Scholar.ly</div>
              <div className="div">Scholarships</div>
              <div className="text-wrapper-2">Recommendations</div>
              <div className="text-wrapper-3">About Us</div>
              <img
                className="scholarlylogocropped"
                alt="Scholarlylogocropped"
                src="scholarlylogocropped-removebg-preview-1.png"
              />
              <div className="text-wrapper-4">Home</div>
              <img className="log-out-button" alt="Log out button" src="log-out-button.png" />
              <img className="PROFILE-ICON" alt="Profile ICON" src="PROFILE-ICON.png" />
            </div>
          </div>
          <img className="about-us" alt="About us" src="about-us.png" />
          <a className="text-wrapper-5" href="mailto:fbpage@gmail.com" rel="noopener noreferrer" target="_blank">
            fbpage@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
