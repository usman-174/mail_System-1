import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CKEditor from "react-ckeditor-component";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { send_mail } from "../actions/mails";
import Toast from "../components/Toast/Toast";
import { RESET_STATE } from "../actionTypes";

export default function Compose() {
  const dispatch = useDispatch();
  const history = useHistory();
  const mailError = useSelector((state) => state.mails?.mailError);
  const mailData = useSelector((state) => state.mails?.mails?.message);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: RESET_STATE });
    }, 5000);
  }, [mailData, mailError]);

  const initialState = {
    text: "",
    from: "",
    email: "",
    info: "",
  };

  const [formData, setFormData] = useState(initialState);

  function validateForm() {
    if (!formData.text || !formData.email || !formData.from || !formData.info) {
      alert("PLease fill the required fields");
      return false;
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData?.email
      )
    ) {
      alert("Email Invalid !!!");
      return false;
    } else return true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let check = validateForm();
    if (check) {
      dispatch(send_mail(formData, history));
      setFormData({ ...initialState });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [value, onChange] = useState(new Date());
  return (
    <>
      {mailData && <Toast message={mailData} />}
      {mailError?.error && <Toast message={mailError.error} />}
      <div id="compose">
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
                  <h3>Compose Letter</h3>
                </div>
                <div className="container-fluid-compose-header">
                  <Row>
                    <Col sm={8} md={4} lg={8}>
                      <div className="inputs">
                        <label htmlFor="text">Text</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          name="text"
                          value={formData.text}
                        />
                        <br />
                        <label htmlFor="text">From</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          name="from"
                          value={formData.from}
                        />
                        <br />
                        <label htmlFor="exampleInputEmail1">To</label>
                        <input
                          type="email"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={handleChange}
                          name="email"
                          value={formData.email}
                        />
                        <br />
                        <label htmlFor="text">Info</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          name="info"
                          value={formData.info}
                        />
                        {/* <label for="date">Deadline</label>
                      <input className="my-select" type="date" placeholder="" />
                      <br />
                      <label for="departments">Depts</label>
                      &nbsp;&nbsp;
                      <select className="my-select" name="departments" id="">
                        <option value="Electrical">Electrical</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="English">English</option>
                        <option value="Physics">Physics</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Biomedical Engineering">
                          Biomedical
                        </option>
                        <option value="Gaming & Multimedia">
                          Gaming and Multimedia
                        </option>
                        <option value="Artificial Intelligence">
                          Artificial Intelligence
                        </option>
                      </select>
                      <br />
                      <label for="Recievers">Recievers</label> &nbsp;&nbsp;
                      <select className="my-select" name="Recievers" id="">
                        <option value="Vice Chancellor">Vice Chancellor</option>
                        <option value="Registrar">Registrar</option>
                        <option value="Dean">Dean</option>
                        <option value="HOD">HOD</option>
                        <option value="Professor">Professor</option>
                        <option value="Assistant Professor">
                          Assistant Professor
                        </option>
                        <option value="Lecturer">Lecturer</option>
                        <option value="Lab Assistant">Lab Assistant </option>
                      </select> */}
                      </div>
                    </Col>
                    <Col sm={4} md={8} lg={4}>
                      <div className="priority_col">
                        <div className="container-fluid-seek-bars">
                          <div className="priority-item">
                            <p>Priority:</p>
                            <input type="range" min="1" max="5" />
                          </div>
                          <div className="priority-item">
                            <p>Secrecy:</p>
                            <input type="range" min="1" max="5" />
                          </div>
                          <div className="priority-item">
                            <p style={{ textAlign: "center" }}>
                              Audio <br />
                              Message:
                            </p>
                            <input type="range" min="1" max="100" />
                          </div>
                        </div>
                        <div className="dates">
                          <div className="date">
                            <i className="far fa-calendar-plus"></i>
                            {new Date().toLocaleString("en-us")}
                          </div>
                          <div className="date">
                            <i className="fas fa-calendar-week"></i>
                            View Circulation list
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="container-fluid-editor">
                      <CKEditor activeclassName="editor" />
                    </div>
                  </div>
                </div>
                <Container fluid>
                  <div className="submitter">
                    <Button
                      as="input"
                      type="submit"
                      className="bt-footer"
                      size="md"
                      value="print"
                    />

                    <Button
                      as="input"
                      type="submit"
                      className="bt-footer"
                      size="md"
                      value="send"
                      onClick={submitHandler}
                    />
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
