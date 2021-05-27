import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginView from "./views/LoginView/index.jsx";
import Layout from "./views/Calendar/index.jsx"

const Home = () => (
  <Fragment>
    <h1>Welcome to calendar!</h1>
  </Fragment>
);

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <main>
        <nav class="topnav">
          <div>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/login">Login</Link></span>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginView}></Route>
          <Route path="/mycalendar/:id" component={Layout}></Route>
        </Switch>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

