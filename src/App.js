import React from "react";
import FuelPart from "./FuelPart";
import ProductPart from "./ProductPart";
import TotalOfFuelAndProduct from "./TotalOfFuelAndProduct";
function App() {
  return (
    <div style={{display:"inline-block"}}>
      <div style={{ width: "50%", float: "left" }}>
        <ProductPart></ProductPart>
      </div>
      <div style={{ width: "50%", float: "right" }}>
        <FuelPart></FuelPart>
      </div>

      <div style={{textAlign:"center",marginTop:"35%",marginLeft:"110%"}}>
        <TotalOfFuelAndProduct></TotalOfFuelAndProduct>
      </div>
    </div>
  );
}

export default App;
