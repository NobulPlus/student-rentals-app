import React from "react";
import "./About.css";
import "../../components/styling/font-icons.css"
import "../../components/styling/plugins.css"
import "../../components/styling/style.css"
import "../../components/styling/responsive.css"

const About = () => {
    return (
        <div className="wrapper">
            {/* <!-- BREADCRUMB AREA START --> */}
            <div class="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "  data-bs-bg="../../../public/bg/14.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ltn__breadcrumb-inner">
                                <h1 class="page-title">About Us</h1>
                                <div class="ltn__breadcrumb-list">
                                    <ul>
                                        <li><a href="/"><span class="ltn__secondary-color"><img src= "https://cdn-icons-png.flaticon.com/512/609/609803.png" width="20rem"/></span> Home</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ABOUT US AREA START --> */}
            <div class="ltn__about-us-area pt-120--- pb-90 mt--30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="about-us-img-wrap about-img-left">
                                <img src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/others/13.png" alt="About Us Imagee"/>
                            </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                            <div class="about-us-info-wrap">
                                <div class="section-title-area ltn__section-title-2--- mb-20">
                                    <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
                                    <h1 class="section-title">Welcome to Rent <span>.</span></h1>
                                    <p>Your trusted partner in finding the perfect home. We are dedicated to making your apartment search a seamless and enjoyable experience.</p>
                                </div>
                                <ul class="ltn__list-item-half clearfix">
                                    <li>
                                        <img src="https://cdn-icons-png.flaticon.com/512/7142/7142163.png" width="25rem"/>
                                        Smart Home Design
                                    </li>
                                    <li>
                                        <img src="https://cdn-icons-png.flaticon.com/512/1372/1372170.png" width="25rem"/>
                                        Beautiful Scene Around
                                    </li>
                                    <li>
                                        <img src="https://cdn-icons-png.flaticon.com/512/8907/8907115.png" width="25rem" alt="" />
                                        Exceptional Lifestyle
                                    </li>
                                    <li>
                                        <img src="https://cdn-icons-png.flaticon.com/512/6907/6907438.png" width="25rem" alt="" />
                                        Complete 24/7 Security
                                    </li>
                                </ul>
                                <div class="ltn__callout bg-overlay-theme-05  mt-30">
                                    <p>Have questions or need assistance? Our team is here to help. Feel free to contact us at <a href="mailto:rili8704@gmail.com">rili8704@gmail.com</a></p>
                                </div>
                                <div class="btn-wrapper animated">
                                    <a href="/services" class="theme-btn-1 btn btn-effect-1">OUR SERVICES</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ABOUT US AREA END --> */}

            {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
            <div class="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-area ltn__section-title-2--- text-center">
                                <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                                <h1 class="section-title">Our Main Focus</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row ltn__custom-gutter--- justify-content-center">
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    {/* <!-- <span><i class="flaticon-house"></i></span> --> */}
                                    <img src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/icons/icon-img/21.png" alt="#"/>
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Lease an apartment</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    <a class="ltn__service-btn" href="/properties">Lease now &nbsp; <img src="https://cdn-icons-png.flaticon.com/512/10009/10009959.png" width="25rem" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                                <div class="ltn__feature-icon">
                                    {/* <!-- <span><i class="flaticon-house-3"></i></span> --> */}
                                    <img src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/icons/icon-img/22.png" alt="#"/>
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Rent an apartment</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    <a class="ltn__service-btn" href="/properties">Start now &nbsp; <img src="https://cdn-icons-png.flaticon.com/512/10009/10009959.png" width="25rem" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    {/* <!-- <span><i class="flaticon-deal-1"></i></span> --> */}
                                    <img src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/icons/icon-img/23.png" alt="#"/>
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Sell an apartment</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    <a class="ltn__service-btn" href="/properties">Sell now &nbsp; <img src="https://cdn-icons-png.flaticon.com/512/10009/10009959.png" width="25rem" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FEATURE AREA END --> */}\

            {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
            <div class="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                                <div class="coll-to-info text-color-white">
                                    <h1>Why choose us?</h1>
                                    <p>Our mission is to provide you with the best apartment rental solutions. As a student looking for a spacious apartment, we have a wide range of properties to suit your needs.</p>
                                </div>
                                <div class="btn-wrapper">
                                    <a class="btn btn-effect-3 btn-white" href="/properties">Explore Properties <img src="https://cdn-icons-png.flaticon.com/512/10009/10009959.png" width="25rem" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- CALL TO ACTION END --> */}
    </div>
    )
}

export default About