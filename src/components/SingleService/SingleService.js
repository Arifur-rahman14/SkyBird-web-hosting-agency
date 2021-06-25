import React from "react";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = ({ service }) => {
    return (
        <div className="col-md-6 col-lg-4 pb-4">
            <div className="service-content text-center">
                <div className="content-details">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <h5>${service.price}</h5>
                </div>
                <div className="service-content-overlay d-flex justify-content-center">
                    <div className="service-btn align-self-center">
                        <Link to = {`/checkout/${service._id}`} className="service-button">Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
