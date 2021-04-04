import React from "react";
import CKEditor from "react-ckeditor-component";

import Nav from "./Nav";

export default function Meeting() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-10">
              <div className="container-fluid-compose-header">
                <div className="row">
                  <div className="col-sm-9">
                    <div className="inputs">
                      <label for="text">Agenda</label>
                      <input type="text" placeholder="" />
                      <br />
                      <label for="text">From</label>
                      <input type="text" placeholder="" />
                      <br />
                      <label for="date">Date</label>
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
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-3-a">
                    <div className="container-fluid-seek-bars">
                      <div className="slidecontainer-priority">
                        <p>Priority:</p>
                        <input type="range" min="1" max="5" />
                      </div>
                      <div className="slidecontainer-secrecy">
                        <p>Secrecy:</p>
                        <input type="range" min="1" max="5" />
                      </div>

                      <div className="slidecontainer-audio">
                        <p>Audio Message:</p>
                        <input type="range" min="1" max="100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid-editor">
                <CKEditor activeclassName="editor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
