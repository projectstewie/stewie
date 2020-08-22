import React from "react";
import "./style.css";

const Listing = ({ listing }) => (
  <div className="site-wrap">
  {console.log(listing.images)}
  {/* {listing.images.map(image =>    */}
    {/* console.log(image) */}
     {/* <img src={image[0]} alt="clothing" className="img-fluid"></img>  */}
   {/* )} */}
    <a href='/listings'>Back to Listings</a>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="/images/blog_1.jpg" alt="clothing" className="img-fluid"></img>
              </div>
              <div className="col-md-6">
                <p className="text-primary">{listing.heading}</p>
                <p className="text-primary">{listing.description}</p>
                <p className="text-primary">{listing.price}</p>
                <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

)

export default Listing;