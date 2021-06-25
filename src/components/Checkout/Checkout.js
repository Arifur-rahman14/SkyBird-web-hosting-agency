import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import PaymentSystem from "../PaymentSystem/PaymentSystem";
import "./Checkout.css";
import stripe from "../../images/stripe.png";

const CheckOut = () => {
    const [loggedInUser] = useContext(UserContext);

    const [service, setService] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://quiet-sierra-58443.herokuapp.com/singleService/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [id]);

    const handleCheckOut = (product) => {
        const orderDetails = {
            userEmail: loggedInUser.email,
            productName: product.name,
            productPrice: product.price,
            orderTime: new Date().toLocaleString(),
        };
        console.log(orderDetails);

        fetch(`https://quiet-sierra-58443.herokuapp.com/addOrder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        }).then((res) => res.json());
    };

    return (
        <div className="container">
            <h2 className="checkout-tittle text-center">Process Order</h2>
            <div className="row mt-5">
                <div className="col-md-5">
                    <table className="checkout-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>{service && service.name}</p>
                                </td>
                                <td>
                                    <p>1</p>
                                </td>
                                <td>
                                    <p>${service && service.price}</p>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>${service && service.price}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="payment-part pt-5">
                        <h2 className="pt-2 pb-2">Online Payments</h2>
                        <PaymentSystem amount={service && service.price} />
                    </div>
                    <div className="checkout-btn text-center">
                        <Link
                            to="/orders"
                            className="btn btn-success btn-lg"
                            onClick={() => handleCheckOut(service)}
                        >
                            Order Now
                        </Link>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="payment-system pt-5">
                        <div className="row">
                            <div className="col">
                                <div className="img">
                                    <img
                                        className="img-fluid w-100"
                                        src={stripe}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
