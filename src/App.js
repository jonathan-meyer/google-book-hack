import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Emoji from "@stej/emoji";

import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route exact path="/search" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
        <div className="fixed-bottom bg-white">
          <hr />
          <p className="pull-right m-2">
            <Emoji>:copyright:</Emoji> 2019 Nobody
          </p>
        </div>
      </>
    </Router>
  );
}

export default App;
