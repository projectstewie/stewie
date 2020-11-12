import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import ClothingCategory from "../components/ClothingCategory";
import Footer from "../components/Footer";
import "../App.css";
import "../css/style.css";
import "../fonts/icomoon/style.css";
import "../images/hero_1.jpg";

class Clothing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listings: []
        }
        
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
                <ClothingCategory listings={this.state.listings.items}/>
                <Footer />
            </div>
        )
    }
}

export default Clothing;