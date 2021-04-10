import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Calendar from "react-calendar";
import MinutesOfMeeting from "./MinutesOfMeeting/MinutesOfMeeting";
import { useDispatch, useSelector } from "react-redux";
import { get_inbox_mails } from "../actions/mails";

export default function Inbox() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_inbox_mails());
  }, [dispatch]);

  // Grab all mails of the Logged in user
  const letters = useSelector((state) => state.mails?.sendMails?.foundData);
  const persons = useSelector((state) => state.mails?.sendMails?.persons);

  const mails = letters && Object.keys(letters);

  const [value, onChange] = useState(new Date());
  return (
    <>
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
                  <i className="fas fa-recycle"></i>
                  <h3>Minutes Of Meeting</h3>
                </div>
                <MinutesOfMeeting />
              </div>
            </div>
          </Container>

          <div id="mom-2">
            <div className="content">
              <Row>
                <Col lg={12} className="single-row">
                  <div className="rows">
                    <div className="titles">
                      <div className="title">Your Letters</div>
                    </div>
                    <ul className="items">
                      <div className="item">
                        <h3>Title</h3>
                        <h3>Message</h3>
                        <h3>From</h3>
                      </div>
                      {letters ? (
                        mails.map((letter) => (
                          <div className="item mt-3" key={letters[letter]._id}>
                            <li>{letters[letter].text}</li>
                            <li>{letters[letter].message}</li>
                            <li>{persons[letter]}</li>
                          </div>
                        ))
                      ) : (
                        <div className="d-flex justify-content-center mt-4">
                          <div className="spinner-grow" role="status" />
                        </div>
                      )}
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
