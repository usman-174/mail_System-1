import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Compose from "./components/Compose";
import Inbox from "./components/Inbox";
import Header from "./components/Header";
import Error from "./components/errorPage/Error";

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Header />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />

          <Route path="/compose" component={Compose} />
          <Route path="/inbox" component={Inbox} />
          <Route path="*" component={Error} />
        </Switch>
      </Container>
    </Router>
  );
}
