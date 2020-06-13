import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstSlide from "./components/feature/FirstSlide";
import ResultSlide from "./components/feature/ResultSlide";
import ExampleSlide from "./components/feature/ExampleSlide";
import LastSlide from "./components/feature/LastSlide";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/layout/Content";

import "./assets/css/icofont.min.css";

function App() {
  return (
    <Router>
      <Sidebar />
      <Content>
        <Switch>
          <Route path="/" exact component={FirstSlide} />
          <Route path="/last-slide" exact component={LastSlide} />
          <Route path="/result-slide" exact component={ResultSlide} />
          <Route path="/example-slide" exact component={ExampleSlide} />
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
