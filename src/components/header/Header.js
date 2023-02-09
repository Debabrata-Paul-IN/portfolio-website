import React from "react";
import CTA from "./CTA";
import "./header.css";
import profilePic from "../../assets/profile_pic.png";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Debabrata Paul</h1>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="profile-pic">
            <img src={profilePic} alt="Profile-Pic" />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
  );
}
