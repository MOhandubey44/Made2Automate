// OrderList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ordersData from './OrdersData.json';
import './Order.css';

const OrderList = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <Link to="/" className="back-link">
            {'< Back'}
          </Link>
        </div>
        <div className="center-section">
          <h1 className="navbar-heading">Order List</h1>
        </div>
        <div className="right-section"></div>
      </nav>
      <div className="order-list">
        {ordersData.map((order) => (
          <div key={order.id} className="order-card">
            <div className="product-image">
            <img src={order.productImage} alt={order.productName}  />
            </div>
            <div className="order-details">
              <h3>{order.productName}</h3>
              <p>{order.description}</p>
              <div className="details-line">
                <p>Price: ${order.price}</p>
                <p>Customer: {order.customerName}</p>
                <p>Quantity: {order.quantity}</p>
              </div>
              <div className="buttons">
                <button className="order-again-btn">Order Again</button>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderList;
