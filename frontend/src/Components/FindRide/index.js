import React from "react";
import SearchBar from "./SearchBar";
import RideList from "./RideList";

const index = () => {
  return (
    <div>
      <div className="search-item">
        <SearchBar />
      </div>

      <div className="my-ride-found">
        <RideList />
      </div>
    </div>
  );
};
export default index;
