import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TopBarProgress from "react-topbar-progress-indicator";
import "./styles/App.css";
import Login from "./pages/login";
import Register from "./pages/signup";
import Dashboard from "./pages/dashboard";
import AddDopler from "./pages/addNewDopler";
import AmazonLogin from "./pages/amazonLogin";
import Settings from "./pages/settings";
import DopplerInfo from "./pages/settings/dopplerInfo";
import Wifi from "./pages/settings/wifi";
import Brightness from "./pages/settings/brightness";
import DopplerColor from "./pages/settings/dopplerColor";
import Audio from "./pages/settings/audio";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/amazonLogin">
            <AmazonLogin />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/dopplerInfo">
            <DopplerInfo />
          </Route>
          <Route path="/wifi">
            <Wifi />
          </Route>
          <Route path="/brightness">
            <Brightness />
          </Route>
          <Route path="/dopplerColor">
            <DopplerColor />
          </Route>
          <Route path="/audio">
            <Audio />
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
