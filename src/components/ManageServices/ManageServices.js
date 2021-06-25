import React, { useEffect, useState } from "react";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";
import "./ManageServices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageServices = () => {
    const deleteService = (id) => {
        fetch(`https://quiet-sierra-58443.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("deleted successfully");
            });
    };

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://quiet-sierra-58443.herokuapp.com/services`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);

    return (
        <section id="dashboard" className ="mb-5">
            <div className="container">
                <DashBoardHeader />
                <div className="row dashboard-main pb-5">
                    <div className="col">
                        <div className="add-service text-center pt-3 pb-5">
                            <h2>Manage Services</h2>
                        </div>
                        <div className="service-list">
                            <table className="manage-service-table">
                                <thead>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services &&
                                        services.map((service) => (
                                            <tr key={service._id}>
                                                <td>
                                                    <p>{service.name}</p>
                                                </td>
                                                <td>
                                                    <p>${service.price}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-warning edit-btn">
                                                        <FontAwesomeIcon
                                                            onClick={() =>
                                                                deleteService(
                                                                    service._id
                                                                )
                                                            }
                                                            className="delete-icon"
                                                            icon={faTrashAlt}
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;
