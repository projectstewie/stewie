import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavtabTop from "./components/NavtabTop";
// import NavtabBottom from "./components/NavtabBottom";
// import HeroImage from "./components/HeroImage";
// import Footer from "./components/Footer";
// import Listings from "./components/Listings";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import './App.css';

class App extends Component {

  state = {

  }

  componentDidMount() {

  }

  render() {
    console.log("Hey this works")
    return (
      <Router>
        <div>

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/listings" component={Listings} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;