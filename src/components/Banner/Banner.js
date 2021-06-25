import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 m-auto banner-col">
                        <div className="banner-content text-center">
                            <h1>
                                We Have Perfect <span>Web Hosting</span> For {" "}
                                <span>YOU!</span>
                            </h1>
                            <div className="brand-description">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur 
                                    adipisicing elit. Repellendus perspiciatis 
                                    atque iste fuga sint iure eaque adipisci nesciunt 
                                    aspernatur. Possimus, facilis maxime! Commodi 
                                    voluptatem expedita neque at saepe veniam eveniet aliquam, 
                                    quod sunt possimus repellat alias harum. Reiciendis, a facere.

                                </p>
                            </div>
                            <button className="btn btn-warning btn-lg">
                                Buy NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
