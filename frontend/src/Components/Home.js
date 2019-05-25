import React from "react";
import { Link } from "react-router-dom";
import image from "../images/car.png";
import "../css/home.css";
import Signup from "./SignUp";

const Home = () => {
  return (
    <div>
      <header className="header01">
        <nav>
          <h1 className="headertop">
            <img src={image} alt="" height="70px" width="70px" />
            Ride_My_Way
          </h1>
          <div className="list-space">
            <Link to="/SignUp">
              <button className="cl-1">
                <span className="navig">Sign Up</span>
              </button>
            </Link>

            <Link to="/SignIn">
              <button className="cl-1">
                <span className="navig">Sign In</span>
              </button>
            </Link>
          </div>
        </nav>
        <div className="intro">
          <h1 className="headeragain">Welcome to Ride My Way</h1>
          <div className="descrip">
            <p className="textabtdescrip">
              Here is the place where you can reach home so rapid
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="firstsection">
          <h1 className="offerheader">Offer Ride</h1>
          <div className="offer">
            <div className="offerdescrip">
              <p>
                Car owner This is your time to make unlimited amount of money,
                There you go, Invite some friend to travel together and earn
                money, is that so easier friend? Make it now what are you
                waiting for, Travel and make money?! Car owner This is your time
                to make unlimited amount of money, There you go, Invite some
                friend to travel together and earn money, is that so easier
                friend? Make it now what are you waiting for, Travel and make
                money?!🚀🚀🚗🚗💰💰✓
              </p>
            </div>
            <div className="offerbutton">
              <button className="buttonoffer">Offer Ride</button>
            </div>
          </div>
        </section>
        <section className="secondsession">
          <h1 className="offerheader">Find Ride</h1>
          <div className="offer">
            <div className="offerdescrip">
              <p>
                Are You wish to reach where you go easily and faster without
                waiting for terrible public transport, here we find the
                way,where you can reach home, easily without complication,
                Ride_My_Way, you can find an appropriate ride now to go wherever
                you want to go, Chech it out by click the button below.{" "}
              </p>
            </div>
            <div className="offerbutton">
              <button className="buttonoffer">Find Ride</button>
            </div>
          </div>
        </section>
        <section />
      </main>
      <div className="uphome">
        <a href="#home">
          <button className="home">˄</button>
        </a>
      </div>

      <footer>
        <div className="footerpart">
          <div className="contact">
            Ride_My_Way Cooperation Silicon_Dar Road, Victoria P.O Box 2028
            Ride_My_Way.Co @ ride.com Dar es Salaam, Tanzania
          </div>
          <div className="@2019">
            <p style={{ fontFamily: "monaco" }}>Ride_My_Way@2019</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
