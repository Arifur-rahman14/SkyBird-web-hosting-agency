import React, { useEffect, useState } from "react";
import SingleOrder from "../SingleOrder/SingleOrder";
import UserDashboardHeader from "../UserDashboardHeader/UserDashboardHeader";
import "./Orders.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(
            `https://quiet-sierra-58443.herokuapp.com/orders?email=${sessionStorage.getItem(
                "email"
            )}`
        )
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders]);

    return (
        <section id="dashboard" className="mb-5">
            <div className="container">
                <UserDashboardHeader />
                <div className="row dashboard-main pb-5">
                    <div className="col">
                        <h1 className="text-center pb-5">Your Order History</h1>
                        <table class="table table-hover table-dark table-responsive-sm order-table">
                            <thead>
                                <tr className="bg-primary">
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Order Time</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders &&
                                    orders.map((order) => (
                                        <SingleOrder
                                            key={order._id}
                                            order={order}
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;
