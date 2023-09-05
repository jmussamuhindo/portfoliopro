import React from "react";
import "./Profile.css"
import ScrollService from "../../../utilities/ScrollService";

export default function () {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/profile.php?id=100002794027900">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/justin-muhindo-mussa-0a271b255/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/muhijust05/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCC2t7XEkt-l62UowPboBEBA">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/JustinMuhindoM1">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Mussa Justin</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <span className="profile-role-tagline">
              "Coding the Future: Crafting Solutions, One Line at a Time."
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() =>ScrollService.scrollHandler.scrollToHireMe()} 
            > Hire Me </button>
            <a href="myCV.pdf" download="Justin myCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
