import React from "react";
import image from "../images/La-Cabana-300x300.jpg";

//Business Componennt
function BusinessCard() {
  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt="" className="card-img-top" />
          <h1 className="card-title">Business Name</h1>
          <p>Business Address</p>
          <p>Business City</p>
          <p>Business Zipcode</p>
          <p>category</p>
          <p>rating</p>
          <p>review Count</p>
      </div>
    </div>
  );
}

export default BusinessCard;
