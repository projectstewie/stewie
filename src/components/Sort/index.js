import React from "react";
import "./style.css";

const Sort = () => (
  <div className="row">
  <div className="col-md-12 mb-5">
    <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
    <div className="d-flex">
      <div className="dropdown mr-1 ml-md-auto">
        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Latest
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
          <a className="dropdown-item" href="#">Men</a>
          <a className="dropdown-item" href="#">Women</a>
          <a className="dropdown-item" href="#">Children</a>
        </div>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
          <a className="dropdown-item" href="#">Relevance</a>
          <a className="dropdown-item" href="#">Name, A to Z</a>
          <a className="dropdown-item" href="#">Name, Z to A</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Price, low to high</a>
          <a className="dropdown-item" href="#">Price, high to low</a>
        </div>
      </div>
    </div>
  </div>
</div>




)

export default Sort;