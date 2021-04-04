import React from "react";

import Nav from "./Nav";
import PCDesign from "../Images/pcLogo.png";

export default function () {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <img
            className="pc-design"
            src={PCDesign}
            alt="Paperless Campus design"
          />
        </div>
        <div className="dashboard-footer">
          <footer>Copyrights Paperless Campus</footer>
        </div>
      </div>
    </div>
  );
}
