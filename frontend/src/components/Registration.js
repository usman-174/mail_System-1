import React, { useState } from "react";
import logo from "../Images/pcLogo.png";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";

export default function Registration() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authError = useSelector((state) => state.auth.authError);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");

  function validateForm() {
    if (!name || !password || !email || !designation || !department) {
      alert("Please fill every required field");
      return false;
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      alert("Email Invalid");
      return false;
    } else if (password.length < 7) {
      alert("Password must contain atleast 7 characters");
      return false;
    } else {
      return true;
    }
  }

  const formData = {
    name,
    email,
    password,
    designation,
    department,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let check = validateForm();

    if (check) {
      dispatch(signup(formData, history));
    }
  };

  return (
    <div className="r-bg">
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
            <form>
              <input
                type="text"
                className="fadeIn second"
                value={name}
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="fadeIn second"
                value={email}
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="fadeIn second"
                value={password}
                placeholder="Password"
                title="Password must contain atleast 7 characters"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* ----------------designation Dropdown -------------------*/}
              <select
                className="my-select"
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option value="" disabled>
                  Designation
                </option>

                <option value="Vice Chancellor">Vice Chancellor</option>
                <option value="Registrar">Registrar</option>
                <option value="Dean">Dean</option>
                <option value="HOD">HOD</option>
                <option value="Professor">Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Lecturer">Lecturer</option>
                <option value="Lab Assistant">Lab Assistant </option>
              </select>
              {/* ----------------department Dropdown -------------------*/}
              <select
                className="my-select"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" disabled>
                  Department
                </option>
                <option value="Computer Sciences (BSCS)">
                  Computer Sciences
                </option>
                <option value="Information Technology (BSIT)">
                  Information Technology
                </option>
                <option value="Cyber Security (BSCybSec)">
                  Cyber Security
                </option>
                <option value="Accounting and Finance (BSAF)">
                  Accounting and Finance
                </option>
                <option value="Electrical">Electrical</option>
                <option value="Mechanical">Mechanical</option>
                <option value="English">English</option>
                <option value="Physics">Physics</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Psychology">Psychology</option>
                <option value="Biomedical Engineering">Biomedical</option>
                <option value="Gaming & Multimedia">
                  Gaming and Multimedia
                </option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
              </select>
              <input
                type="submit"
                className="fadeIn fourth"
                value="Register"
                onClick={submitHandler}
              />
            </form>
            <div id="formFooter">
              <button type="button" className="btn btn-light">
                <Link to="/login">Already Registered</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
