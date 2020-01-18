import React from "react";
import "./style.css";

const Categories = () => (

  <div className="col-md-3 order-1 mb-5 mb-md-0">
  <div className="border p-4 rounded mb-4">
    <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
    <ul className="list-unstyled mb-0">
      <li className="mb-1"><a href="#" className="d-flex"><span>Men</span> <span className="text-black ml-auto">(2,220)</span></a></li>
      <li className="mb-1"><a href="#" className="d-flex"><span>Women</span> <span className="text-black ml-auto">(2,550)</span></a></li>
      <li className="mb-1"><a href="#" className="d-flex"><span>Children</span> <span className="text-black ml-auto">(2,124)</span></a></li>
    </ul>
  </div>
  </div>

)

export default Categories;