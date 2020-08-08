import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Listing from "./pages/Listing";
import './App.css';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listings/" component={Listings} />
            <Route exact path={"/listing/:listingId"} component={Listing} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;