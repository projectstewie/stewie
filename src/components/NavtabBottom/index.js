import React from "react";
import "./style.css";

const NavtabBottom = () => (
 <div>
     <div className="site-wrap">
     <header className="site-navbar" role="banner">
        <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li className="has-children active">
              <a href="/listings">BUY</a>
              <ul className="dropdown">
                <li><a href="#">Clothing and Accessories</a></li>
                <li><a href="#">Bath and Potty</a></li>
                <li><a href="#">Bedding and Decor</a></li>
                <li><a href="#">Toys and Learning</a></li>
                <li><a href="#">Health and Safety</a></li>
                <li><a href="#">Car Seats and Strollers</a></li>
                <li><a href="#">Travel Accessories</a></li>
                <li><a href="#">Bikes and Scooters</a></li>
                <li><a href="#">Nursery and Kids Room</a></li>
                <li><a href="#">Maternity and Nursery</a></li>
              </ul>
            </li>
         
            <li><a href="#">SELL</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      </nav>
      </header>
    </div>
 </div>
)

export default NavtabBottom;