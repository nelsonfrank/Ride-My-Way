import React, { Component } from "react";
import Ride from "./Ride";

class RideList extends Component {
  state = {
    RideOffer: [
      {
        Destination: "Posta",
        Starting: "Makumbusho",
        Time: "08:00 Am"
      }
    ]
  };

  render() {
    return (
      <div>
        <h2>Available Rides</h2>
        <Ride rideList={this.state.RideOffer} />;
      </div>
    );
  }
}
export default RideList;
