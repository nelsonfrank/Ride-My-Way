import React, { Component } from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import "../css/signup.css";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div>
        <body className="body-part">
          <header className="header-part">
            <div className="nav-part">
              <h1 className="">SignUp</h1>
            </div>
          </header>
          <main className="main-part">
            <section className="section-part">
              <form className="form-part">
                <input
                  type="text"
                  name="firstname"
                  id="inpute"
                  placeholder="Yourname"
                  className="input-part"
                />
                <input
                  type="text"
                  name="surname"
                  id="inpute"
                  placeholder="Surname"
                  className="input-part"
                />
                <input
                  type="number"
                  name="phone"
                  id="inpute"
                  placeholder="Phone Number"
                  className="input-part"
                />
                <input
                  type="text"
                  name="email"
                  id="inpute"
                  placeholder="Email"
                  className="input-part"
                />
                <input
                  type="number"
                  name="credit card"
                  id="inpute"
                  placeholder="Credit Card Number"
                  className="input-part"
                />
                <input
                  type="password"
                  name="password"
                  id="inpute"
                  placeholder="Password"
                  className="input-part"
                />
                <input
                  type="password"
                  name="Comform password"
                  id="inpute"
                  placeholder="Confirm Password"
                  className="input-part"
                />
                <a href="Login.html">
                  <Link to="/SignIn">
                    <button name="" id="submit-part">
                      Submit
                    </button>
                  </Link>
                </a>
              </form>
            </section>
            <div className="link">
              <h2 style={{ fontFamily: "Courier New, Courier, monospace" }}>
                Sign Up with:
              </h2>
              <div className="horizontal">
                <img
                  src={google}
                  id="google"
                  className="socialnk"
                  alt=""
                  height="50px"
                  width="50px"
                />

                <img
                  src={facebook}
                  id="facebook"
                  className="socialnk"
                  height="50px"
                  width="50px"
                  alt=""
                />

                <img
                  src={twitter}
                  id="twitter"
                  className="socialnk"
                  height="50px"
                  width="50px"
                  alt=""
                />
              </div>

              <div>
                <h3 style={{ fontFamily: "Courier New", fontSize: "20" }}>
                  Do You have an Account?!
                </h3>
                <Link to="/SignIn">
                  <button id="signin">Sign in</button>
                </Link>
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Signup;
