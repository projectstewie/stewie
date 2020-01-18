import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import Listing from "../components/Listing";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import "../App.css";

class Listings extends Component {
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
                <Sort />
                <Categories />
                <Listing />          
                <Footer />
            </div>


        )
    }
}

export default Listings;