import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { me } from "../actions/auth";
import logo from "../Images/pcLogo.png";

function Welcome() {
  const location = useLocation();
  const authData = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, [dispatch, location]);

  return (
    <div>
      <div className="bg">
        <header>
          <img src={logo} alt="logo" className="logo" />
        </header>
        {authData?.user ? (
          <blockquote className="blockquote text-center mt-5">
            <footer className="blockquote-footer">
              Welcome {authData.user.name}
              {/* {user?.theUser.name} */}
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
