import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavtabTop from "./components/NavtabTop";
import NavtabBottom from "./components/NavtabBottom";
import HeroImage from "./components/HeroImage";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  state = {
   
  }

  componentDidMount() {

  }

  render() {
    console.log("Hey this works")
    return (
      // <Router>
        <div>
          <NavtabTop />
          <NavtabBottom />
          <HeroImage />
          <Footer />

          {/* <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" render={(props) => <Home {...props} handleLinkClick={this.handleLinkClick} />} />

            <div className="grid">
              <Route exact path="/employees" render={(props) => <Employees {...props} handleLinkClick={this.handleLinkClick} currentEmployeeId={this.state.currentEmployeeId} />} />
              <Route path={"/employees/" + this.state.currentEmployeeId} render={(props) => <Info {...props} handleLinkClick={this.handleLinkClick} currentEmployeeId={this.state.currentEmployeeId} />} />
            </div>

          </Switch> */}
        </div>
      // </Router>
    )
  }
}

export default App;