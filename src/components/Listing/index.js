import React from "react";
import "./style.css";


const Listing = (props) => {
  
  return(
    <div className="site-wrap">
      <a href='/listings'>Back to Listings</a>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={props.images} alt="Image" className="img-fluid"></img>
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{props.listing.heading}</h2>
                <p>{props.listing.description}</p>
                <p className="text-primary h4">{props.listing.price}</p>


                <div className="mb-1 d-flex">

                <div htmlFor="option-sm" className="d-flex mr-3 mb-3">
                <div className="d-inline-block mr-2" style={{top:"-2px", position:"relative"}}><input type="radio" id="option-sm" name="shop-sizes"></input></div> <div className="d-inline-block text-black">Small</div>
              </div>

              <div htmlFor="option-md" className="d-flex mr-3 mb-3">
                <div className="d-inline-block mr-2" style={{top:"-2px", position: "relative"}}><input type="radio" id="option-md" name="shop-sizes"></input></div> <div className="d-inline-block text-black">Medium</div>
              </div>

              <div htmlFor="option-lg" className="d-flex mr-3 mb-3">
                <div className="d-inline-block mr-2" style={{top:"-2px", position: "relative"}}><input type="radio" id="option-lg" name="shop-sizes"></input></div> <div className="d-inline-block text-black">Large</div>
              </div>

              <div htmlFor="option-xl" className="d-flex mr-3 mb-3">
                <div className="d-inline-block mr-2" style={{top:"-2px", position: "relative"}}><input type="radio" id="option-xl" name="shop-sizes"></input></div> <div className="d-inline-block text-black"> Extra Large</div>
              </div>


            </div>
            
            <div className="mb-5">

              <div className="input-group mb-3" style={{width: "120px"}}>

              <div className="input-group-prepend">
                <button className="btn btn-outline-primary js-btn-minus" type="button">-</button>
              </div>

              <div type="text" className="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></div>

              <div className="input-group-append">
                <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
              </div>

            </div>
            </div>


                <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Listing;