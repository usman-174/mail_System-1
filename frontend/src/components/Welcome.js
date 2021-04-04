import React, { useEffect, useState } from "react";
import logo from "../Images/pcLogo.png";

import { Link, useLocation } from "react-router-dom";
import decode from "jwt-decode";

function Welcome() {
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("person")));

  const logout = () => {
    localStorage.clear("person");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    // JWT token expiry check
    if (token) {
      const decodedToken = decode(token);
      setUser(JSON.parse(localStorage.getItem("person")));
      console.log("user:", user);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  return (
    <div>
      <div className="bg">
        <header>
          <img src={logo} alt="logo" className="logo" />
        </header>
        {user ? (
          <blockquote className="blockquote text-center mt-5">
            <footer className="blockquote-footer">
              Welcome {user?.theUser.name}
            </footer>
            <p className="pt-2">Head over to the INBOX to check your emails</p>
          </blockquote>
        ) : (
          <div className="my_buttons">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              <Link to="/login">Sign in to Paperless Campus</Link>
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              <Link to="/registration">Sign up for Paperless Campus</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
