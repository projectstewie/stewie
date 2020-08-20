import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import OneListing from "../components/OneListing";
import "../App.css";

class Product extends Component {
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
                <OneListing />          
                <Footer />
            </div>


        )
    }
}

export default Product;