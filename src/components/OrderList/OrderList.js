import React, { useEffect, useState } from "react";
import "./OrderList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlayCircle,
    faPaperPlane,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";

const OrderList = () => {
    const pendingOrder = (id) => {
        const status = { status: "Pending" };
        fetch(`https://quiet-sierra-58443.herokuapp.com/updateStatus/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("Updated successfully");
            });
    };

    const onGoingOrder = (id) => {
        const status = { status: "On Going" };
        fetch(`https://quiet-sierra-58443.herokuapp.com/updateStatus/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("Updated successfully");
            });
    };
    const doneOrder = (id) => {
        const status = { status: "Done" };
        fetch(`https://quiet-sierra-58443.herokuapp.com/updateStatus/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("Updated successfully");
            });
    };

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://quiet-sierra-58443.herokuapp.com/ordersList`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders]);

    return (
        <section id="dashboard" className="mb-5">
            <div className="container">
                <DashBoardHeader />
                <div className="dashboard-main">
                    <h2 className="text-center pb-3 pt-5">Order List</h2>
                    <div className="order-list pb-5">
                        <table className="table table-striped order-list-table">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders &&
                                    orders.map((order) => (
                                        <tr key={order._id}>
                                            <td>
                                                <p>{order.productName}</p>
                                            </td>
                                            <td>
                                                <p>${order.productPrice}</p>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        pendingOrder(order._id)
                                                    }
                                                    className="btn btn-primary edit-btn"
                                                >
                                                    <FontAwesomeIcon
                                                        className="status-icon"
                                                        icon={faPlayCircle}
                                                    />
                                                    Pending
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        onGoingOrder(order._id)
                                                    }
                                                    className="btn btn-warning edit-btn"
                                                >
                                                    <FontAwesomeIcon
                                                        className="status-icon"
                                                        icon={faPaperPlane}
                                                    />
                                                    On Going
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        doneOrder(order._id)
                                                    }
                                                    className="btn btn-success edit-btn"
                                                >
                                                    <FontAwesomeIcon
                                                        className="status-icon"
                                                        icon={faCheckCircle}
                                                    />
                                                    Done
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;
