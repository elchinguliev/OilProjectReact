import React, { useState } from "react";
import { Fuels } from "./Fuels";
import "./App.css";
import { useTotalPrice } from "./TotalPriceContext";

const FuelPart = () => {
  const [selectedFuel, setSelectedFuel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [priceOfFuel, setPriceOfFuel] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setTotalPriceOfAll } = useTotalPrice();

  const handleFuelChange = (event) => {
    const selectedFuelType = event.target.value;
    setSelectedFuel(selectedFuelType);
    const selectedFuelObj = Fuels.find((fuel) => fuel.type === selectedFuelType);
    if (selectedFuelObj) {
      setPriceOfFuel(selectedFuelObj.price);
    } else {
      setPriceOfFuel(0);
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCalculateTotalPrice = () => {
    const selectedFuelObj = Fuels.find((fuel) => fuel.type === selectedFuel);
    if (selectedFuelObj && quantity !== "") {
      const pricePerLiter = selectedFuelObj.price;
      const total = pricePerLiter * quantity;
      setTotalPrice(total.toFixed(2));
      setTotalPriceOfAll(
        (prevTotalPrice) => prevTotalPrice + parseFloat(total.toFixed(2))
      );
    } else {
      setTotalPrice(0);
    }
  };

  return (
    <div style={{backgroundColor:"red",padding:"20px", margin:"20px",maxWidth:"700px",textAlign:"center"}}>
      <div >
        <h1>Fuel</h1>
      </div>
      <div >
       
          <label htmlFor="fuelSelect">Fuel's Type</label>
          <select

            value={selectedFuel}
            onChange={handleFuelChange}
          >
            <option value="">Select Fuel</option>
            {Fuels.map((f) => (
              <option key={f.id} value={f.type}>
                {f.type}
              </option>
            ))}
          </select>


          <label htmlFor="quantityInput">Fuel's Price</label>
          <input
    
            disabled
            type="number"
            value={priceOfFuel}
          />

          <label htmlFor="quantityInput">Fuel's Litres</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
  
        <button style={{fontWeight:"bold",fontSize:"20px", backgroundColor:"green" ,color:"white" }} onClick={handleCalculateTotalPrice}>
             Calculate Price   
          </button>
      </div>
      <div style={{fontWeight:"bold",fontSize:"20px"}}>
        <p>Total Price Of Fuel: {totalPrice} manat</p>
      </div>
    </div>
  );
};

export default FuelPart;
