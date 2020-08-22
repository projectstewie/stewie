import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import ListingComponent from "../components/Listing";
import "../App.css";
import "../css/style.css";
import "../fonts/icomoon/style.css";


class Listing extends Component {

    state = {
        listing: []
    }

    componentDidMount = () => {
        fetch('http://localhost:4000/listings/345234523')
            .then(res => res.json())
            .then(item => this.setState({ listing: item }))
    }

    render() {
        // console.log(this.state)
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