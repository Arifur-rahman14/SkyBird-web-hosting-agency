import React from "react";
import "./OurBrand.css";
import ourBrand from "../../images/our-brand.png";
import ourBrand2 from '../../images/our-brand-2.png'

const OurBrand = () => {
    return (
        <section id="brand" className = "pb-5 mb-5">
             <div className="container">
                <div className="row our-brand">
                    <div className="col-md-8">
                        <div className="our-brand-img">
                            <img
                                className="img-fluid w-100"
                                src={ourBrand}
                                alt="brand"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="our-brand-content">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Voluptatibus, nisi eveniet 
                                quos dignissimos dolorum obcaecati perspiciatis
                                vel nobis adipisci quo sed voluptatem autem, 
                                impedit rem. Fuga, voluptate! Officiis, 
                                voluptates molestiae exercitationem facere 
                                similique alias perferendis doloremque 
                                omnis consectetur laboriosam quis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 our-brand-2">
                    <div className="col-md-5">
                        <div className="our-brand-content">
                            <h3>Lorem ipsum dolor sit amet consectetur!</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipisicing elit. Necessitatibus, ipsum 
                                exercitationem corrupti nostrum reiciendis 
                                sint eaque sequi id officiis saepe veritatis 
                                aperiam unde quo tempora iste alias laborum 
                                ullam, similique, sit aliquam iure impedit 
                                amet? Quam ducimus animi voluptate dignissimos 
                                quos molestiae dolore accusantium illo.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="our-brand-img">
                            <img
                                className="img-fluid w-100"
                                src={ourBrand2}
                                alt="brand"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBrand;
