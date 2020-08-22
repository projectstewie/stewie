import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import ListingsComponent from "../components/Listings";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import "../App.css";

class Listings extends Component {

    state = {
        listings: []
    }

    componentDidMount = () => {
        // This endpoint will change
        fetch('http://localhost:4000/listings/123')
            .then(res => res.json())
            // .then(data => 
            //     data.map(item => (
            //         {
            //             heading: item.heading,
            //             description:item.description,
            //             price:item.price,
            //             selling_id:item.selling_id
            //         }
            //     )))
            .then(item => this.setState({ listings: item }))
    }

    render() {
        return (
            <div >
                <NavtabTop />
                <NavtabBottom />
                <Sort />
                <Categories />
                <ListingsComponent listings={this.state.listings}/>
                <Footer />
            </div>
        )
    }
}

export default Listings;