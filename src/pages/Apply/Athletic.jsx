import React from "react";
import { SubmitMy } from "./SubmitMy";
import "./Athletic.css";

export const ApplicantApply = () => {
  return (
    <div className="APPLICANT-APPLY">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="applicant">
            <div className="overlap-group">
              <div className="div">Scholar.ly</div>
              <div className="text-wrapper-2">Scholarships</div>
              <div className="text-wrapper-3">Recommendations</div>
              <div className="text-wrapper-4">About Us</div>
              <img
                className="scholarlylogocropped"
                alt="Scholarlylogocropped"
                src="scholarlylogocropped-removebg-preview-1.png"
              />
              <div className="text-wrapper-5">Home</div>
              <img className="log-out-button" alt="Log out button" src="log-out-button.png" />
              <img className="PROFILE-ICON" alt="Profile ICON" src="PROFILE-ICON.png" />
            </div>
          </div>
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="text-wrapper-6">Highest Educational Attainment</div>
            <div className="text-wrapper-7">Current School or Institution</div>
            <div className="text-wrapper-8">Intended Field of Study</div>
            <p className="p">GPA from Last Semester of Study:</p>
            <div className="text-wrapper-9">Atheletic Rewards and Honors:</div>
            <p className="why-do-you-believe">
              <span className="span">Why do you believe you deserve this scholarship? </span>
              <span className="text-wrapper-10">(at least 500 words)</span>
            </p>
            <p className="describe-a">
              <span className="span">Describe a challenging situation you have faced and how you overcame it </span>
              <span className="text-wrapper-10">(at least 500 words)</span>
              <span className="span">.</span>
            </p>
            <p className="text-wrapper-11">Additional documents (Recommendations, Certificates, Achievements)</p>
            <div className="text-wrapper-12">Household Income:</div>
            <p className="text-wrapper-13">Upload your ITR (Income Tax Return)</p>
            <p className="text-wrapper-14">Upload Form 137 and Form 138</p>
            <div className="text-wrapper-15">Upload file...</div>
            <div className="text-wrapper-16">Applicant Information</div>
            <div className="text-wrapper-17">Applicant Information</div>
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <SubmitMy className="submit-my-application-component" />
            <div className="rectangle-10" />
            <div className="text-wrapper-18">Nitro Scholarship</div>
            <div className="text-wrapper-19">Upload file...</div>
            <div className="text-wrapper-20">Upload file...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
