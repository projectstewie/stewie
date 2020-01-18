import React from "react";
import "./style.css";

const ProductDescription = () => (
<div className="site-wrap">
<div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="images/cloth_1.jpg" alt="Image" className="img-fluid"></img>
          </div>
          <div className="col-md-6">
            <h2 className="text-black">Tank Top T-Shirt</h2>
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

export default ProductDescription;