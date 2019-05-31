import React from "react";
import "./style-offer.css";

const RideDetail = ({ dataValue }) => {
  const ridedetail = dataValue.map(detail => {
    return (
      <div className="ride-detail">
        <h1 className="ride-detail-title">
          {" "}
          Here is {detail.Destination} ride
        </h1>
        <div className="ride-detail-body">
          <h2>Ride Details</h2>
          <h3>Destination: {detail.Destination}</h3>
          <h3>Starting: {detail.Starting}</h3>
          <h3>Time: {detail.Time}</h3>
          <h3>Path: {detail.path}</h3>
        </div>
      </div>
    );
  });
  return <div>{ridedetail}</div>;
};

export default RideDetail;
