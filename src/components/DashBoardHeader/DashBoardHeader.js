import React from 'react';
import './DashBoardHeader.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faPlus, faPencilAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';

const DashBoardHeader = () => {
    
    

    return (
        <div className="container">
            <div className="row">
            <div className="col">
                        <div className="dashboard-navigation">
                            <ul>
                            <li><Link to="/dashBoard" className = "link-nav"><FontAwesomeIcon className = "admin-icon" icon={faPlus} /> Add Service</Link></li>
                            <li><Link to="/makeAdmin" className = "link-nav"><FontAwesomeIcon className = "admin-icon" icon={faUserShield} /> Make Admin</Link></li>
                            <li><Link to="/manageService" className = "link-nav"><FontAwesomeIcon className = "admin-icon" icon={faPencilAlt} /> Manage Services</Link></li>
                            <li><Link to="/orderList" className = "link-nav"><FontAwesomeIcon className = "admin-icon" icon={faThLarge} /> Order List</Link></li>                                
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default DashBoardHeader;