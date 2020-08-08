import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import ListingComponent from "../components/Listing";
import Footer from "../components/Footer";

class Listing extends Component {

    constructor() {
        super();
    }

    state = {
        listing: []
    }

    componentDidMount = () => {
        fetch('http://localhost:4000/listings/345234523')
            .then(res => res.json())
            .then(item => this.setState({ listing: item }))
    }

    render() {
        return (
            <div >
                <NavtabTop />
                <NavtabBottom />
                <ListingComponent listing={this.state.listing} />
                <Footer />
            </div>
        )
    }
}

export default Listing;