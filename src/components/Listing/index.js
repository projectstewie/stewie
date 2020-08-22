import React from "react";
import "./style.css";

const Listing = (props) => (

  <div className="site-wrap">
    <a href='/listings'>Back to Listings</a>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="/images/blog_1.jpg" alt="clothing" className="img-fluid"></img>
              </div>
              <div className="col-md-6">
                <p className="text-primary">{props.listing.heading}</p>
                <p className="text-primary">{props.listing.description}</p>
                <p className="text-primary">{props.listing.price}</p>
                <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
)

export default Listing;