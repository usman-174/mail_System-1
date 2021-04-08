import React from "react";
import { Container } from "react-bootstrap";
import "./MailButtons.css";
import MailButton from "./MailButton/MailButton";
import { one, three, four, five } from "../../Images/mailButtons";

export default function MailButtons() {
  return (
    <div id="mailButtons">
      <Container fluid>
        <div className="content">
          <MailButton image={one} text="Inbox" route="/inbox" />
          <MailButton image={five} text="compose" route="/compose" />
          <MailButton image={three} text="Sent" route="/" />
          <MailButton image={four} text="Urgent" route="/" />
        </div>
      </Container>
    </div>
  );
}
