import React from "react";
import "./profile.css";
import Userface from "../../images/profile3.png";

const Header = () => {
  return (
    <React.Fragment>
      <div className="main-profile-header">
        <div className="profile-navigation">
          <h2 className="profile-nav-header">Ride-my-Way</h2>
          <div className="signout-profile">
            <button className="profile-nav-button">SignOut</button>
          </div>
        </div>

        <div className="profile-user-detail">
          <div className="profile-session">
            <div className="user-profile-pic">
              <img
                src={Userface}
                alt="Profile picture"
                className="profile-image"
              />
            </div>
            <div className="person-detail">
              <h2>Nelson Frank</h2>
              <ul className="person-detail-list">
                <li>Username: Nelson</li>
                <li>Phone: 0784404462</li>
                <li>Email: NelsonFrank741@gmail.com</li>
                <li>Homeplace: Osterbay </li>
                <li>ID: 12344</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
