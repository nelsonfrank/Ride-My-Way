import React, { Component } from "react";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";

class index extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <ProfileInfo />
        </div>
      </>
    );
  }
}
export default index;
