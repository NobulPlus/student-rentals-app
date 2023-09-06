import React from "react";
import "./GetStarted.css";
import { NavLink } from "react-router-dom";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get your rent now</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            {/* <NavLink><a href="https://dev-egjd3yez0dphv7cs.us.auth0.com/u/login?state=hKFo2SAyTWpmdzNOLXRxNmVGTDg1XzZES0ItdF9lUWozNEZ5SaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFNveHo4cVB0bC10NloxVWZlcGd4cnV0aVFfRkpWUUtlo2NpZNkgelNFU0F6TGticDRXM2dGdEIwTFFsZUE2YjZuMFhHeDA">Get Started</a></NavLink> */}
            <div className="flexCenter button"><a href="imessage://34627524218&body=hi">Message now</a></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
