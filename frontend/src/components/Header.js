import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me, logout } from "../actions/auth";
import { Nav, Navbar } from "react-bootstrap";
import MailButtons from "./MailButtons/MailButtons";
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
            <MailButtons />
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
    </header>
  );
}
