import React from "react";
import "./style.css";
import ImageGallery from 'react-image-gallery';

const Listing = ({ listing }) => {

  const { heading, description, images, price } = listing;

  let imgArr = []
  if (images) { imgArr = images }

  return (
    <div className="site-wrap">
      <a href='/listings'>Back to Listings</a>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ImageGallery
                items={imgArr} showPlayButton={false}
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{heading}</h2>
              <p>{description}</p>
              <p className="text-primary h4">{price}</p>
              <div className="mb-1 d-flex">

                <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                  <div className="d-inline-block mr-2" style={{ top: "-2px", position: "relative" }}><input type="radio" id="option-sm" name="shop-sizes"></input></div> <div className="d-inline-block text-black">Small</div>
                </label>

                <label htmlFor="option-md" class="d-flex mr-3 mb-3">
                  <div className="d-inline-block mr-2" style={{ top: "-2px", position: "relative" }}><input type="radio" id="option-md" name="shop-sizes"></input></div> <div className="d-inline-block text-black">Medium</div>
                </label>

                <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                  <div className="d-inline-block mr-2" style={{ top: "-2px", position: "relative" }}><input type="radio" id="option-lg" name="shop-sizes"></input></div> <div className="d-inline-block text-black">Large</div>
                </label>

                <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                  <div className="d-inline-block mr-2" style={{ top: "-2px", position: "relative" }}><input type="radio" id="option-xl" name="shop-sizes"></input></div> <div className="d-inline-block text-black"> Extra Large</div>
                </label>

                </div>

              <div className="mb-5">

                <div className="input-group mb-3" style={{ width: "120px" }}>

                  <div className="input-group-prepend">
                    <button className="btn btn-outline-primary js-btn-minus" type="button">-</button>
                  </div>

                  <div type="text" className="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></div>

                  <div className="input-group-append">
                    <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                  </div>

                </div>
              </div>
              <p><a href="/cart" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing;