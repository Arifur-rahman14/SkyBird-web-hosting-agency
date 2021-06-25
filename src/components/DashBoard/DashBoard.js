import React, { useContext, useEffect, useState } from 'react';
import './DashBoard.css';
import { useForm } from "react-hook-form";
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import { UserContext } from '../../App';
import UserDashboardHeader from '../UserDashboardHeader/UserDashboardHeader';

const DashBoard = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const serviceData = {
        name: data.name,
        description: data.description,
        price: data.price
        };
        
        const url = `https://quiet-sierra-58443.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response'))
    };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://quiet-sierra-58443.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: sessionStorage.getItem('email') })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [isAdmin])
    console.log(loggedInUser);

    return (
        <section id="dashboard">
            <div className="container">
                {
                    isAdmin ? <DashBoardHeader /> : <UserDashboardHeader />
                }
                <div className="row dashboard-main pb-5">
                    <div className="col">
                        <div className="add-service text-center pt-3 pb-5">
                            <h2>Add Service</h2>
                        </div>
                        <div className="add-service-form">
                            <div className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="service-name">Service Name</label>
                                    <input name ="name" id="service-name" className="form-control" type="text" placeholder="Enter Service Name" ref={register}  />
                                    
                                    <label htmlFor="service-Description">Description</label>
                                    <input name ="description" id="service-Description" className="form-control" type="text" placeholder="Enter Service Description" ref={register}  />
                                    
                                    <label htmlFor="service-price">Service Price</label>
                                    <input name ="price" id="service-price" className="form-control" type="text" placeholder="Enter Service Price" ref={register}  />
                                    
                                    <button className="btn btn-success">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;