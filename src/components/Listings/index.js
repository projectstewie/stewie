import React from "react";
import "./style.css";

const Listings = (props) => (

  <div className="row mb-5">

      <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
        <div className="block-4 text-center border">
          <figure className="block-4-image">
          <img src="./images/blog_1.jpg" className='img-fluid'></img>
            {/* <a href={"/listing/" + props.id}><img src={item.img} alt="Image placeholder" className="img-fluid"></img></a> */}
          </figure>
          <div className="block-4-text p-4">
            {/* <h3><a href={"/listing/" + item.id}>{item.title}</a></h3> */}
            <p className>{props.listings.heading}</p>
            <p className="mb-0">{props.listings.description}</p>
            <p className="text-primary font-weight-bold">{props.listings.price}</p>
          </div>
        </div>
      </div>
  </div>
)

export default Listings;