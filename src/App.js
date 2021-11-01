import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import TopBarProgress from "react-topbar-progress-indicator";
import "./styles/App.css";
import Login from "./pages/login";
import Register from "./pages/signup";
import Dashboard from "./pages/dashboard";
import AddDopler from "./pages/addNewDopler";
import AmazonLogin from "./pages/amazonLogin";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/amazonLogin">
            <AmazonLogin />
          </Route>
          <Route path="/addDopler">
            <AddDopler />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
