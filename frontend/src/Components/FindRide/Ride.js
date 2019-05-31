import React from "react";
import "./style-ride.css";

const Ride = ({ rideList }) => {
  const mylist = rideList.map(list => {
    return (
      <tr className="table-data-rows">
        <td>
          <span>{list.Destination}</span>
        </td>
        <td>
          <span>{list.Starting}</span>
        </td>
        <td>
          <span>{list.Time}</span>
        </td>
      </tr>
    );
  });
  return (
    <table className="findride-table">
      <tr className="table-header">
        <td className="table-data">Destination</td>
        <td className="table-data">Starting</td>
        <td className="table-data">Time</td>
      </tr>
      {mylist}
    </table>
  );
};
export default Ride;
