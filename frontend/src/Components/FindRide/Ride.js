import React from "react";

const Ride = ({ rideList }) => {
  const mylist = rideList.map(rideList => {
    return (
      <div className="ride-item">
        <div>
          <span>{rideList.Destination}</span>
        </div>
        <div>
          <span>{rideList.Location}</span>
        </div>

        <span>{rideList.Time}</span>
      </div>
    );
  });
  return { mylist };
};
export default Ride;
