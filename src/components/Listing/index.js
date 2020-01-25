import React from "react";
import "./style.css";

const Listing = () => (


    <div className="row mb-5">
    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
      <div className="block-4 text-center border">
        <figure className="block-4-image">
          <a href="/listing/:id"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid"></img></a>
        </figure>
        <div className="block-4-text p-4">
          <h3><a href="/listings/:id">Tank Top</a></h3>
          <p className="mb-0">Finding perfect t-shirt</p>
          <p className="text-primary font-weight-bold">$50</p>
        </div>
      </div>
    </div>

  </div>
)

export default Listing;