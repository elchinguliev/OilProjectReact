import React from 'react';
import './App.css';
import { useTotalPrice } from './TotalPriceContext'; 

const TotalOfFuelAndProduct = () => {
  const { totalPriceOfAll } = useTotalPrice(); 

function handleButtonClick(){

    alert("Total Price : "+totalPriceOfAll.toFixed(2)  +" manat")
}
    return (
    <div>
      <button onClick={handleButtonClick} style={{backgroundColor:"green" ,color:"white" ,fontSize:"20px",fontWeight:"bold"}} >Calculate All Total Price</button>

    </div>
  );
};

export default TotalOfFuelAndProduct;
