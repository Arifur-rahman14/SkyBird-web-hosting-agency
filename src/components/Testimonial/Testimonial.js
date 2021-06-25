import React from "react";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
    return (
        <div className="col-md-6 col-lg-4 pb-4">
            <div className="testimonial-content">
                <div className="testimonial-content-description text-center">
                    <h4>{testimonial.feedback}</h4>
                    <p>{testimonial.name}</p>
                    <p>{testimonial.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
