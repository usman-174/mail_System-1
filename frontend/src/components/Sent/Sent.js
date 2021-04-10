import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { get_sent_mails } from "../../actions/mails";

export default function Sent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_sent_mails());
  }, [dispatch]);

  const letters = useSelector((state) => state.mails?.sendMails?.foundData);
  const persons = useSelector((state) => state.mails?.sendMails?.persons);
  const mails = letters && Object.keys(letters);

  return (
    <div id="sent">
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
                  <h3>To</h3>
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
  );
}
