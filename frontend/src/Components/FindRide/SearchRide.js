import React, { Component } from "react";
import "./style-ride.css";
// import RideList from "./RideList";
import Navigation from "./Navigation";

class SearchRide extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="whole-header">
          <Navigation />
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
          <p>Here is your results</p>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchRide;
