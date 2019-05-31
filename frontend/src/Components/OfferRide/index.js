import React, { Component, Fragment } from "react";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import RideDetail from "./RideDetail";
import RideOffer from "./RideOffer";

class index extends Component {
  render() {
    return (
      <>
        <div>
          <Navigation />
        </div>
        <div>
          <Sidebar />
        </div>
        <div>
          <RideOffer />
        </div>
      </>
    );
  }
}
export default index;
