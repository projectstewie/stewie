import React from "react";
import "./style.css";

const Filter = () => (

  <div className="border p-4 rounded mb-4">
  <div className="mb-4">
    <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
    <div id="slider-range" className="border-primary"></div>
    <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled=""></input>
  </div>

  <div className="mb-4">
    <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
    <label for="s_sm" className="d-flex">
      <input type="checkbox" id="s_sm" className="mr-2 mt-1"> <span className="text-black">Small (2,319)</span></input>
    </label>
    <label for="s_md" className="d-flex">
      <input type="checkbox" id="s_md" className="mr-2 mt-1"> <span className="text-black">Medium (1,282)</span></input>
    </label>
    <label for="s_lg" className="d-flex">
      <input type="checkbox" id="s_lg" className="mr-2 mt-1"> <span className="text-black">Large (1,392)</span></input>
    </label>
  </div>

  <div className="mb-4">
    <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
    <a href="#" className="d-flex color-item align-items-center" >
      <span className="bg-danger color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Red (2,429)</span>
    </a>
    <a href="#" className="d-flex color-item align-items-center" >
      <span className="bg-success color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Green (2,298)</span>
    </a>
    <a href="#" className="d-flex color-item align-items-center" >
      <span className="bg-info color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Blue (1,075)</span>
    </a>
    <a href="#" className="d-flex color-item align-items-center" >
      <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Purple (1,075)</span>
    </a>
  </div>
</div>




)

export default Filter;