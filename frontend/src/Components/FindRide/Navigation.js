import React from "react";
// import { a href } from "react-router-dom";
import "./style-ride.css";

const Navigation = () => {
  return (
    <header className="header-nav">
      <nav>
        <h1 className="headertopnav">Ride_My_Way</h1>
        <div className="listspace">
          <button className="cl-2">
            <a href className="navig-nav">
              Home
            </a>
          </button>
          <button className="cl-2">
            <a href className="navig-nav">
              OfferRide
            </a>
          </button>
          <button className="cl-2">
            <a href className="navig-nav">
              SignOut
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
