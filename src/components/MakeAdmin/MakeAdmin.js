import React from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';


const MakeAdmin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const adminData = {
        email: data.admin
        };
        
        const url = `https://quiet-sierra-58443.herokuapp.com/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => console.log('server side response'))
    };

    return (
        <section id="make-admin">
            <div className="container">
                <DashBoardHeader />
                <div className="row make-admin-main pb-5">
                    <div className="col">
                        <div className="make-admin text-center pt-3 pb-5">
                            <h2>Make Admin</h2>
                        </div>
                        <div className="make-admin-form">
                            <div className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="service-name">Email</label>
                                    <input id="service-name" className="form-control" type="email" placeholder="Enter Admin Name" name="admin" ref={register} />
                                    
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

export default MakeAdmin;