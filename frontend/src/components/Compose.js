import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CKEditor from "react-ckeditor-component";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Compose() {
  // const authData = useSelector((state) => state.auth.authData);
  const [value, onChange] = useState(new Date());
  return (
    <>
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
                        <label for="text">Text</label>
                        <input type="text" placeholder="" />
                        <br />
                        <label for="text">From</label>
                        <input type="text" placeholder="" />
                        <br />
                        <label for="text">To</label>
                        <input type="text" placeholder="" />
                        <br />
                        <label for="text">Info</label>
                        <input type="text" placeholder="" />
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
                    <Button variant="primary" className="bt-footer" size="md">
                      <i className="fas fa-print"></i>
                      <div>Print</div>
                    </Button>

                    <Button variant="primary" className="bt-footer" size="md">
                      <i className="far fa-share-square"></i>
                      <div>Send</div>
                    </Button>
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
