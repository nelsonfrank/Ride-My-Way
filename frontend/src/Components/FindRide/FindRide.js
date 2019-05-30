import React from "react";
import "./style-ride.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RideList from "./RideList";
import Navigation from "./Navigation";
import SearchRide from "./SearchRide";

const index = () => {
  return (
    <React.Fragment>
      <div className="whole-header">
        <Navigation />
        <div className="search-item">
          <Link to="/FindRide/SearchRide">
            <button className="ride-button">Search</button>
          </Link>
        </div>
      </div>

      <div className="side-bar">
        <ul className="option-list">
          <li className="list-item-ride">Dashboard</li>
          <li className="list-item-ride">FindRide</li>
          <li className="list-item-ride">OfferRide</li>
          <li className="list-item-ride">SignOut</li>
        </ul>
      </div>
      <div className="my-ride-found">
        <RideList />
      </div>
    </React.Fragment>
  );
};
export default index;
