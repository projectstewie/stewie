import React from "react";
import "./style.css";

const CartComponent = () => (

    <div className="site-section">
    <div className="container">
      <div className="row mb-5">



        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="product-thumbnail">Image</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-total">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>



              <tbody>

                <tr>
                  <td className="product-thumbnail">
                    <img src="images/cloth_1.jpg" alt="Image" className="img-fluid"></img>
                  </td>

                  <td className="product-name">
                    <h2 className="h5 text-black">Top Up T-Shirt</h2>
                  </td>

                  <td>$49.00</td>

                  <td>
                    <div className="input-group mb-3" style={{maxWidth: "120px"}}>

                      <div className="input-group-prepend">
                        <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                      </div>
                      <input type="text" className="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedBy="button-addon1"></input>
                      <div className="input-group-append">
                        <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                      </div>
                    </div>
                  </td>

                  <td>$49.00</td>
                  <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                </tr>

                <tr>
                  <td className="product-thumbnail">
                    <img src="images/cloth_2.jpg" alt="Image" className="img-fluid"></img>
                  </td>
                  <td className="product-name">
                    <h2 className="h5 text-black">Polo Shirt</h2>
                  </td>
                  <td>$49.00</td>
                  <td>
                    <div className="input-group mb-3" style={{maxWidth: "120px"}}>
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                      </div>
                      <input type="text" className="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                      <div className="input-group-append">
                        <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                      </div>
                    </div>

                  </td>
                  <td>$49.00</td>
                  <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                </tr>


              </tbody>
            </table>
          </div>
        </form>

      </div>

            </div>
          </div>

)

export default CartComponent;