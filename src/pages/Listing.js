import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import Footer from "../components/Footer";
import ListingComponent from "../components/Listing";
import "../App.css";
import "../css/style.css";
import "../fonts/icomoon/style.css";
import "../images/hero_1.jpg";

class Listing extends Component {

    constructor(props) {
        super(props);
    

    this.state = {
        listing: [
        {
            name: "Blue T-shirt",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.",
            color: "blue",
            size: "S", 
            price: "$15"
        },
        {
            name: "Running shoes",
            description: "Adidas Running Shoes",
            color: "dark blue",
            size: "8",
            price: "$54"
        }
    ]
    };
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