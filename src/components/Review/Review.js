import React from "react";
import "./Review.css";
import { useForm } from "react-hook-form";
import UserDashboardHeader from "../UserDashboardHeader/UserDashboardHeader";

const Review = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            feedback: data.feedback,
            name: sessionStorage.getItem('name'),
            email: sessionStorage.getItem('email')
        };
        console.log(reviewData);

        const url = `https://quiet-sierra-58443.herokuapp.com/addReview`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(reviewData),
        }).then((res) => console.log("server side response"));
    };

    return (
        <section id="dashboard" className ="mb-5">
            <div className="container">
                <UserDashboardHeader />
                <div className="row dashboard-main pb-5">
                    <div className="col">
                        <div className="add-service text-center pt-3 pb-5">
                            <h2>Make Review</h2>
                        </div>
                        <div className="add-service-form">
                            <div className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="feedback-name">
                                        Your Feedback
                                    </label>
                                    <input
                                        name="feedback"
                                        id="feedback-name"
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Your Feedback"
                                        ref={register}
                                    />

                                    <button className="btn btn-success">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
