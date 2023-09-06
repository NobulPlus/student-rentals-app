import React from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./About.css";
import "./font-icons.css"
// import "./plugins.css"
import "./style.css"
import "./responsive.css"

const About = () => {
    return (
        <div className="wrapper">
            {/* <!-- BREADCRUMB AREA START --> */}
            <div class="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "  data-bs-bg="./img/bg/14.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ltn__breadcrumb-inner">
                                <h1 class="page-title">About Us</h1>
                                <div class="ltn__breadcrumb-list">
                                    <ul>
                                        <li><a href="index.html"><span class="ltn__secondary-color"><i class="fas fa-home"></i></span> Home</a></li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About