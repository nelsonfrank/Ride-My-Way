import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Link to="/FindRide/SearchRide">
          <button className="ride-button">Search</button>
        </Link>
      </div>
    );
  }
}

export default SearchBar;
