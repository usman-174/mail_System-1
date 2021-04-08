import { Link } from "react-router-dom";
import React from "react";
import "./MailButton.css";

export default function MailButton({ image, text, route }) {
  return (
    <Link to={route} className="link mailButton">
      <img src={image} className="mailButtonImage" alt="not found" />
      <h5 variant="primary">{text}</h5>
    </Link>
  );
}
