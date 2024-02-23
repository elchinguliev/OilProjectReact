import React from 'react';
import './App.css';
import { useTotalPrice } from './TotalPriceContext'; 

const TotalOfFuelAndProduct = () => {
  const { totalPriceOfAll } = useTotalPrice(); 


    return (
    <div style={{
      color:"green",
      fontWeight:"bold",
      width:"200px",
      height:"200px",
      fontSize:"30px",
      marginRight:"-100px"     , 
    }}>
      Total price of fuel is  : {totalPriceOfAll} manat
    </div>
  );
};

export default TotalOfFuelAndProduct;
