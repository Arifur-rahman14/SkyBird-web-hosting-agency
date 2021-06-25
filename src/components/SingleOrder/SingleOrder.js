import React from "react";


const SingleOrder = ({ order }) => {
    return (
        <tr>
            <th scope="row">{order.productName}</th>
            <td>{order.orderTime}</td>
            <td>${order.productPrice}</td>
            <td>{order.status}</td>
        </tr>
    );
};

export default SingleOrder;
