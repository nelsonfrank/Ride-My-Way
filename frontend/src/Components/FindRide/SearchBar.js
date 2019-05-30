import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar =()=> {
 
    return (
      <div>
        <Link to="/FindRide/SearchRide">
          <button className="ride-button">Search</button>
        </Link>
      </div>
    );

}

export default SearchBar;
