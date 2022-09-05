import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import About from "./routes/About";
import Home from "./routes/Home";
import Something from "./routes/Something";
import "./Texts.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/about">
            <About class_name="texts" />
          </Route>
          <Route path="/service">
            <h1>Service</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route path="/something">
            <Something class_name="texts" />
          </Route>
          <Route path="/">
            <Home class_name="texts" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
