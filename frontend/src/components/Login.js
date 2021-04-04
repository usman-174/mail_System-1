import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signin } from "../actions/auth";
import logo from "../Images/pcLogo.png";
import GoogleAuth from "./GooleAuth";

export default function Login() {
  const authData = useSelector((state) => state.auth.authData);
  const authError = useSelector((state) => state.auth.authError);
  let history = useHistory();
  let dispatch = useDispatch();

  let initialState = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (authData?.user) {
      history.push("/");
    }
  }, []);

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
    !authData?.user && (
      <div className="l-bg">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <div className="alert alert-danger" role="alert">
                {authError && <h4>{authError.error}</h4>}
              </div>
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
              {authError ? <GoogleAuth /> : <h1>This is not null</h1>}
              {/* <GoogleAuth /> */}
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
    )
  );
}
