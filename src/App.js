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
import Pdp from './pages/Pdp';
import mockdb from '../src/mockdb.json';

class App extends Component {

  state = {
    mockdb
  }

  
  componentDidMount() {
  console.log(this.state)

  }

  render() {
    console.log("Hey this works")
    return (
      <Router>
        <div>

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/listings/:id" component={Pdp} />
            {/* <Route component={NoMatch} /> */}
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;