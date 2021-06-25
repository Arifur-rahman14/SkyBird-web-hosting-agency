import React from "react";
import "./AboutUs.css";
import about2 from "../../images/about-2.png";

const AboutUs = () => {
    return (
        <>
            {/* Total Service List */}
            <div className="total-service-bg">
                <div className="container">
                    <div className="row total-service">
                        <div className="col-md-4">
                            <div className="total-service-content">
                                <h2>Total Customer</h2>
                                <h5>1008+</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="total-service-content">
                                <h2>Total Developed Site</h2>
                                <h5>140+</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="total-service-content">
                                <h2>Total Partner's</h2>
                                <h5>80+</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* About US Section */}
            <section className="pb-5 mb-5">
                <div className="container">
                    <div className="tittle mb-5">
                        <h2 className="about">About Us</h2>
                        <div className="tittle-description">
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="about-image mb-5">
                                <img
                                    className="img-fluid image-2"
                                    src={about2}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-content">
                                <h5>24/7 Service</h5>
                                <h3>We Are Bast In This Field</h3>
                                <p>
                                    SkyBird is the best web Hosting Company. 
                                    You can get shared hosting, VPS, Dedicated server from us.
                                    We have been providing secure, fast and reliable web hosting in 
                                    since 2012. We have 3000+ Bangladeshi website hosted in 
                                    our server. We give you 30 days Money-back Guarantee 
                                    for all our shared hosting Plans. Get started in 
                                    less than 60 seconds. 
                                    Pick a plan above to order!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
