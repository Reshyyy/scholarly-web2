import React from "react";

import { ViewdetailsButton } from "./ViewdetailsButton";
import "./Recommendations.css";

export const Applicant = () => {
  return (
    <div className="applicant">
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="recommended">
            <div className="text-wrapper-6">Recommended Scholarships</div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-7">Scholar.ly</div>
              <div className="text-wrapper-8">Scholarships</div>
              <div className="text-wrapper-9">Recommendations</div>
              <div className="text-wrapper-10">About Us</div>
              <img
                className="scholarlylogocropped"
                alt="Scholarlylogocropped"
                src="scholarlylogocropped-removebg-preview-1.png"
              />
              <div className="text-wrapper-11">Home</div>
              <img className="log-out-button" alt="Log out button" src="log-out-button.png" />
              <img className="PROFILE-ICON" alt="Profile ICON" src="PROFILE-ICON.png" />
            </div>
          </div>
          <FilterSidebar className="filter-sidebar-instance" overlapClassName="design-component-instance-node" />
          <div className="scholarship">
            <div className="overlap-3">
              <div className="text-wrapper-12">“No Essay” Nitro Scholarship</div>
              <ViewdetailsButton className="viewdetails-button-instance" />
              <div className="text-wrapper-13">₱50,000</div>
              <div className="text-wrapper-14">DEADLINE: July 4, 2023</div>
              <div className="text-wrapper-15">Category: Athletic Scholarship</div>
              <p className="to-be-eligible-for">
                To be eligible for the &#34;No Essay&#34; Nitro Scholarship you must be:A) A student who is currently
                enrolled as a high school senior or in an accredited college or university located within the United
                States;B) A parent who currently has a child enrolled in an accredited college or university located
                within the United States;C) A parent who currently has a...
              </p>
              <p className="p">Location: White Rose, Yati Liloan, Cebu</p>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-4">
              <div className="text-wrapper-12">“No Essay” Nitro Scholarship</div>
              <ViewdetailsButton className="viewdetails-button-instance" />
              <div className="text-wrapper-13">₱50,000</div>
              <div className="text-wrapper-14">DEADLINE: July 4, 2023</div>
              <div className="text-wrapper-15">Category: Athletic Scholarship</div>
              <p className="to-be-eligible-for">
                To be eligible for the &#34;No Essay&#34; Nitro Scholarship you must be:A) A student who is currently
                enrolled as a high school senior or in an accredited college or university located within the United
                States;B) A parent who currently has a child enrolled in an accredited college or university located
                within the United States;C) A parent who currently has a...
              </p>
              <p className="p">Location: White Rose, Yati Liloan, Cebu</p>
            </div>
          </div>
          <div className="scholarship-2">
            <div className="overlap-5">
              <div className="text-wrapper-12">“No Essay” Nitro Scholarship</div>
              <ViewdetailsButton className="viewdetails-button-instance" />
              <div className="text-wrapper-13">₱50,000</div>
              <div className="text-wrapper-14">DEADLINE: July 4, 2023</div>
              <div className="text-wrapper-15">Category: Athletic Scholarship</div>
              <p className="to-be-eligible-for">
                To be eligible for the &#34;No Essay&#34; Nitro Scholarship you must be:A) A student who is currently
                enrolled as a high school senior or in an accredited college or university located within the United
                States;B) A parent who currently has a child enrolled in an accredited college or university located
                within the United States;C) A parent who currently has a...
              </p>
              <p className="p">Location: White Rose, Yati Liloan, Cebu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
