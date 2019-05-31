import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="body-in">
      <div className="main-in">
        <header className="header-in">
          <div className="nav-in">
            <h1 className="h1-in">Race_My_Way</h1>
          </div>
        </header>
        <div className="section-in">
          <div class="login">
            <form className="form-in">
              <input
                className="input-in"
                type="text"
                name="surname"
                placeholder="Surname"
                id="surname"
              />
              <input
                className="input-in"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              <Link to="/">
                <button id="submit-id">Submit</button>
              </Link>
            </form>
          </div>
          <p>
            Forget Password?! Click{" "}
            <Link to="/SignUp" style={{ color: "rgb(86, 118, 145)" }}>
              Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
