import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { Container } from "react-bootstrap";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Compose from "./components/Compose";
import Inbox from "./components/Inbox";
import Meetings from "./components/Meetings";
import Tracker from "./components/Tracker";
import Navs from "./components/Header";
import Error from "./components/errorPage/Error";

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Navs />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/compose" component={Compose} />
          <Route path="/inbox" component={Inbox} />
          <Route path="/meetings" component={Meetings} />
          <Route path="/tracker" component={Tracker} />
          <Route path="*" component={Error} />
        </Switch>
      </Container>
    </Router>
  );
}
