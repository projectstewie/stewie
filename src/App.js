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
import Listing from './pages/Listing';
import MockDb from '../src/MockDb.json';

class App extends Component {

  state = {
    MockDb
  }

  
  componentDidMount() {
  console.log("This is from app", this.state)

  }

  render() {

    return (
      <Router>
        <div>

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/listings/" component={Listings} />
    
            <Route exact path={"/listing/:listingId"} component={Listing} />

            {/* <Route component={NoMatch} /> */}
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;