import React, { Component } from "react";
import Ride from "./Ride";
import "./style-ride.css";

class RideList extends Component {
  state = {
    RideOffer: [
      {
        Destination: "Posta",
        Starting: "Makumbusho",
        Time: "08:00 Am"
      },
      {
        Destination: "kawe",
        Starting: "Makumbusho",
        Time: "09:00 Am"
      },
      {
        Destination: "Mabibo",
        Starting: "Makongo",
        Time: "10:00 Am"
      },
      {
        Destination: "Makumbusho",
        Starting: "Kimara",
        Time: "11:00 Am"
      },
      {
        Destination: "Mlimani City",
        Starting: "Kawe",
        Time: "19:00 Am"
      },
      {
        Destination: "Posta",
        Starting: "Makumbusho",
        Time: "03:00 Am"
      },
      {
        Destination: "kawe",
        Starting: "Makumbusho",
        Time: "02:00 Am"
      },
      {
        Destination: "Mabibo",
        Starting: "Makongo",
        Time: "16:00 Am"
      },
      {
        Destination: "Makumbusho",
        Starting: "Kimara",
        Time: "15:00 Am"
      },
      {
        Destination: "Mlimani City",
        Starting: "Kawe",
        Time: "1:00 Am"
      }
    ]
  };

  render() {
    return (
      <div>
        <h2 className="findride-header">Available Rides</h2>
        <Ride rideList={this.state.RideOffer} />
      </div>
    );
  }
}
export default RideList;
