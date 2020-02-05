import React, { Component } from "react";
import "./style.css";
import MockDb from "../../../src/MockDb.json";
import axios from "axios";

class Listing extends Component {

  state = {
    MockDb
  }


  getData = () => {
    axios.get('http://localhost:4000/listings/345234523')
      .then(res => {
        console.log('data from get: ', res);
        res.json()
      })
      .then(data => this.setState({ listing: data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    console.log('Calling Get Data');
    this.getData();
    console.log(this.getData('listing'));
  }


  render() {
    console.log("state from listing page", this.state)
    return (
      <div className="site-wrap">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="/images/blog_1.jpg" alt="Image" className="img-fluid"></img>
              </div>
              <div className="col-md-6">
                {/* <h2 className="text-black">{state.title}</h2> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
                <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                <p><strong className="text-primary h4">$50.00</strong></p>
                <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>

              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default Listing;