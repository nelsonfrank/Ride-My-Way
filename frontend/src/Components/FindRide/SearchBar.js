import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchRide from "./SearchRide";

class SearchBar =()=> {
 
    return (
      <Router>
        <div>
          <Link to="/FindRide/SearchRide">
            <button className="ride-button">Search</button>
          </Link>
        </div>
        <div>
          <Route path="/SearchRide" component={SearchRide} />
        </div>
      </Router>
    );

}

export default SearchBar;
