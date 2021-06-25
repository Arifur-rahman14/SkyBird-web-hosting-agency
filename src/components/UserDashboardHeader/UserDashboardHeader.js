import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faStar } from '@fortawesome/free-solid-svg-icons';

const UserDashboardHeader = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col">
                        <div className="dashboard-navigation">
                            <ul>
                            <li><Link to="/review" className = "link-nav"><FontAwesomeIcon className = "admin-icon" icon={faStar} /> Make Review</Link></li>
                            <li><Link to="/orders" className = "link-nav"><FontAwesomeIcon className = "admin-icon" icon={faThLarge} /> Order History</Link></li>                               
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UserDashboardHeader;