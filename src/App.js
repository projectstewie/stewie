import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Listing from "./pages/Listing";
import Cart from "./pages/Cart";
import './App.css';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* put exact back in path */}
            <Route path="/listings/" component={Listings} />
            <Route exact path={"/listing/:listingId"} component={Listing} />
            <Route path="/cart/" component={Cart} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;