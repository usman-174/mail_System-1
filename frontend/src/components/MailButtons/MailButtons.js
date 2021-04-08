import React from "react";
import { Container } from "react-bootstrap";
import "./MailButtons.css";
import MailButton from "./MailButton/MailButton";
import { one, two, three, four, five } from "../../Images/mailButtons";

export default function MailButtons() {
  return (
    <div id="mailButtons">
      <Container fluid>
        <div className="content">
          <MailButton image={one} text="Mail in" route="/Inbox" />
          <MailButton image={five} text="Mail out" route="/" />
          <MailButton image={three} text="pending" route="/" />
          <MailButton image={two} text="Discuss" route="/" />
          <MailButton image={four} text="urgent" route="/" />
        </div>
      </Container>
    </div>
  );
}
