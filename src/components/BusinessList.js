import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessList() {
    return (
        <ul className="row row-cols-1 row-cols-sm-3 g-3">
           <BusinessCard></BusinessCard>
           <BusinessCard></BusinessCard>
           <BusinessCard></BusinessCard>
        </ul>   
)}


export default BusinessList;
