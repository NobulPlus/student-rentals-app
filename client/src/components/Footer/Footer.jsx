import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./unnamed.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Ireland</span>
          <div className="flexCenter f-menu">
            <span><NavLink to="/properties">Property</NavLink></span>
            <span>Services</span>
            <span><NavLink to="/about-us">About Us</NavLink></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
