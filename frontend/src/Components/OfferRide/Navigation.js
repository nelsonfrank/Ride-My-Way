import React, { Component } from "react";
// import { a href } from "react-router-dom";
import "../FindRide/style-ride.css";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="whole-header">
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
          <div />
        </div>
      </React.Fragment>
    );
  }
}
export default Navigation;
