import React from "react";

const Ride = ({ rideList }) => {
  const mylist = rideList.map(list => {
    return (
      <tr>
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
    <table>
      <tr>
        <td>Destination</td>
        <td>Stating</td>
        <td>Time</td>
      </tr>
      {mylist}
    </table>
  );
};
export default Ride;
