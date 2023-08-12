import React from "react";
import { NavBar } from "./NavBar";
import "./HomePage.css";

export const ApplicantHomePage = () => {
  return (
    <div className="applicant-home-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="div">Welcome Juan!</div>
          <div className="home-title-card">
            <div className="overlap-group">
              <img className="image" alt="Image" src="image-1.png" />
              <p className="p">Complete Your Profile To Apply For Scholarships Now!</p>
              <div className="group">
                <div className="overlap-group-2">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-2">Go to profile</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-3">Newly Added Scholarships</div>
          <div className="newly-added">
            <div className="overlap-2">
              <div className="text-wrapper-4">Deadline: June 28, 2024</div>
              <div className="overlap-group-3">
                <p className="location-university">
                  Location: University of Cebu - Lapu-Lapu &amp; Mandaue
                  <br />
                  Looc, Mandaue City
                </p>
                <p className="location-university-2">
                  Location: University of Cebu - Lapu-Lapu &amp; Mandaue
                  <br />
                  Looc, Mandaue City
                </p>
              </div>
              <div className="text-wrapper-5">View Details</div>
              <p className="STEM-excellence">
                <span className="span">STEM Excellence Scholarship</span>
                <span className="text-wrapper-6">: </span>
                <span className="text-wrapper-7">
                  Are you passionate about science, technology, engineering, or mathematics? This scholarship offers
                  financial assistance to outstanding students pursuing a degree in a STEM-related field. Don&#39;t miss
                  your chance to apply!
                </span>
              </p>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <p className="location-university-3">
                Location: University of Cebu - Lapu-Lapu &amp; Mandaue
                <br />
                Looc, Mandaue City
              </p>
              <div className="text-wrapper-8">Deadline: June 28, 2024</div>
              <div className="text-wrapper-5">View Details</div>
              <p className="STEM-excellence-2">
                <span className="span">STEM Excellence Scholarship</span>
                <span className="text-wrapper-6">: </span>
                <span className="text-wrapper-7">
                  Are you passionate about science, technology, engineering, or mathematics? This scholarship offers
                  financial assistance to outstanding students pursuing a degree in a STEM-related field. Don&#39;t miss
                  your chance to apply!
                </span>
              </p>
            </div>
          </div>
          <div className="latest-updates">
            <div className="overlap-3">
              <img className="line" alt="Line" src="line-10.svg" />
              <div className="updates">
                <div className="update-card">
                  <div className="overlap-group-4">
                    <p className="text-wrapper-9">
                      Join our free webinar on July 28, 2023. Learn expert strategies for maximizing your scholarship
                      opportunities and securing financial aid for your education.
                    </p>
                    <div className="text-wrapper-10">Scholar.ly Webinar</div>
                  </div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-4">
                  <div className="text-wrapper-11">LATEST UPDATES</div>
                  <img className="MEGAPHONE-PNG" alt="Megaphone PNG" src="MEGAPHONE-PNG.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="newly-added-2">
            <div className="overlap-5">
              <p className="location-university-4">
                Location: University of Cebu - Lapu-Lapu &amp; Mandaue
                <br />
                Looc, Mandaue City
              </p>
              <div className="text-wrapper-12">Deadline: June 28, 2024</div>
              <div className="text-wrapper-13">View Details</div>
              <p className="STEM-excellence-3">
                <span className="text-wrapper-14">STEM Excellence Scholarship</span>
                <span className="text-wrapper-15">
                  : Are you passionate about science, technology, engineering, or mathematics? This scholarship offers
                  financial assistance to outstanding students pursuing a degree in a STEM-related field. Don&#39;t miss
                  your chance to apply!
                </span>
              </p>
            </div>
          </div>
          <NavBar
            PROFILEIcon="PROFILE-ICON-3.png"
            PROFILEIconClassName="nav-bar-3"
            className="nav-bar-instance"
            divClassName="design-component-instance-node"
            logOutButton="log-out-button-2.png"
            logOutButtonClassName="nav-bar-2"
          />
          <div className="nav-bar-4">
            <div className="overlap-6">
              <div className="text-wrapper-16">Scholar.ly</div>
              <div className="text-wrapper-17">Scholarships</div>
              <div className="text-wrapper-18">Recommendations</div>
              <div className="text-wrapper-19">About Us</div>
              <img
                className="scholarlylogocropped"
                alt="Scholarlylogocropped"
                src="scholarlylogocropped-removebg-preview-1.png"
              />
              <div className="text-wrapper-20">Home</div>
              <img className="img" alt="Log out button" src="image.png" />
              <img className="PROFILE-ICON-2" alt="Profile ICON" src="PROFILE-ICON-2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
