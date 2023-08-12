import React from "react";
import { SignIn } from "./SignIn";
import "./SignIn.css";

export const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="div-2">
        <div className="nav-bar-wrapper">
          <PropertyDefaultWrapper className="property-default" property1="default" />
        </div>
        <SignIn className="signin-instance" />
      </div>
    </div>
  );
};
