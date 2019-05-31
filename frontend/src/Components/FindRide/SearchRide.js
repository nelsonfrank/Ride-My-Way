import React, { Component } from "react";
import "./style-ride.css";
import "./Findride.css";
import Navigation from "./Navigation";
import RideList from "./RideList";

class SearchRide extends Component {
  state = {
    resultvalue: ""
  };

  handleRideList = () => {};
  handleSubmit = e => {
    e.preventDefault();
    const result = this.props.RideOffer.filter(value => {
      return (
        e.target[0].value === this.props.RideOffer.Destination ||
        e.target.value === this.props.RideOffer.Starting
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="whole-header">
          <Navigation />
          <div className="ride-form">
            <label> FindRide</label>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="input-ride"
                placeholder="Destination"
              />
              <input
                type="text"
                className="input-ride"
                placeholder="Starting"
              />
              <button className="button-ride">Submit</button>
            </form>
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
          <RideList rideList={this.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}
export default SearchRide;
