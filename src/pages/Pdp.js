import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import ProductDescription from "../components/ProductDescription";
import Footer from "../components/Footer";
import "../App.css";

class Pdp extends Component {
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
                <ProductDescription />       
                <Footer />
            </div>


        )
    }
}

export default Pdp;