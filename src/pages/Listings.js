import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import "../App.css";

class Home extends Component {
    // state = {
    //     loggedIn: false,
    //     loading: true
    //     
    // }

    render() {
        return (
            <div >
                <NavtabTop />
                <NavtabBottom />
                
                <Footer />
            </div>


        )
    }
}

export default Home;