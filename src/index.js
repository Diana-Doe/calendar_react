import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView/index.jsx";
import Layout from "./views/Calendar/index.jsx"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/mycalendar">
          <Layout />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
