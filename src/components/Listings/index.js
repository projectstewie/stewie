import React from "react";
import "./style.css";
import ImageGallery from 'react-image-gallery';

const Listings = ({ listings }) => {

  return (
    <div className="row mb-5">
      {listings && listings.map(item =>


        <div key={item.id} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
          <div className="block-4 text-center border">

            <ImageGallery
              items={item.images} showPlayButton={false}
            />

            <div className="block-4-text p-4">
              <h3><a href={`/listing/${item.id}`}>{item.heading}</a></h3>
              <p className="mb-0">{item.description}</p>
              <p className="mb-0">{item.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


export default Listings;