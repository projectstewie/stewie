import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import ListingsComponent from "../components/Listings";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import "../App.css";

class Listings extends Component {

    render() {
        return (
            <div >
                <NavtabTop />
                <NavtabBottom />
                <Sort />
                <Categories />
                <ListingsComponent />          
                <Footer />
            </div>
        )
    }
}

export default Listings;