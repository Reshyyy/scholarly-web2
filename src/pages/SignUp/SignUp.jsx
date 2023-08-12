import React from "react";
import { SignUp } from "./SignUp";
import "./SignUp.css";

export const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <NavBarVariant className="nav-bar-variant2" />
          <SignUp className="sign-up-instance" />
        </div>
      </div>
    </div>
  );
};
