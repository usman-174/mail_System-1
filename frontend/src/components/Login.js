import React, { useEffect, useState } from "react";
import logo from "../Images/pcLogo.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../actions/auth";

export default function Login() {
  let history = useHistory();
  let dispatch = useDispatch();

  let initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  function validateForm() {
    if (!formData.email || !formData.password) {
      alert("PLease fill the required fields");
      return false;
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData?.email
      )
    ) {
      alert("Email Invalid !!!");
      return false;
    } else return true;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = validateForm();
    if (check) {
      dispatch(signin(formData, history));
    }
  };
  return (
    <div className="l-bg">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <div className="LR-logo">
              <img src={logo} id="icon" alt="User Icon" />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                className="fadeIn second"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <input
                type="password"
                className="fadeIn second"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <input type="submit" className="fadeIn fourth" value="Login" />
            </form>
            <div id="formFooter">
              <Link to="/registration">
                <button type="button" className="btn btn-light">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
