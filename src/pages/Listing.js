import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import ListingComponent from "../components/Listing";
import Footer from "../components/Footer";
import "../App.css";

class Listing extends Component {
    // state = {
    //     loggedIn: false,
    //     loading: true
    //     
    // }

    // componentDidMount() {}

    // handleLinkClick = (event) => {
    //     console.log("Clicked", event)
    // }

    render() {
        return (
            <div >
                <NavtabTop />
                <NavtabBottom />
                <ListingComponent />       
                <Footer />
            </div>


        )
    }
}

export default Listing;