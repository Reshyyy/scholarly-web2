import React from "react";
import { Scholarships } from "./Scholarships";
import "./Scholarships.css";

export const Applicant = () => {
  return (
    <div className="applicant">
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="div-2" />
          <FilterSidebar className="filter-sidebar-instance" />
          <Scholarship className="scholarship-component" />
          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-10">“No Essay” Nitro Scholarship</div>
              <ViewdetailsButton className="design-component-instance-node" />
              <div className="text-wrapper-11">₱50,000</div>
              <div className="text-wrapper-12">DEADLINE: July 4, 2023</div>
              <div className="text-wrapper-13">Category: Athletic Scholarship</div>
              <p className="to-be-eligible-for-2">
                To be eligible for the &#34;No Essay&#34; Nitro Scholarship you must be:A) A student who is currently
                enrolled as a high school senior or in an accredited college or university located within the United
                States;B) A parent who currently has a child enrolled in an accredited college or university located
                within the United States;C) A parent who currently has a...
              </p>
              <p className="text-wrapper-14">Location: White Rose, Yati Liloan, Cebu</p>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-4">
              <div className="text-wrapper-10">“No Essay” Nitro Scholarship</div>
              <ViewdetailsButton className="design-component-instance-node" />
              <div className="text-wrapper-11">₱50,000</div>
              <div className="text-wrapper-12">DEADLINE: July 4, 2023</div>
              <div className="text-wrapper-13">Category: Athletic Scholarship</div>
              <p className="to-be-eligible-for-2">
                To be eligible for the &#34;No Essay&#34; Nitro Scholarship you must be:A) A student who is currently
                enrolled as a high school senior or in an accredited college or university located within the United
                States;B) A parent who currently has a child enrolled in an accredited college or university located
                within the United States;C) A parent who currently has a...
              </p>
              <p className="text-wrapper-14">Location: White Rose, Yati Liloan, Cebu</p>
            </div>
          </div>
          <div className="search">
            <p className="text-wrapper-15">Find what youre looking for?</p>
            <div className="search-bar">
              <div className="overlap-group-3">
                <div className="text-wrapper-16">Search</div>
                <img className="search-interface" alt="Search interface" src="search-interface-symbol-1.png" />
              </div>
            </div>
          </div>
          <div className="recommended">
            <div className="text-wrapper-17">Scholar.ly Scholarships</div>
          </div>
          <div className="nav-bar">
            <div className="overlap-5">
              <div className="text-wrapper-18">Scholar.ly</div>
              <div className="text-wrapper-19">Scholarships</div>
              <div className="text-wrapper-20">Recommendations</div>
              <div className="text-wrapper-21">About Us</div>
              <img
                className="scholarlylogocropped"
                alt="Scholarlylogocropped"
                src="scholarlylogocropped-removebg-preview-1.png"
              />
              <div className="text-wrapper-22">Home</div>
              <img className="log-out-button" alt="Log out button" src="log-out-button.png" />
              <img className="PROFILE-ICON" alt="Profile ICON" src="PROFILE-ICON.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
