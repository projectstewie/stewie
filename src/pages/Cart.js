import React, { Component } from "react";
import NavtabTop from "../components/NavtabTop";
import NavtabBottom from "../components/NavtabBottom";
import CartComponent from "../components/CartComponent";
import CartCheckout from "../components/CartCheckout";
import Footer from "../components/Footer";
import "../App.css";
import "../css/style.css";

class Cart extends Component {

    render() {
        // console.log(this.state)
        return (
            <div >
                <NavtabTop />
                <NavtabBottom />
                <CartComponent />
                <CartCheckout />
                <Footer />
            </div>
        )
    }
}

export default Cart;