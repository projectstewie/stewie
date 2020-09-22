import React from "react";
import "./style.css";

const CartCheckout = () => (

    <div className="site-section">
    <div className="container">

    <div className="row">
    <div className="col-md-6">
      <div className="row mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label className="text-black h4" for="coupon">Coupon</label>
          <p>Enter your coupon code if you have one.</p>
        </div>
        <div className="col-md-8 mb-3 mb-md-0">
          <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"></input>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary btn-sm">Apply Coupon</button>
        </div>
      </div>
    </div>
    <div className="col-md-6 pl-5">
      <div className="row justify-content-end">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12 text-right border-bottom mb-5">
              <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <span className="text-black">Subtotal</span>
            </div>
            <div className="col-md-6 text-right">
              <strong className="text-black">$230.00</strong>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6">
              <span className="text-black">Total</span>
            </div>
            <div className="col-md-6 text-right">
              <strong className="text-black">$230.00</strong>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>

)

export default CartCheckout;