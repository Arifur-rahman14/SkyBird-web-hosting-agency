import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";



const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("https://quiet-sierra-58443.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setTestimonials(data));
    }, [testimonials]);

    return (
        <section id="testimonial" className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tittle">
                            <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            <div className="tittle-description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat, modi soluta
                                    doloremque maxime a exercitationem quos
                                    neque aperiam quo explicabo, ullam nostrum
                                    tempore. Recusandae reprehenderit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col text-center">
                        <p className="testimonial-tittle">Clients Feedback</p>
                    </div>
                </div>
                <div className="row">
                    {testimonials && testimonials.map((testimonial) => (
                        <Testimonial key={testimonial._id}  testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
