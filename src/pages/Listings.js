import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import ListingsComponent from "../components/Listings";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import "../App.css";

class Listings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listings: []
        };
    };

    componentDidMount = () => {
        fetch('http://localhost:4000/listings')
            .then(res => res.json())
            .then(allListings => this.setState({ listings: allListings }))
    }

    render() {
        return (
            <div >
                <NavtabTop />
                <NavtabBottom />
                <Sort />
                <Categories />
                <ListingsComponent listings={this.state.listings.items}/>
                <Footer />
            </div>
        )
    }
}

export default Listings;