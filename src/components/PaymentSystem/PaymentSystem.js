import React from "react";
import "./PaymentSystem.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCardForm from "../PaymentCardForm/PaymentCardForm";

const stripePromise = loadStripe(
    "pk_test_51IhJ5NKdRCYxmOGtDPpYGmYj3z8J6Fkq1hjYpEABr37vVjrxx6Jr9wRHYVTonvvuZVZTsDHhioNFbnLixpSqphAv001WvLODNp"
);

const PaymentSystem = ({amount}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCardForm amount={amount} />
        </Elements>
    );
};

export default PaymentSystem;
