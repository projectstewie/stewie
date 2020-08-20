import React from "react";
import "./style.css";

const Listings = (props) => (

  <div className="row mb-5">
  
      <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
        <div className="block-4 text-center border">
          {/* <figure className="block-4-image"> */}
          {/* <img src={props.images.itemId1} className='img-fluid'></img> */}
          <img src='/images/blog_1.jpg' className='img-fluid'></img>
            {/* <a href={"/listing/" + props.id}><img src={item.img} alt="Image placeholder" className="img-fluid"></img></a> */}
          {/* </figure> */}
          <div className="block-4-text p-4">
            {/* <h3><a href={"/listing/123" + item.id}>{item.title}</a></h3> */}
            <h3><a href={"/listing/123"}>{props.listings.heading}</a></h3>
            {/* <p className="text-primary font-weight-bold">{props.listings.heading}</p> */}
            <p className="mb-0">{props.listings.description}</p>
            <p className="mb-0">{props.listings.price}</p>
          </div>
        </div>
      </div>
  </div>
)

export default Listings;