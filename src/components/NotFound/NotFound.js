import React from 'react';
import notFound from '../../images/not-found.png';

const NotFound = () => {
    return (
        <div>
            <img src={ notFound} alt=""/>
            <h1>Opps! </h1>
            <h3>I Don't Find It...</h3>
            <h2>Try Another One ...!</h2>
        </div>
    );
};

export default NotFound;