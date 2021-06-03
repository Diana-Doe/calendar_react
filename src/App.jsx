import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginView from "./views/LoginView";
import Layout from "./views/Calendar";
import Home from "./views/Home";

import { store } from "./store";
import "./style.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <main>
        <nav className="topnav">
          <div>
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginView}></Route>
          <Route path="/mycalendar/:id" component={Layout}></Route>
        </Switch>
      </main>
    </Router>
  </Provider>
);

export default App;
