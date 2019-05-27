import React from "react";
import SearchBar from "./SearchBar";
import RideList from "./RideList";
import Navigation from "./Navigation";

const index = () => {
  return (
    <React.Fragment>
      <div className="whole-header">
        <Navigation />
        <div className="search-item">
          <SearchBar />
        </div>
      </div>

      <div className="my-ride-found">
        <RideList />
      </div>
    </React.Fragment>
  );
};
export default index;
