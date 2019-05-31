import React, { Component } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import RideDetail from "./RideDetail";
import "../FindRide/style-ride.css";

class RideOffer extends Component {
  state = {
    rideOffer: [
      {
        Destination: "",
        Starting: "",
        Time: 0,
        path: ""
      }
    ],
    visible: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = {
      Destination: e.target[0].value,
      Starting: e.target[1].value,
      Time: e.target[2].value,
      path: e.target[3].value
    };

    const newList = [value].concat(this.state.rideOffer);
    this.setState({
      rideOffer: newList
    });
  };
  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <div className="search-item ">
          <button className="offer-button" onClick={this.show.bind(this)}>
            OfferRide
          </button>
        </div>
        <Rodal
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
          width="400px"
          height="500px"
        >
          <div>
            <h1 className="offer-ride-form-header">FILL TO OFFER RIDE HERE</h1>
            <div>
              <form className="form-input-offer" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="Offer-ride-input"
                  placeholder="Destination"
                />
                <input
                  type="text"
                  className="Offer-ride-input"
                  placeholder="Starting"
                />
                <input
                  type="Time"
                  className="Offer-ride-input"
                  placeholder="Departure Time"
                />
                <input
                  type="text"
                  className="Offer-ride-input"
                  placeholder="Path"
                />
                <button
                  className="offer-ride-form-button"
                  onClick={this.hide.bind(this)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Rodal>

        <RideDetail dataValue={this.state.rideOffer} />
      </div>
    );
  }
}
export default RideOffer;
