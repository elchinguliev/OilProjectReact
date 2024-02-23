import React, { useState } from "react";
import { Products } from "./Products";
import { useTotalPrice } from "./TotalPriceContext";

const ProductPart = () => {
  const [products, setProducts] = useState(Products);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setTotalPriceOfAll } = useTotalPrice();

  const handleCountChange = (productId, newCount) => {
    const updatedFoods = products.map((product) =>
    product.id === productId ? { ...product, count: newCount } : product
    );
    setProducts(updatedFoods);
  };

  const handleCalculateTotalPrice = () => {
    const total = products.reduce((acc, product) => acc + product.price * product.count, 0);
    setTotalPrice(total.toFixed(2));
    setTotalPriceOfAll(
      (prevTotalPrice) => prevTotalPrice + parseFloat(total.toFixed(2))
    );
  };

  return (
    <div style={{
      backgroundColor:"blue",
      padding:"20px",
      boxShadow:" 0 10px 20px rgba(0, 0, 0, 0.1)",
      maxWidth:"600px",
      margin:"20px",
      textAlign:"center",
    }}>
      <h2>Products</h2>
      <div style={{
          display:"grid",
          gridGap:"15px",
          marginTop:"15px"
      }}>
        {products.map((food) => (
          <div key={food.id} style={{backgroundColor:"white"}}>
            <div >
              <h3 >{food.name} - {food.price} manat</h3>

            </div>
            <div >
              <input
                type="number"
                id={`countInput-${food.id}`}
                value={food.count}
                onChange={(e) =>
                  handleCountChange(food.id, parseInt(e.target.value))
                }
              />
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <button style={{backgroundColor:"green" ,color:"white" , fontSize:"20px",fontWeight:"bold"}} onClick={handleCalculateTotalPrice}>
        Calculate price 
      </button>
      <div style={{ fontSize :"20px", color:"black", fontWeight:"bold"}}>
        <p>Total price of products : {totalPrice} manat</p>
      </div>
    </div>
  );
};

export default ProductPart;
