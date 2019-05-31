import React from "react";
import "./style-ride.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RideList from "./RideList";
import Navigation from "./Navigation";
import FindRide from "./FindRide";
import SearchRide from "./SearchRide";

const index = () => {
  return (
    <Router>
      <div>
        <Route path="/FindRide" exact component={FindRide} />
        <Route path="/FindRide/SearchRide" component={SearchRide} />
      </div>
    </Router>
  );
};
export default index;
