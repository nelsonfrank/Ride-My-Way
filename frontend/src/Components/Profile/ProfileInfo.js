import React from "react";

const ProfileInfo = () => {
  return (
    <div>
      <div className="button-profile-info">
        <div className="ride-info-descrption">
          <button className="button-info-description">Description</button>
        </div>
        <div className="ride-info-number">
          <button className="button-info-number">RideOffered</button>
          <button className="button-info-number">RideTaken</button>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
