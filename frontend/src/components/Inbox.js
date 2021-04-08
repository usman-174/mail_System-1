import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import MailButtons from "./MailButtons/MailButtons";
import MinutesOfMeeting from "./MinutesOfMeeting/MinutesOfMeeting";

export default function Inbox() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <MailButtons />
      <div id="inbox">
        <div>
          <Container fluid>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-2">
                <div className="beautiful-time">
                  {new Date().toLocaleTimeString()}
                </div>
                <Calendar
                  className="calender"
                  onChange={onChange}
                  value={value}
                />
                <br />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="title">
                  <i class="fas fa-recycle"></i>
                  <h3>Minutes Of Meeting</h3>
                </div>
                <MinutesOfMeeting />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
