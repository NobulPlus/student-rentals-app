import React from "react";
import "./Services.css";
import "../../components/styling/font-icons.css"
import "../../components/styling/plugins.css"
import "../../components/styling/style.css"
import "../../components/styling/responsive.css"

const Services = () => {
    return (
        <div className="wrapper">
        {/* <!-- BREADCRUMB AREA START --> */}
            <div class="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "  data-bs-bg="img/bg/14.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ltn__breadcrumb-inner">
                                <h1 class="page-title">What We Do</h1>
                                <div class="ltn__breadcrumb-list">
                                    <ul>
                                        <li><a href="/"><span class="ltn__secondary-color"><img src= "https://cdn-icons-png.flaticon.com/512/609/609803.png" width="20rem"/></span> Home</a></li>
                                        <li>Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- BREADCRUMB AREA END --> */}

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
                                    <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Services</h6>
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
                                    <a href="/about" class="theme-btn-1 btn btn-effect-1">ABOUT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ABOUT US AREA END --> */}

            {/* <!-- SERVICE AREA START (Service 1) --> */}
            <div class="ltn__service-area section-bg-1 pt-115 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-area ltn__section-title-2--- text-center">
                                <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                                <h1 class="section-title">Our Core Services</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row  justify-content-center">
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    <span><img src="https://cdn-icons-png.flaticon.com/512/7142/7142163.png" width="30%"/></span>
                                    {/* <!-- <img src="img/icons/icon-img/21.png" alt="#"> --> */}
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Property Management</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    {/* <!-- <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> --> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    <span><i class="flaticon-mortgage"></i></span>
                                    {/* <!-- <img src="img/icons/icon-img/21.png" alt="#"> --> */}
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Mortgage Service</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    {/* <!-- <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> --> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    <span><i class="flaticon-operator"></i></span>
                                    {/* <!-- <img src="img/icons/icon-img/21.png" alt="#"> --> */}
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Consulting Service</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    {/* <!-- <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> --> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    <span><i class="flaticon-house-1"></i></span>
                                    {/* <!-- <img src="img/icons/icon-img/21.png" alt="#"> --> */}
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Home Buying</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    {/* <!-- <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> --> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    <span><i class="flaticon-house-3"></i></span>
                                    {/* <!-- <img src="img/icons/icon-img/21.png" alt="#"> --> */}
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Home Selling</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    {/* <!-- <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> --> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                <div class="ltn__feature-icon">
                                    <span><i class="flaticon-official-documents"></i></span>
                                    {/* <!-- <img src="img/icons/icon-img/21.png" alt="#"> --> */}
                                </div>
                                <div class="ltn__feature-info">
                                    <h3><a href="service-details.html">Escrow Services</a></h3>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    {/* <!-- <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- SERVICE AREA END --> */}
        </div>
    )
}

export default Services