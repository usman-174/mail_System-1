import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me, logout } from "../actions/auth";
import { Nav, Navbar } from "react-bootstrap";
import ocslogo from "../Images/ocs-logo.jpg";

export default function Header() {
  const authData = useSelector((state) => state.auth.authData);
  const history = useHistory();
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logout(history));
  };
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return (
    <header id="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "rgb(24, 71, 116)" }}
        variant="dark"
      >
        <Link className="link brand" to="/">
          <img src={ocslogo} className="logo" alt="OCS" />
          <h6>
            Paperless <br /> campus
          </h6>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="btn link  btn-primary" active to="/home">
              Home
            </Link>
            <Link className="btn link btn-primary" to="/">
              New
            </Link>
            <Link className="btn link btn-primary" to="/">
              Track
            </Link>
            <Link className="btn link btn-primary" to="/">
              Tools
            </Link>
            <Link className="btn link btn-primary" to="/">
              utilities
            </Link>
          </Nav>
          <Nav>
            {authData?.user ? (
              <Link className="link" to="./login" onClick={Logout}>
                Logout
              </Link>
            ) : (
              <Link className="link btn btn-danger" to="./login">
                Login or Register
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div id="viewport">
        <div id="sidebar">
          <header>
            <Link to="/" style={{ color: "white" }}>
              Paperless Campus
            </Link>
          </header>
          <ul className="nav">
            <Link to="./dashboard">
              <li className="sidebar-items">
                <RiDashboardLine />
                &nbsp;&nbsp;&nbsp;Dashboard
              </li>
            </Link>
            <Link to="./compose">
              <li className="sidebar-items">
                <BsPencil />
                &nbsp;&nbsp;&nbsp;Compose
              </li>
            </Link>
            <Link to="./inbox">
              <li className="sidebar-items">
                <HiOutlineMail />
                &nbsp;&nbsp;&nbsp;Inbox
              </li>
            </Link>
            <Link to="./meetings">
              <li className="sidebar-items">
                <FaMeetup />
                &nbsp;&nbsp;&nbsp;Meetings
              </li>
            </Link>
            <Link to="./tracker">
              <li className="sidebar-items">
                <SiPivotaltracker />
                &nbsp;&nbsp;&nbsp;Tracker
              </li>
            </Link>
            <footer>
              {authData?.user ? (
                <Link to="./login" onClick={Logout}>
                  Logout
                </Link>
              ) : (
                <Link to="./login">Login or Register</Link>
              )}
            </footer>
          </ul>
        </div>
      </div> */}
    </header>
  );
}
