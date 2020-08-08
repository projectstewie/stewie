import React, { Component } from "react";
import "./style.css";
import MockDb from "../../../src/MockDb.json";

class Listings extends Component {

  state = {
    MockDb
  }

  render() {
    return (
      <div className="row mb-5">
        {this.state.MockDb.map(item =>
          <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
            <div className="block-4 text-center border">
              <figure className="block-4-image">
                <a href={"/listing/" + item.id}><img src={item.img} alt="Image placeholder" className="img-fluid"></img></a>
              </figure>
              <div className="block-4-text p-4">
                <h3><a href={"/listing/" + item.id}>{item.title}</a></h3>
                <p className="mb-0">{item.description}</p>
                <p className="text-primary font-weight-bold">{item.price}</p>
              </div>
            </div>
          </div>

        )}
      </div>
    )
  }
}

export default Listings;